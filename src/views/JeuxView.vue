<template>

  <div :style="{ display: displayMenu ? 'flex' : 'none' }" id="startPage">


    <button @click="startGame">Jouer au jeux !</button>

  </div>
  <div :style="{ display: displayGame ? 'block' : 'none' }" id="app">
    <img src="../assets/pictures/game/scoreBoard.svg" alt="">
    <p id="score">Score: {{ score }}</p>
    <p id="chrono">{{ formattedTime }}</p>
    <p id="time">S</p>
    <div class="game-board">
      <div v-for="(cube, index) in cubes" :key="cube.id" class="cube" :style="{
        width: cube.size + 'px',
        height: cube.size + 'px',
        top: cube.y - ((cube.size - this.maxSize) / 2) + 'px',
        left: cube.x - ((cube.size - this.maxSize) / 2) + 'px',
      }" @click="removeCube(cube.id)"></div>
    </div>
  </div>

  <div :style="{ display: displayResult ? 'flex' : 'none' }" id="resultGame">
    <div class="result-card">
      <img src="../assets/pictures/game/victoryMedal.svg" alt="Score" class="result-image">
      <h2>VICTOIRE !</h2>
      <p>Bravo tu as gagner un code promo de 20% !</p>
      <div id="promoCode">
        <img src="../assets/pictures/game/horizontalArrow.svg" alt="">
        <div id="codeContainer">
          <p id="code">SRG8-645D-FGCX</p>
        </div>
      </div>
      <!-- <button @click="startGame">Rejouer</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cubes: [], // Liste des cubes à afficher
      score: 0, // Score du joueur
      maxSize: 100, // Taille initiale des cubes
      minSize: 10, // Taille minimale des cubes avant qu'ils disparaissent
      interval: null, // Référence à l'intervalle de génération des cubes
      idCounter: 0, // Compteur pour générer des ID uniques pour chaque cube
      time: 25, // Temps écoulé en secondes
      timerInterval: null, // Référence de l'intervalle pour le chronomètre
      gameEnd: false,
      displayGame: false,
      displayMenu: true,
      displayResult: false,
    };
  },
  computed: {
    formattedTime() {
      const minutes = String(Math.floor(this.time / 60)).padStart(2, "0");
      const seconds = String(this.time % 60).padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
  },
  methods: {
    startGame() {
      this.displayGame = true;
      this.displayMenu = false;
      this.displayResult = false;
      this.score = 0;
      this.cubes = [];
      this.resetTimer();
      this.startTimer();
      console.log("le jeux démare !")

      this.cubeInterval = setInterval(() => {
        this.updateCubes();
      }, 80); // Disparaissent toutes les 80ms

    },

    gameFinish() {
      this.displayMenu = false;
      this.displayGame = false;
      this.displayResult = true;
      this.stopTimer();
      clearInterval(this.cubeInterval);
    },

    // Méthode pour générer un nouveau cube
    generateCube() {
      if (this.cubes.length >= 1) {
        return;
      }

      const gameBoard = document.querySelector('.game-board');
      const rect = gameBoard.getBoundingClientRect();

      const size = this.maxSize;

      const x = Math.random() * (rect.width - size);
      const y = Math.random() * (rect.height - size);

      this.cubes.push({
        id: this.idCounter++,
        x,
        y,
        size,
      });
    },


    // Méthode pour gérer le clic sur un cube
    removeCube(id) {
      // Retirer uniquement le cube avec l'ID correspondant
      this.cubes = this.cubes.filter(cube => cube.id !== id);
      this.score += 1; // Augmente le score
    },

    // Méthode pour réduire la taille des cubes au fur et à mesure
    updateCubes() {
      this.cubes = this.cubes.map(cube => {
        const newSize = cube.size - 1;
        return newSize > this.minSize
          ? { ...cube, size: newSize }
          : null; // Retourne null si la taille devient trop petite
      }).filter(Boolean); // Supprime les cubes qui ont disparu (taille trop petite)
    },

    // Démarrer le chronomètre
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.time--;

        if (this.time === 20) {
          clearInterval(this.cubeInterval); // Arrêter l'ancien intervalle
          this.cubeInterval = setInterval(() => {
            this.updateCubes();
          }, 20); // Accélérer la disparition des cubes à 20ms
        }
        if (this.time === 10) {
          clearInterval(this.cubeInterval); // Arrêter l'ancien intervalle
          this.cubeInterval = setInterval(() => {
            this.updateCubes();
          }, 10); // Accélérer la disparition des cubes à 20ms
        }

        if (this.time <= 0) {
          this.gameFinish();
        }
      }, 1000);
    },

    // Arrêter le chronomètre
    stopTimer() {
      clearInterval(this.timerInterval);
    },

    // Réinitialiser le chronomètre
    resetTimer() {
      this.stopTimer();
      this.time = 25;
    },

    startGeneratingCubes() {
      clearInterval(this.cubeInterval);
      this.cubeInterval = setInterval(() => {
        if (this.displayGame) {
          this.generateCube();
          this.updateCubes();
        }
      }, 200);
    },
  },
  mounted() {
    // Démarre le chronomètre

    // Génère des cubes toutes les secondes
    this.interval = setInterval(() => {
      this.generateCube();
    }, 200);

  },
  beforeDestroy() {
    clearInterval(this.interval); // Arrête la génération de cubes quand le composant est détruit
    clearInterval(this.timerInterval);
  },

};
</script>

<style scoped>
@font-face {
  font-family: 'Monomaniac One';
  src: url('../assets/font/MonomaniacOne-Regular.ttf');
}

* {
  font-family: 'Monomaniac One';
}

#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #8AA7AE4D;
  min-height: 100vh;
  margin-top: 11vh;
  background-image: url('../assets/pictures/game/backgroundGame.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.game-board {
  position: relative;
  justify-content: center;
  width: 60%;
  height: 60vh;
  overflow: hidden;
  background-color: #FFFFFFB3;
  border: #000000 solid 1px;
  margin: 0 auto;
}

#score {
  position: absolute;
  top: 135px;
  left: 45%;
  font-size: 3rem;
  color: #FFFFFF;
}


#chrono {
  position: absolute;
  top: 235px;
  left: 45.5%;
  font-size: 2.8rem;
  color: #FFFFFF;
}

#time {
  position: absolute;
  top: 275px;
  left: 53.5%;
  font-size: 1.6rem;
  color: #FFFFFF;
}

.cube {
  background-image: url(../components/Icons/shoesMemoria.svg);
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;

  position: absolute;
  background-color: #A8BFCA;
  /* box-shadow: 0px 0px 20px rgba(117, 119, 255, 0.934); */
  border-radius: 70%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

#startPage {
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;
  margin-top: 10vh;
}

#resultGame {
  justify-content: center;
  align-items: center;
  margin-top: 11vh;
  width: 100%;
  height: 80vh;
  background-color: #8AA7AE4D;
  background-image: url('../assets/pictures/game/backgroundGameFinish.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.result-card {
  background-color: #FFFFFFDE;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.result-image {
  width: 100px;
}

.result-card h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #F3B568;
}

.result-card p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

#promoCode {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}

#codeContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DCEFFA;
  border-radius: 10px;
  height: 50px;
  min-width: 250px;
}

#codeContainer>p {
  color: #73020C;
  font-size: 1.7rem;
  padding: 15px;
}






button {
  background: linear-gradient(135deg, #987eff, #8c75ff);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0px 5px 15px rgba(117, 129, 255, 0.4);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 10px 20px rgba(117, 119, 255, 0.6);
}

button:active {
  transform: translateY(1px);
  box-shadow: 0px 2px 10px rgba(124, 117, 255, 0.5);
}
</style>

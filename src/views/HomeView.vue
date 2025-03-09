<script>

export default {
  data() {
    return {
      isHovered: false, 
    };
  },
  methods: {
    // Méthode pour défiler vers la section about
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    },
  },
};

</script>

<template>

  <div id="brand">

    <h1 id="title">Memoria</H1>
    <h2>“Gravez votre parcours, portez votre victoire
      Mémoria, le t-shirt de votre marathon”</h2>
    <RouterLink :to="{ name: 'Shop' }">
      <button id="store">Voir boutique</button>
    </RouterLink>

    <div id="boxArrow" @mouseover="isHovered = true" @mouseleave="isHovered = false" @click="scrollToAbout">
      <img class="arrow_down" src="../assets/pictures/down-arrow.png" alt="Flèche vers le bas"
        :class="{ 'arrow_down_hover': isHovered }">
    </div>

  </div>

  <div id="about">

    <div id="history">
      <div id="imgHistory"></div>
      <div id="textHistory">
        <h2>Notre histoire</h2>
        <p>Memoria est une marque de vêtements de sport qui a vu le jour en 2019.
          Elle a été créée par deux amis, passionnés de sport et de mode.
          Leur objectif était de proposer des vêtements de sport de qualité,
          à la fois confortables et élégants.
          Ils ont donc décidé de créer leur propre marque,
          en s’inspirant des tendances actuelles et en y apportant leur touche personnelle.
          Aujourd’hui, Memoria est devenue une marque reconnue dans le monde du sport,
          et elle continue de proposer des vêtements de sport de qualité,
          pour les hommes et les femmes qui veulent allier performance et style.</p>
      </div>
    </div>
    <div id="valor"></div>


  </div>

  <div id="contact">

    <div id="contactForm">
      <h2>Contactez-nous</h2>
      <form>
        <input type="text" placeholder="Nom">
        <input type="text" placeholder="Prénom">
        <input type="email" placeholder="Email">
        <textarea placeholder="Message"></textarea>
        <button>Envoyer</button>
      </form>
    </div>


  </div>






</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

template {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

}

#brand {
  position: relative;
  height: 90vh;
  width: 100%;
  /* background-color: red; */
  margin-top: 10vh;
  scroll-margin-top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#title {
  font-size: 11em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
}



#boxArrow {
  position: absolute;
  bottom: 55px;
  width: 60px;
  height: 100px;
  /* background-color: red;  */
  border: 3px solid black;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;


}

#boxArrow::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.589);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

#boxArrow:hover::before {
  transform: scaleY(1);
}

.arrow_down {
  z-index: 12;
  width: 30px;
  transition: 0.3s ease-in-out;
}

.arrow_down_hover {
  width: 42px;

}


#about {
  /* background-color: red; */
  height: 90vh;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  scroll-margin-top: 100px;
}

#history {
  margin-top: 5%;
  position: relative;
  height: 60%;
  width: 60%;
  /* background-color: blue; */

  /* display: flex; */
}

#imgHistory {
  margin-top: 30px;
  position: absolute;
  height: 70%;
  width: 70%;
  background-color: gray;
  border-radius: 30px;
}

#textHistory {
  position: absolute;
  height: 60%;
  width: 60%;
  bottom: 0;
  right: 0;
  border: 3px solid black;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 25px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}

#contact {
  /* background-color: red; */
  height: 90vh;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;

  display: flex;
  justify-content: center;
  align-items: center;

}

#contactForm {
  /* margin-top: 5%; */
  position: relative;
  height: 60%;
  width: 60%;
  /* background-color: blue; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
}

textarea {
  width: 80%;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
}
</style>

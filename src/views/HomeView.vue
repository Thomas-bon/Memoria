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

  <!-- <div id="testBG"></div> -->

  <img id="bg" src="../assets/pictures/BGhomepage.svg" alt="">

  <div id="brand">

    <!-- <RouterLink :to="{ name: 'Shop' }">
      <button id="store">Voir boutique</button>
    </RouterLink> -->

    <!-- <div id="boxArrow" @mouseover="isHovered = true" @mouseleave="isHovered = false" @click="scrollToAbout">
      <img class="arrow_down" src="../assets/pictures/down-arrow.png" alt="Flèche vers le bas"
        :class="{ 'arrow_down_hover': isHovered }">
    </div> -->

  </div>

  <div id="about">

    <div id="tshirts">
      <div class="tshirt" id="tshirt1"></div>
      <div class="tshirt" id="tshirt2"></div>
    </div>

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

#bg {
  width: 100%;
  height: auto; /* hauteur automatique selon la largeur */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
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
  height: 210vh;
  width: 100%;
  /* background-color: red; */
  /* margin-top: 10vh; */
  scroll-margin-top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

/* #boxArrow {
  position: absolute;
  bottom: 55px;
  width: 60px;
  height: 100px;
  border: 3px solid black;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;


} */

/* #boxArrow::before {
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
} */

/* #boxArrow:hover::before {
  transform: scaleY(1);
} */

/* .arrow_down {
  z-index: 12;
  width: 30px;
  transition: 0.3s ease-in-out;
} */

/* .arrow_down_hover {
  width: 42px;

} */


#about {
  /* background-color: red; */
  height: 90vh;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  scroll-margin-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#tshirts {
  width: 60%;
  height: 80%;
  /* background-color: aqua; */
  z-index: 10;

  display: flex;
}

.tshirt {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
  cursor:pointer;
}

#tshirt2 {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_2.svg);
  width: 42%;
}

#tshirt2:hover {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_2_dos.svg);
  
}

#tshirt1:hover {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_1_dos.svg);
  
}

#tshirt1 {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_1.svg);
  width: 58%;
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

<script>

export default {
  data() {
    return {
      isHovered: false, // Propriété pour suivre l'état de survol
    };
  },
};

</script>

<template>

  <div id="brand">

    <h1 id="title">Memoria</H1>
    <h2>“Gravez votre parcours, portez votre victoire
      Mémoria, le t-shirt de votre marathon”</h2>
    <button id="store">Voir boutique</button>

    <div 
      id="boxArrow" 
      @mouseover="isHovered = true" 
      @mouseleave="isHovered = false"
    >
      <img 
        class="arrow_down" 
        src="../assets/pictures/down-arrow.png" 
        alt="Flèche vers le bas"
        :class="{ 'arrow_down_hover': isHovered }" 
      >
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


</style>

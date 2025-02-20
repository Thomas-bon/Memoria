<script>

</script>

<template>

  <div id="brand">

    <h1 id="title">Memoria</H1>
    <h2>“Gravez votre parcours, portez votre victoire
      Mémoria, le t-shirt de votre marathon”</h2>
    <button id="store">Voir boutique</button>

  </div>

  <div id="arrowSlide">
    <div id="boxArrow">
      <div id="arrow">
        <img src="" alt="">
      </div>
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
  height: 100vh;
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

#arrowSlide {
  width: 100%;
  height: 100px;
  background-color: red;
}
</style>

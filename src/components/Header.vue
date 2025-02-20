<script>
</script>

<template>
  <header>
    <div class="BarHead">
      <div class="alignHeader">
        <div id="logo">
          <a href="#"><img id="memoriaLogo" src="./Icons/logo.png" alt=""></a>
        </div>
        <div class="linksAlign">
          <div id="boutique">
            <a href="#">Boutique</a>
          </div>
          <div id="About">
            <a href="#">About</a>
          </div>
          <div id="Contacts">
            <a href="#">Contacts</a>
          </div>
        </div>
        <div id="shopLogo">
          <a href="#"><img id="shopBag" src="./Icons/shopLogo.svg" alt=""></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

header {
  background-color: green;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
}

.BarHead {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.alignHeader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 380px;
}



.linksAlign {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 125px;

}

img {
  height: 75px;
  width: 75px;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

#shopBag {
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#memoriaLogo{
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
  font-size: 2em;
}

</style>
<script>

</script>


<template>
  <div class="Container">
    <div id="title">
      <h1>Nos vêtements</h1>
    </div>
    <div id="line"></div>

    <div class="GridProducts">

      <RouterLink :to="{ name: 'Product' }">
      <div class="FirstProduct">
      <div id="Product">
        <img src="/src/assets/pictures/TshirtImg.svg" alt="">
      </div>
      <div id="NameProduct">
        <h1>T-Shirt MÉMORIA</h1>
      </div>
    </div>
    </RouterLink>

    <RouterLink :to="{ name: 'Product' }">
      <div id="SecondProduct">
        <div id="Product">
          <img src="/src/assets/pictures/TshirtImg.svg" alt="">
        </div>
        <div id="NameProduct">
        <h1>T-Shirt MÉMORIA</h1>
      </div>
      </div>
    </RouterLink>

      <RouterLink :to="{ name: 'Product' }">
      <div id="ThridProduct">
        <div id="Product">
          <img src="/src/assets/pictures/TshirtImg.svg" alt="">
        </div>
        <div id="NameProduct">
        <h1>T-Shirt MÉMORIA</h1>
      </div>
      </div>
      </RouterLink>

    </div>

  </div>
</template>

<style scoped>
h1 {
  color: #010101;
}

template {
  height: 90vh;
  width: 100%;
}

.Container {
  margin-top: 10vh;
  width: 100vw;
}

#title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  margin-top: 105px;
}

#line {
  width: 100%;
  height: 1px;
  background-color: #010101;
  margin-top: 10px;
}

.GridProducts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 100px;
  margin-right: 25px;
  margin-left: 25px;

}

#Product {
  background-color: #D9D9D9;
  border: solid black 3px;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content:center ;
}

#NameProduct {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

a {
  text-decoration: none;
}

</style>

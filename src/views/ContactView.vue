<script>
</script>

<template>

  <body>
    <div id="alignPage">
      <h1>CONTACTEZ NOUS</h1>
      <div id="formAndNews">
        <form action="" method="">
          <div class="row">
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="telephone" placeholder="Téléphone" pattern="[0-9]" required>
          </div>

          <input type="text" name="nom_prenom" placeholder="Nom, prenom" required>

          <div class="row">
            <textarea name="message" placeholder="Votre message..." required></textarea>
          </div>

          <button type="submit"><span>Envoyer</span></button>


        </form>
        <div id="news">
          <h2>Nos nouveautés</h2>
          <a href=""><img src="../assets/pictures/tshirt/tshirt_seville_default_black_1.png" alt="" id="tshirtNew"></a>
        </div>
      </div>
      <div id="infoContact">
        <div class="infoBox">
          <div>
            <img src="../assets/pictures/iconTelContactPage.png" alt="">
            <h2>+66 08 54 60 84</h2>
          </div>
          <p>Besoin d’une réponse rapide ? Appelez-nous directement, nous sommes disponibles pour répondre à toutes vos
            questions.</p>
        </div>
        <div class="infoBox">
          <div>
            <img style="width: 100px; height: 100px;" src="../assets/pictures/iconMailContactPage.png" alt="">
            <h2>memoria@gmail.com</h2>
          </div>
          <p>Une demande, une collaboration ou un mot d’encouragement ? Écrivez-nous à tout moment, nous vous répondrons
            dans les plus brefs délais.</p>
        </div>
        <div class="infoBox">
          <div>
            <img src="../assets/pictures/iconLocationContactPage.png" alt="">
            <h2>France, Annecy</h2>
          </div>
          <p>Notre atelier est basé à Annecy, entre lacs et montagnes. Passez nous voir ou envoyez-nous un courrier, on
            vous accueillera toujours avec le sourire.</p>
        </div>
      </div>
      <iframe id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50984.85478461276!2d6.076803044724579!3d45.88735217460559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8ffa1c0551c9%3A0x42781681620534ba!2sAnnecy!5e0!3m2!1sfr!2sfr!4v1744722680317!5m2!1sfr!2sfr"
        width="100%" height="600" style="border:0; margin-top: 100px; margin-bottom: 60px;" allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>

    </div>

  </body>
</template>

<style scoped>
body {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#alignPage {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

#alignPage h1 {
  font-size: 4em;
  font-family: "Inter";
}

#news h2 {
  /* height: 30%; */
  width: 100%;
  height: auto;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  color: #807f7f;
  font-family: "monomaniac";
  font-size: 2em;
  border-bottom: 2px #B9B9B9 solid;
}

#tshirtNew {
  width: 70%;
  height: auto;
}

#news a {
  display: flex;
  justify-content: center;
  align-items: center;
}

#formAndNews {
  overflow: hidden;
  padding: 10px;
  width: 100%;
  height: 70%;

  display: flex;
  gap: 30px;
}

#news {
  width: 35%;
  height: 45vh;
  border: 3px solid #B9B9B9;
  padding: 20px;
  padding-top: 0;
  overflow: hidden;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 10px;
}


form {
  width: 60%;
}

.row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.row input,
.row textarea {
  flex: 1;
  min-width: 0;
}

input,
textarea {
  padding: 10px;
  border: 3px solid #B9B9B9;
  border-radius: 4px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  font-size: 1.5em;
  font-family: "monomaniac";

}

textarea {
  resize: vertical;
  height: 200px;
  margin-top: 20px;
}

button {
  width: 250px;
  height: 100px;
  background-color: #73020C;
  color: white;
  border: 2px solid #000000;
  font-family: "MonoManiac One";
  font-size: 40px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  transition: left 0.4s ease;
}

button:hover::before {
  left: 0;
}

button span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

button:hover span {
  color: #73020C;
}


/* button:hover { */
/* background-color: #0056b3; */
/* } */

#infoContact {
  width: 100%;
  height: 300px;
  margin-top: 10%;

  display: flex;
  gap: 50px;
  justify-content: center;
}

.infoBox {
  width: 30%;
  height: 100%;
  background-color: white;
  padding: 30px;
  padding-top: 10px;
  color: #B9B9B9;
  border: 3px #B9B9B9 solid;

  overflow: hidden;
}

.infoBox>div:first-child {
  height: 40%;
  display: flex;
  align-items: center;
  gap: 10%;
}

.infoBox>div:first-child img {
  width: 80px;
  height: 80px;

}

.infoBox>div:first-child h2 {
  font-size: 1.5em;
  font-family: "monomaniac";
  text-align: center;
}

.infoBox p {
  font-size: 1.4em;
  text-align: center;
  font-family: "monomaniac";
  margin-top: 10px;
}

#map {
  width: 100%;
  height: 600px;
  margin-top: 100px;
  margin-bottom: 60px;
  /* background-color: black; */
}
</style>
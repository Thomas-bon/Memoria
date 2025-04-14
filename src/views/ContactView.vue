<template>
  <div class="contact-wrapper">
    <h1 class="animated-header">Contactez-nous</h1>
    
    <div id="contact-form" class="form-container">
      <div class="form-section animated-input">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="form.name" placeholder="Entrez votre nom" required />
      </div>

      <div class="form-section animated-input">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" placeholder="Entrez votre email" required />
      </div>

      <div class="form-section animated-input">
        <label for="message">Message :</label>
        <textarea id="message" v-model="form.message" placeholder="Votre message" required></textarea>
      </div>

      <button @click="submitForm" id="submit-btn" class="animated-btn">Envoyer</button>
    </div>

    <div id="contact-info" class="animated-info">
      <p>Nous vous répondrons dans les plus brefs délais.</p>
      <p>Vous pouvez aussi nous contacter par :</p>
      <ul>
        <li>Email: <a href="mailto:support@votresite.com">support@votresite.com</a></li>
        <li>Téléphone: +1 (555) 123-4567</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        this.$emit('formSubmitted', this.form); // Simuler l'envoi du formulaire
        alert('Votre message a été envoyé avec succès !');
        this.resetForm();
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
@font-face {
    font-family: "Monomaniac";
    src: url(../assets/font/MonomaniacOne-Regular.ttf);
}

@font-face {
    font-family: "Inter";
    src: url(../assets/font/Inter_18pt-ExtraBold.ttf);
}

.contact-wrapper {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/pictures/BGcontactpage.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 1s ease-out;
}

.animated-header {
    font-family: "Inter";
    font-size: 3.5em;
    color: white;
    text-align: center;
    opacity: 0;
    animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.form-container {
    width: 80%;
    max-width: 600px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 10px;
    color: white;
    margin-top: 20px;
    animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.form-section {
    margin-bottom: 20px;
}

.form-section label {
    font-size: 1.2em;
    font-family: "Monomaniac";
    margin-bottom: 10px;
    display: block;
    opacity: 0;
    animation: fadeIn 1s ease-out 0.5s forwards;
}

.form-section input,
.form-section textarea {
    width: 100%;
    padding: 12px;
    font-size: 1.1em;
    font-family: "Monomaniac", sans-serif;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeIn 1s ease-out 1s forwards;
}

.form-section input:focus,
.form-section textarea:focus {
    outline: none;
    border-color: #73020C;
    box-shadow: 0px 4px 12px rgba(115, 2, 12, 0.3);
}

.form-section input:hover,
.form-section textarea:hover {
    border-color: #73020C;
}

#submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #73020C;
    color: white;
    font-size: 1.5em;
    font-family: "Monomaniac";
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeIn 1s ease-out 1.5s forwards;
}

.animated-btn:hover {
    transform: scale(1.1);
    background-color: #85091C;
}

#contact-info {
    margin-top: 40px;
    text-align: center;
    color: white;
    opacity: 0;
    animation: fadeIn 1s ease-out 2s forwards;
}

#contact-info ul {
    list-style: none;
    padding: 0;
}

#contact-info ul li {
    font-size: 1.2em;
    margin: 10px 0;
}

#contact-info ul li a {
    color: #73020C;
    text-decoration: none;
    transition: color 0.3s ease;
}

#contact-info ul li a:hover {
    color: #85091C;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

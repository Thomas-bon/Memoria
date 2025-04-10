<template>
    <div class="marquee-container">
      <p class="marquee-text">
        Ceci est un texte défilant de droite à gauche sans pause.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ScrollingText",
  };
  </script>
  
  <style scoped>
  .marquee-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .marquee-text {
    white-space: nowrap;
    animation: marquee 10s linear infinite;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  
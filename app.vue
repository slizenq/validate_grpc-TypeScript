<script lang="ts">
// import Header from '~/components/Header.vue'
// import HomePage from './components/HomePage.vue';
// import Form from './components/Form.vue';

import Header from "~/components/Header.vue";
import HomePage from "~/components/HomePage.vue";
import Form from "~/components/Form.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  },
};

</script>

<template>
  <div>
    <section class="main">
      <Header />
      <div>
        <HomePage />
      </div>
    </section>

    <section class="form">
      <!-- <div class="container"> -->
      <Form />
      <!-- </div> -->
    </section>

    <section class="footer">
      <Footer />
    </section>
  </div>
  <div id="app">
    <div v-if="isLoaded"></div>
    <div v-else>
      <div class="preloader">

        <div class="loader"></div>
        
        <!-- <div class="center">
          <div class="ring"></div>
          <span>Loading...</span>
        </div> -->
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.center {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.ring {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ring 2s linear infinite;
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #e65c00;
  }
  50% {
    transform: rotate(180deg);

    box-shadow: 1px 5px 2px #18b201;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #0456c8;
  }
}
.ring:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
}
span {
  color: #737373;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 200px;
  animation: text 2s linear infinite;
}
@keyframes text {
  0% {
    color: #e65c00;
  }
  50% {
    color: #18b201;
  }
  100% {
    color: #0456c8;
  }
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  border: 8px solid #002bcf;
  border-top: 8px solid #f54925;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: Rigtheous;
  src: url("~/assets/fonts/Righteous/Righteous-Regular.ttf");
}

@font-face {
  font-family: Ruda;
  src: url("~/assets/fonts/Ruda/Ruda.ttf");
}

body {
  font-family: "Inter", sans-serif;
  font-variation-settings: "slnt" 0;
}

.container {
  margin-bottom: 170px;
}

a {
  text-decoration: none;
}

button {
  font-size: 24px;
  width: 310px;
  height: 62px;
}
</style>

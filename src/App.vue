<template>
  <div class="gj" data-aload>
    <div class="gj-app">
      <img class="gj-app__logo" :data-aload="logo" alt="Game Jam UTT Logo">

      <gj-menu @menuChange="containerChange"></gj-menu>

      <gj-container :page="page"></gj-container>

      <gj-button link="https://docs.google.com/forms/d/e/1FAIpQLScu6yXquZQRkwrQLrldKgCgdmmreWMoT8yFe21c43a30pz_7A/viewform">Inscription</gj-button>
    </div>

    <gj-footer></gj-footer>
  </div>
</template>

<script>
import GJButton from './Button.vue'
import GJFooter from './Footer.vue'
import GJMenu from './Menu.vue'
import GJContainer from './Container.vue'

// async loaded
import logo from './assets/logo.png'
import './assets/bg.jpg'

export default {
  name: 'app',
  components: {
    'gj-button': GJButton,
    'gj-footer': GJFooter,
    'gj-menu': GJMenu,
    'gj-container': GJContainer
  },
  data () {
    return {
      logo,
      page: 'presentation'
    }
  },
  methods: {
    containerChange(page) {
      this.page = page
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

html {
  height: 100%;
  overflow-y: auto;
}

body {
  color: #fff;
  display: flex;
  font-family: sans-serif;
  min-height: 100%;
}

@font-face {
    font-family: 'LeagueGothic';
    src: url('./assets/leaguegothic-regular.woff2') format('woff2'),
         url('./assets/leaguegothic-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

[data-aload] { background-image: none !important; }

.gj {
  background: url('./assets/bg.jpg');
  background-color: #093b60;
  background-size: cover;
  background-position: 100%;
  flex: 1;
}

.gj--font-loaded .gj--font-lg {
  font-family: LeagueGothic;
  font-size: 24px;
  letter-spacing: 0.5px;
}

.gj-app {
  box-sizing: border-box;
  height: calc(100% - 80px);
  margin: 0 auto;
  max-width: 1200px;
  padding: 40px 100px;
}

.gj-app > .gj-button {
  display: flex;
  height: 60px;
  margin: 0 auto;
  max-width: 1200px;
}

.gj-app__logo {
  display: block;
  margin: 0 auto;
}
</style>

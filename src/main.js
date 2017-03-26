import Vue from 'vue'
import aload from 'aload'
import FontFaceObserver from 'fontfaceobserver'

import  './assets/favicon.ico'
import  './assets/favicon-32x32.png'
import  './assets/favicon-16x16.png'
import  './assets/cover.jpg'

import App from './App.vue'

new Vue({
  render: h => h(App),
  mounted() {
    aload()

    const fontLG = new FontFaceObserver('LeagueGothic')

    fontLG.load().then(() => {
      document.body.className = 'gj--font-loaded'
    })
  }
}).$mount('#app')

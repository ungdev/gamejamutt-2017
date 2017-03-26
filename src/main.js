import Vue from 'vue'
import aload from 'aload'
import FontFaceObserver from 'fontfaceobserver'

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

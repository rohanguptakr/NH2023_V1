import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VWave from "v-wave";
import VueAnimateOnScroll from "vue-animate-onscroll"

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(vuetify)
app.use(VWave, {
    color: 'white',
    duration: 0.35,
    startingOpacity: 0.5,
    easing: 'ease-in',
})
app.use(VueAnimateOnScroll);
app.mount("#app");

// createApp(App).use(vuetify).mount('#app')
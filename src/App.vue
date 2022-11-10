<template>
  <NavbarComponent />
  <AboutComponent />
  <TimelineComponent />
  <TeamsComponent />
  <TracksComponent />
  <PrizesComponent />
  <FaqComponent />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import TeamsComponent from "./components/TeamsComponent.vue";
import TimelineComponent from "./components/TimelineComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import TracksComponent from "./components/TracksComponent.vue";
import FaqComponent from "./components/FaqComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import PrizesComponent from "./components/PrizesComponent.vue";


export default {
  name: 'App',
  components: {
    NavbarComponent,
    TimelineComponent,
    TracksComponent,
    TeamsComponent,
    FooterComponent,
    FaqComponent,
    AboutComponent,
    PrizesComponent
}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

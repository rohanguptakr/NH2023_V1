<template>
  <NavbarComponent />
  <AboutComponent />
  <TracksComponent />
  <PrizesComponent />
  <TimelineComponent />
  <SponsorsComponent />
  <TeamsComponent />
  <AboutClubComponent /> 
  <FaqComponent />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import TeamsComponent from "./components/TeamsComponent.vue";
import TimelineComponent from "./components/TimelineComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import TracksComponent from "./components/TracksComponent.vue";
import SponsorsComponent from "./components/SponsorsComponent.vue";
import FaqComponent from "./components/FaqComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import PrizesComponent from "./components/PrizesComponent.vue";
import AboutClubComponent from "./components/AboutClubComponent.vue";


export default {
  name: 'App',
  components: {
    NavbarComponent,
    TimelineComponent,
    TracksComponent,
    TeamsComponent,
    FooterComponent,
    SponsorsComponent,
    FaqComponent,
    AboutComponent,
    PrizesComponent,
    AboutClubComponent
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
body{
  overflow-x: hidden;
}
</style>

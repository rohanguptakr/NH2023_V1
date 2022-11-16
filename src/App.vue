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
  overflow-y: overlay;
  
} 

html {
  --scrollbarBG: #080518;
  --thumbBG: #ecf27c;
}

body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background-color: transparent;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  opacity: 0.5;
  /* border: 3px solid var(--scrollbarBG); */
}

</style>

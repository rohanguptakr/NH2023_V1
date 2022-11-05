<template>
  <NavbarComponent />
  <TeamsComponent />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import TeamsComponent from "./components/TeamsComponent.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    TeamsComponent
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

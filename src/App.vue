<template>
  <div id="app">
    <Clients />
  </div>
</template>

<script>
import Clients from "./components/Clients.vue";

export default {
  name: "App",
  components: {
    Clients,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 800px;
  max-height: 500px;
  border-radius: 2px;
  border: solid honeydew;
  background-color: honeydew;
}

body {
  background-color: rgb(211, 211, 211);
}
</style>

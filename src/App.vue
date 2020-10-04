<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
  margin-top: 40px;
  max-width: 800px;
  max-height: 550px;
  border-radius: 2px;
  border: solid honeydew;
  background-color: honeydew;
}

body {
  background-color: rgb(211, 211, 211);
}
</style>

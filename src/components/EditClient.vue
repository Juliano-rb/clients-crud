<template>
  <div class="clients">
    <h1>Edit Client</h1>
    <div id="client"></div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "EditClient",
  data() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clients {
  margin: 30px;
}

#clients {
  overflow-y: scroll;
  max-height: 400px;
}
h1 {
  font-size: 23px;
  margin-bottom: 10px;
}

a {
  color: #42b983;
}
</style>

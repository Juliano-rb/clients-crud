<template>
  <div class="clients">
    <h1>Clientes</h1>
    <div class="client-list-container">
      <div id="search-box">
        <input type="search" name="client-search" id="client-search" />
      </div>
      <div id="clients">
        <ul>
          <li>
            <Client
              name="A name"
              email="a email"
              v-bind:tags="[{id: 2,name: 'a tag',color: 'red' },{id: 1,name: 'another tag',color: 'blue' },]"
            />
          </li>
          <li>
            <Client
              name="another name"
              email="another email@"
              v-bind:tags="[{id: 2,name: 'a tag',color: 'green' }]"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Client from "./Client.vue";

export default {
  name: "Clients",
  props: {},
  components: {
    Client,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clients {
  margin: 30px;
}

.client-list-container {
  border: 1px solid rgb(194, 194, 194);
  padding: 1px;
}

h1 {
  font-size: 23px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

a {
  color: #42b983;
}
</style>

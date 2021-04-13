<template>
  <div class="clients">
    <h1>Clientes</h1>
    <div class="client-list-container">
      <div id="search-box">
        <input
          type="search"
          name="client-search"
          id="client-search"
          placeholder="Buscar"
          v-model="filter"
        />
      </div>
      <div id="clients">
        <ul>
          <li v-for="client in clientsBuff" :key="client.id">
            <Client
              v-bind:id="client.id"
              v-bind:name="client.name"
              v-bind:email="client.email"
              v-bind:tags="client.tags"
            />
          </li>
        </ul>
      </div>
    </div>
    <router-link to="/client" class="newBtn">New</router-link>
  </div>
</template>

<script>
import Client from "./Client.vue";
import axios from "axios";

export default {
  name: "Clients",
  data() {
    return {
      clients: [],
      filter: "",
    };
  },
  props: {},
  created: function () {
    this.fetchClients();
  },
  methods: {
    fetchClients() {
      axios
        .get(`${process.env.VUE_APP_SERVER_URL}/client`)
        .then((response) => {
          // handle success
          console.log(response);
          this.clients = response.data;

          console.log(this.clients);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
  computed: {
    clientsBuff() {
      const clientsFiltered = this.clients.filter(
        (client) =>
          client.name.toLowerCase().search(this.filter.toLowerCase()) >= 0
      );
      return clientsFiltered;
    },
  },
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

#clients {
  overflow-y: scroll;
  max-height: 400px;
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

.newBtn {
  float: right;
}
</style>

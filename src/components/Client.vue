<template>
  <div class="client">
    <div class="info">
      <div class="personal">
        <span class="client-name">{{ name }}</span>
        <br />
        <span class="email">{{ email }}</span>
      </div>
      <div class="tags">
        <span
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          v-bind:style="{ backgroundColor: tag.color}"
        >{{tag.name}}</span>
      </div>
    </div>
    <input type="button" value="edit" id="edit" />
  </div>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {
      name: "A name",
      email: "A email",
      tags: [
        {
          id: 1,
          name: "a tag",
          color: "green",
        },
        {
          id: 2,
          name: "another tag",
          color: "red",
        },
      ],
    };
  },
};
</script>

<style scoped>
.client {
  position: relative;
  background-color: white;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid rgb(221, 221, 221);
}

.client:hover {
  background-color: rgb(221, 221, 221);
}

.client-list-container {
  width: 100%;
  height: 100%;
  border: solid 1px rgb(206, 205, 205);
}

.info {
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.info > div {
}

.tags {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 60px;
  width: 300px;
  justify-content: flex-start;
}

.tag {
  background-color: green;
  color: white;
  margin: 3px;
  padding: 4px;
  height: 15px;
  border-radius: 3px;
}
.personal {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
}

#edit {
  position: absolute;
  right: 5px;
  bottom: 0px;
}
</style>

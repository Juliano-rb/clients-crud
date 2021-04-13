<template>
  <div class="tags">
    <span
      class="tag"
      v-for="tag in tags"
      :key="tag.id"
      v-bind:style="{ backgroundColor: tag.color}"
    >{{tag.name}}</span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
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

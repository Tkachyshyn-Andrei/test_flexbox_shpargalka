<template>
  <div class="container">
    <h1>Шпаргалка по Grid CSS</h1>
    <Item title="flex-direction" :items="displayItem" />
    <Item title="flex-direction" :items="justifyItem" />
  </div>
</template>

<script>

import Item from "@/components/Item";

export default {
  name: 'App',
  components: {Item},
  data() {
    return {
      displayItem: [ 'grid','inline-grid','subgrid' ],
      justifyItem: [ 'start','end','center','stretch' ],

    }
  },
  methods:{

  }
}
</script>

<style>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  text-align: center;
}

h2 {
  text-align: start;
}

.item > div {
  border: 2px solid #4fc3f7;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 20px
}






</style>

<template>
  <div class="container">
    <div id="app">
      <div>
        <h1>Шпаргалка по Flexbox CSS</h1>
      </div>
      <VFlexDirection/>
      <hr>
      <VFlexDirection1 property="display" value="123"/>



    </div>
  </div>
</template>

<script>
import VFlexDirection from "@/components/VFlexDirection";
import VFlexDirection1 from "@/components/VFlexDirection1";

export default {
  name: 'App',
  components: {VFlexDirection, VFlexDirection1},
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
</style>

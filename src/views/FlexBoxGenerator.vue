<template>
  <div class="container-fluid">
    <h1>Генератор Flexbox CSS</h1>
    <hr>
    <VFlexGen/>



  </div>
</template>

<script>
import VFlexGen from "@/components/VFlexGen";

export default {
  name: "FlexBoxGenerator",
  components: {VFlexGen}
}
</script>

<style>
.container {
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
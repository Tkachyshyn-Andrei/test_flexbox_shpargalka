<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <router-link to="/grid-generator"> Генератор Grid</router-link>
      </div>
      <div class="col">
        <router-link to="/grid-hint">Grid шпаргалка</router-link>
      </div>
      <div class="col">
        <router-link to="/flex-generator">Генератор FlexBox(v1)</router-link>
      </div>
      <div class="col">
        <router-link to="/flex-box">FlexBox шпаргалка</router-link>
      </div>
      <div class="col">
        <router-link to="/VFlexExample">Генератор FlexBox(v2)</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "App"
}
</script>

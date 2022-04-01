<template>
  <div class="container">
    <h1>Шпаргалка Grid CSS</h1>
    <Item :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}" :property-values="display"
          property-name="display"
          title="display"
    />
    <Item :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}" :property-values="alignItems"
          property-name="align-items"
          title="align-items"
    />
    <Item :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}" :property-values="justifyItems"
          property-name="justify-items"
          title="justify-items"
    />
    <Item :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}" :property-values="justifyContent"
          property-name="justify-content"
          title="justify-content"
    />
    <Item :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}" :property-values="alignContent"
          property-name="align-content"
          title="align-content"
    />
    <Item :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}" :property-values="gridAutoFlow"
          property-name="grid-auto-flow"
          title="grid-auto-flow"
    />
    <Item :active-index="5" :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}"
          :property-values="justifySelf"
          :style-dir="false"
          child="child"
          property-name="justify-self"
          title="justify-self"
    />
    <Item :active-index="5" :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
          :property-values="alignSelf"
          :style-dir="false"
          child="child"
          property-name="align-self"
          title="align-self"
    />
  </div>
</template>

<script>

import Item from "@/components/Item";

export default {
  name: 'App',
  components: {Item},
  data() {
    return {
      display: ['grid', 'inline-grid'],
      justifyItems: ['start', 'end', 'center', 'stretch'],
      alignItems: ['start', 'end', 'center', 'stretch'],
      justifyContent: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      alignContent: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      gridAutoFlow: ['row', 'column', 'dense'],
      justifySelf: ['start', 'end', 'center', 'stretch'],
      alignSelf: ['start', 'end', 'center', 'stretch'],
    }
  }

}
</script>

<style>


</style>

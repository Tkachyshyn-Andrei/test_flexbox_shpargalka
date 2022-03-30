<template>
  <div class="container">
    <h1>Шпаргалка Grid CSS</h1>
    <Item title="display" property-name="display"
          :property-values="display"
          :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}"
    />
    <Item title="align-items" property-name="align-items"
          :property-values="alignItems"
          :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
    />
    <Item title="justify-items" property-name="justify-items"
          :property-values="justifyItems"
          :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}"
    />
    <Item title="justify-content" property-name="justify-content"
          :property-values="justifyContent"
          :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
    />
    <Item title="align-content" property-name="align-content"
          :property-values="alignContent"
          :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
    />
    <Item title="grid-auto-flow" property-name="grid-auto-flow"
          :property-values="gridAutoFlow"
          :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
    />
    <Item title="justify-self" property-name="justify-self"
          :property-values="justifySelf"
          :default-parent-style="{display:'grid','grid-template-columns': 'auto auto auto'}"
          :style-dir="false"
          child="child"
          :active-index="5"
    />
    <Item title="align-self" property-name="align-self"
          :property-values="alignSelf"
          :default-parent-style="{display:'grid', 'grid-template-columns': 'auto auto auto'}"
          :style-dir="false"
          child="child"
          :active-index="5"
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
      gridAutoFlow: ['row', 'column','dense'],
      justifySelf: ['start', 'end','center','stretch'],
      alignSelf: ['start', 'end','center','stretch'],
    }
  }

}
</script>

<style>


</style>

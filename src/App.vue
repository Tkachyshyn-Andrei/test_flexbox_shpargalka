<template>
  <div class="container">
    <h1>Шпаргалка по Grid CSS</h1>
    <Item title="display" property-name="display"
          :property-values="display"
          :default-parent-style="{'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="align-items" property-name="align-items"
          :property-values="alignItems"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="justify-items" property-name="justify-items"
          :property-values="justifyItems"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="justify-content" property-name="justify-content"
          :property-values="justifyContent"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="align-content" property-name="align-content"
          :property-values="alignContent"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="grid-auto-flow" property-name="grid-auto-flow"
          :property-values="gridAutoFlow"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
    />
    <Item title="justify-self" property-name="justify-self"
          :property-values="justifySelf"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
          :style-dir="false"
    />
    <Item title="align-self" property-name="align-self"
          :property-values="alignSelf"
          :default-parent-style="{display:'grid', 'grid-template': '50px 50px 50px / 50px 50px 50px'}"
          :style-dir="false"
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
.container {
  max-width: 1170px;
  margin: 0 auto;
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
.example {
  height: 200px;
  border: 2px solid #4fc3f7;
  padding: 10px;
}
.example > div{
  width: 100%;
  height: 100%;
}

.items {
  border: 2px solid #4fc3f7;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.child {
  min-width: 2.5rem;
  min-height: 2.5rem;
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #fff;
}


</style>

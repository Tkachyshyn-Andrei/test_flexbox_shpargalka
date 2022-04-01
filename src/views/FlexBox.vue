<template>
  <div class="container">
    <div id="FlexBox">
      <div>
        <h1>Шпаргалка по Flexbox CSS</h1>
      </div>
      <hr>
      <VFlexbox :values="display" property="display"/>
      <hr>
      <VFlexbox :default-style-parent="{display: 'flex'}"
                :values="flexDirection" property="flex-direction"/>
      <hr>
      <VFlexbox :default-style-child="{width: '100%'}"
                :default-style-parent="{display: 'flex'}"
                :values="flexWrap" property="flex-wrap"/>
      <hr>
      <VFlexbox :default-style-child="{width: '40%', height: '40%'}"
                :default-style-parent="{display: 'flex'}"
                :values="flexFlow" property="flex-flow"/>
      <hr>
      <VFlexbox :default-style-parent="{display: 'flex'}"
                :values="justifyContent" property="justify-content"/>
      <hr>
      <VFlexbox :default-style-parent="{display: 'flex'}"
                :values="alignItems" property="align-items"/>
      <hr>
      <VFlexbox :active-index="3"
                :default-style-parent="{display: 'flex'}"
                :style-dir="false" :values="order"
                property="order"/>
      <hr>
      <VFlexbox :active-index="3"
                :default-style-parent="{display: 'flex'}"
                :style-dir="false" :values="alignSelf"
                property="align-self"/>
      <hr>
      <VFlexbox :default-style-child="{width: '30%'}"
                :default-style-parent="{display: 'flex', flexWrap: 'wrap'}"
                :values="alignContent" property="align-content"/>
      <hr>
      <VFlexbox :active-index="3"
                :default-style-parent="{display: 'flex'}"
                :style-dir="false" :values="flexGrow"
                property="flex-grow"/>
      <hr>
      <VFlexbox :active-index="3"
                :default-style-child="{width: '40%'}"
                :default-style-parent="{display: 'flex'}"
                :style-dir="false" :values="flexShrink"
                property="flex-shrink"/>
      <hr>
      <VFlexbox :active-index="3"
                :default-style-parent="{display: 'flex'}"
                :style-dir="false" :values="flexBasis"
                property="flex-basis"/>
      <hr>
    </div>
  </div>
</template>

<script>
import VFlexbox from "@/components/VFlexbox";

export default {
  name: 'FlexBox',
  components: {VFlexbox},
  data: () => ({
        display: ['flex', 'inline-flex'],
        flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
        flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
        flexFlow: ['row nowrap', 'column-reverse', 'column wrap', 'row-reverse wrap-reverse'],
        order: ['-1', '0', '1'],
        justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'Stretch'],
        alignSelf: ['flex-start', 'flex-end', 'center', 'baseline', 'Stretch'],
        alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
        flexGrow: ['0', '1'],
        flexShrink: ['0', '1'],
        flexBasis: ['30%', '50%', 'content'],
      }
  ),
}
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

#FlexBox {
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

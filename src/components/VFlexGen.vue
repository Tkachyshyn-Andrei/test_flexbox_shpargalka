<template>
  <div class="row m-0">
    <div class="col-4 p-2">
      <div class="container-style h-100 ">
        <div class="button d-flex">
          <div @click="addDiv">Add Div</div>
          <div @click="deleteDiv">Delete Div</div>
        </div>
        <div>
          <VSelect :values="display" property="display"/>
          <VSelect :values="flexDirection" property="flex-direction"/>
          <VSelect :values="flexWrap" property="flex-wrap"/>
          <VSelect :values="flexFlow" property="flex-flow"/>
          <VSelect :values="justifyContent" property="justify-content"/>
          <VSelect :values="alignItems" property="align-items"/>
          <VSelect :values="alignSelf" property="align-self"/>
          <VSelect :values="alignContent" property="align-content"/>
          <VSelect :values="flexGrow" property="flex-grow"/>
          <VSelect :values="flexShrink" property="flex-shrink"/>
          <VSelect :values="flexBasis" property="flex-basis"/>
        </div>
      </div>
    </div>
    <div class="col-8 p-2">
      <div class="container-style mb-3">
        <div class="parent-block" :style="style">
          <div v-for="n in items" :key="n" class="item">
            Div {{ n }}
          </div>
        </div>
      </div>
      <div class="container-style block">
        Тут буде формуватися CSS
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/Select/VSelect";

export default {
  name: "VFlexGen",
  components: {VSelect},
  data: () => ({
        items: 4,
        selected:'',
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
  computed:{
    style() {
      return {
        [this.property]: this.selected,
      }
    }
  },
  methods: {
    addDiv() {
      console.log(VSelect)
      this.items += 1;
    },
    deleteDiv(){
      this.items -= 1;
    }
  }
}
</script>

<style scoped>
.container-style {
  border: 2px solid #4fc3f7;
  padding: 10px;
  width: 100%;
}

.parent-block {
  min-height: 300px;
  border: 1px dotted #a6a6a6;
}

.item {
  min-width: 2.5rem;
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  text-align: center;
}

.button > div {
  border: 2px solid #4fc3f7;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 8px 8px;
  cursor: pointer;
}
</style>
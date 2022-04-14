<template>
  <div class="container-fluid">
    <h1>Генератор Flexbox CSS</h1>
    <hr>
    <div class="row m-0">
      <div class="col-4 p-2">
        <div class="container-style h-100 ">
          <div class="button d-flex">
            <div @click="addChild">Add Child</div>
          </div>
          <div>
            <VSelect v-model="parentStyleProperties.display" :values="display" label="display"/>
            <VSelect v-model="parentStyleProperties.flexDirection" :values="flexDirection"
                     label="flex-direction"/>
            <VSelect v-model="parentStyleProperties.flexWrap" :values="flexWrap" label="flex-wrap"/>
<!--            <VSelect v-model="parentStyleProperties.flexFlow" :values="flexFlow" label="flex-flow"/>-->
            <VSelect v-model="parentStyleProperties.justifyContent" :values="justifyContent"
                     label="justify-content"/>
            <VSelect v-model="parentStyleProperties.alignItems" :values="alignItems" label="align-items"/>
            <VSelect v-model="parentStyleProperties.alignContent" :values="alignContent" label="align-content"/>
          </div>
          <div v-if="activeChild" class="container-style child-block">
            <div>Вибрано {{ activeChild.index + 1 }}</div>
            <VSelect v-model="activeChild.order" :values="order" label="order"/>
            <VSelect v-model="activeChild.alignSelf" :values="alignSelf" label="align-self"/>
            <VSelect v-model="activeChild.flexGrow" :values="flexGrow" label="flex-grow"/>
            <VSelect v-model="activeChild.flexShrink" :values="flexShrink" label="flex-shrink"/>
            <VSelect v-model="activeChild.flexBasis" :values="flexBasis" label="flex-basis"/>
<!--            <div class="mb-1 d-flex justify-content-between">-->
<!--              <label>width</label>-->
<!--              <input placeholder="20px">-->
<!--            </div>-->
<!--            <div class="d-flex justify-content-between">-->
<!--              <label>height</label>-->
<!--              <input placeholder="20px">-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <div class="col-8 p-2">
        <div class="container-style mb-3">

          <div :style="parentStyle" class="parent-block">
            <div v-for="(item, index) in items" :key="index" :class="{'active-child': item === activeChild}"
                 :style="getChildStyle(item)"
                 class="item"
                 @click="setActiveChild(item, index)"
            >
              <i @click.stop="deleteChild(index)"/>
              Child {{ index + 1 }}
            </div>
          </div>

        </div>
        <div class="container-style code">
          <div>
            .parent
            <code style="white-space: pre" v-html="showParentStyle"/>
          </div>
          <div v-if="activeChild">
            .child:nth-child({{ activeChild.index + 1 }})
            <code style="white-space: pre" v-html="showChildStyle"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/Select/VSelect";

export default {
  name: "FlexBoxGenerator",
  components: {VSelect},
  data: () => ({
    items: [],
    parentStyleProperties: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      // flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
    },
    activeChild: null,
    display: ['flex', 'inline-flex'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    // flexFlow: ['row nowrap', 'column-reverse', 'column wrap', 'row-reverse wrap-reverse'],
    order: [-1, 0, 1],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignSelf: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexBasis: ['30%', '50%', 'content'],
  }),
  computed: {
    showChildBlockStyle() {
      return this.items.length > 0
    },
    parentStyle() {
      return this.parentStyleProperties
    },
    showParentStyle() {
      return Object.keys(this.parentStyle).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.parentStyle[key]};\n`, `{\n`) + `}`
    },
    childStyle() {
      return this.activeChild //this.selectedPropertiesChild
    },
    showChildStyle() {
      return Object.keys(this.childStyle).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.childStyle[key]};\n`, `{\n`) + `}`
    },
  },
  methods: {
    addChild() {
      this.items.push({
        order: 0,
        alignSelf: 'flex-start',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'content',
      });
    },
    deleteChild(index) {
      this.items.splice(index, 1);
    },
    setActiveChild(item, index) {
      this.activeChild = item;
      this.activeChild.index = index
    },
    // getActiveChild(item) {
    //   if (this.selectedPropertiesChild === item) {
    //     return this.childStyle
    //   }
    // },
    getChildStyle(child) {
      return child
    }
  }
}
</script>

<style scoped>
.container-fluid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  text-align: center;
}

.container-style {
  border: 2px solid #4fc3f7;
  padding: 10px;
  width: 100%;
}

.parent-block {
  min-height: 300px;
  border: 1px dotted #a6a6a6;
  background-color: rgb(240, 242, 243);
  overflow-x: auto;
}

.item {
  /*min-width: 2.5rem;*/
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.item i {
  position: absolute;
  top: -5px;
  right: 1px;
  font-size: 12px;
  opacity: 1;
}

i:before {
  content: "✖";
}

.button > div {
  border: 2px solid #4fc3f7;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 8px 8px;
  cursor: pointer;
}

.code {
  color: #e83e8c;
  word-wrap: break-word;
}

.container-style input{
  width: 237px;
  border-color: #4fc3f7;
  background-color: #4fc3f7;
}

.active-child {
  background: #abb6ba;
}
</style>
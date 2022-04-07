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
            <VSelect v-model="selectedPropertiesParent.display" :values="display" property="display"/>
            <VSelect v-model="selectedPropertiesParent.flexDirection" :values="flexDirection"
                     property="flex-direction"/>
            <VSelect v-model="selectedPropertiesParent.flexWrap" :values="flexWrap" property="flex-wrap"/>
            <VSelect v-model="selectedPropertiesParent.flexFlow" :values="flexFlow" property="flex-flow"/>
            <VSelect v-model="selectedPropertiesParent.justifyContent" :values="justifyContent"
                     property="justify-content"/>
            <VSelect v-model="selectedPropertiesParent.alignItems" :values="alignItems" property="align-items"/>
            <VSelect v-model="selectedPropertiesParent.alignContent" :values="alignContent" property="align-content"/>
          </div>
          <div v-if="showChildBlock" class="container-style child-block">
            <div>Вибрано Child</div>
            <VSelect v-model="selectedPropertiesChild.order" :values="order" property="order"/>
            <VSelect v-model="selectedPropertiesChild.alignSelf" :values="alignSelf" property="align-self"/>
            <VSelect v-model="selectedPropertiesChild.flexGrow" :values="flexGrow" property="flex-grow"/>
            <VSelect v-model="selectedPropertiesChild.flexShrink" :values="flexShrink" property="flex-shrink"/>
            <VSelect v-model="selectedPropertiesChild.flexBasis" :values="flexBasis" property="flex-basis"/>
            <div class="mb-1">
              <label>width</label>
              <input placeholder="20px">
            </div>
            <div>
              <label>height</label>
              <input placeholder="20px">
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 p-2">
        <div class="container-style mb-3">
          <div :style="parentStyle" class="parent-block">
            <div v-for="(item, index) in items" :key="index" :class="{'active-child': item === selectedPropertiesChild}"
                 :style="getActiveChild(item)"
                 class="item"
                 @click="selectActiveChild(item)"
            >
              <i @click.stop="deleteChild(index)"/>
              Child {{ index + 1}}
            </div>
          </div>
        </div>
        <div class="container-style code">
          <div>
            .parent
            <code style="white-space: pre" v-html="showParentStyle"/>
          </div>
          <div v-if="showChildBlock">
            .child
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
        isChildBlockVisible: false,
        selectedPropertiesParent: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
        },
        selectedPropertiesChild: {
          order: '0',
          alignSelf: 'flex-start',
          flexGrow: '0',
          flexShrink: '0',
          flexBasis: 'content',
        },
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
  computed: {
    showChildBlock () {
      return  this.items.length > 0
    },
    parentStyle() {
      return this.selectedPropertiesParent
    },
    showParentStyle() {
      return Object.keys(this.parentStyle).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.parentStyle[key]};\n`, `{\n`) + `}`
    },
    childStyle() {
      return this.selectedPropertiesChild
    },
    showChildStyle() {
      return Object.keys(this.childStyle).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.childStyle[key]};\n`, `{\n`) + `}`
    },
  },
  methods: {
    addChild() {
      this.items.push({...this.selectedPropertiesChild});
    },
    deleteChild(index) {
      this.items.splice(index, 1);
    },
    selectActiveChild(item) {
      this.selectedPropertiesChild = item;
    },
    getActiveChild(item) {
      if (this.selectedPropertiesChild === item) {
        return this.childStyle
      }
    }
  }
}
</script>

<style>
.container-fluid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
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
  overflow: scroll;
}

.item {
  min-width: 2.5rem;
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
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}

.child-block .property-name {
  min-width: 123px;
}
.container-style label{
  min-width: 123px;
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
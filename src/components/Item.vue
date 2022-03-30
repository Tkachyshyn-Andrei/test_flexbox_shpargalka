<template>
  <div>
    <div class="container">
      <div class="row mb-3">
        <h2>{{ title }}</h2>
        <div class="col">
          <ul class="row d-flex m-0 p-0 text-center list-unstyled">
            <li class="items p-1" v-for="value of propertyValues" :key="value" @click="changeValue(value)">
              {{ value }}
            </li>
          </ul>
          <div>
            <p>.example</p>
            <p style="white-space: pre">.parent:{{ editParentString }}</p>
            <p style="white-space: pre">.child:{{ editChildString }}</p>
          </div>
        </div>
        <div class="col">
          <div class="example">
            <div :style="parentStyle">
              <div :style="childStyle" class="child" v-for="i of childrenQuantity" :key="i">{{ i }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Item",
  data: function () {
    return {
      classParent: {},
      activeValue: this.propertyValues[0]
    }
  },
  props: {
    title: {
      type: String
    },
    propertyName: {
      type: String
    },
    propertyValues: {
      type: Array
    },
    childrenQuantity: {
      type: Number,
      default: 9
    },
    defaultParentStyle: {
      type: Object,
      default: () => ({})
    },
    defaultChildStyle: {
      type: Object,
      default: () => ({})
    },
    styleDir: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    parentStyle() {
      if (this.styleDir) {
        return {
          ...this.defaultParentStyle,
          [this.propertyName]: this.activeValue
        }
      }
      return {
        ...this.defaultParentStyle
      }

    },
    editParentString() {
        return JSON.stringify(this.parentStyle)
            .replace(/"/gm, '')
            .replace(/,/gm, ';\n')
            .replace(/{/gm, '{\n')
            .replace(/}/gm, '\n}')
    },
    editChildString(){
      if(!this.styleDir){
        return JSON.stringify(this.childStyle)
            .replace(/"/gm, '')
            .replace(/,/gm, ';\n')
            .replace(/{/gm, '{\n')
            .replace(/}/gm, '\n}')
      }
      return ''
    },
    childStyle() {
      if (!this.styleDir) {
        return {
          ...this.defaultChildStyle,
          [this.propertyName]: this.activeValue
        }
      }
      return {
        ...this.defaultChildStyle
      }
    }
  },
  methods: {
    changeValue(value) {
      this.activeValue = value
    },
  }
}
</script>

<style>

.item > div {
  border: 2px solid #4fc3f7;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 20px
}
</style>
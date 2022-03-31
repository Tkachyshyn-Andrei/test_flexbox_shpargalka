<template>
  <div class="container border border-primary mb-3 p-2">
    <div class="row">
      <h2>{{ title }}</h2>
      <div class="col">
        <ul class="row d-flex m-0 p-0 text-center list-unstyled">
          <li class="items p-1" v-for="value of propertyValues" :key="value" @click="changeValue(value)">
            {{ value }}
          </li>
        </ul>
        <div>
          <h3>Приклад</h3>
          <p style="white-space: pre">.parent:{{ editParentString }}</p>
          <p style="white-space: pre">{{ child }} {{ editChildString }}</p>
        </div>
      </div>
      <div class="col">
        <div class="example">
          <div :style="parentStyle">
            <div :style="selfChild(i)" class="child" v-for="i of childrenQuantity" :key="i">{{ i }}</div>
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
    child: {
      type: String,
      default: ''
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
    },
    activeIndex: {
      type: Number,
      default: null
    },
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
    editChildString() {
      if (!this.styleDir) {
        return JSON.stringify(this.childStyle)
            .replace(/"/gm, '')
            .replace(/,/gm, ';\n')
            .replace(/{/gm, '{\n')
            .replace(/}/gm, '\n}')
      }
      return ''
    },
    childStyle() {
      if (!this.styleDir && this.activeIndex !== null) {
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
    selfChild(i) {
      if (this.activeIndex === i) {
        return this.childStyle
      }
      return this.defaultChildStyle
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
<template>
  <div class="row">
    <div class="col-6 p-2">
      <h2>{{ property }}</h2>
      <div class="button d-flex justify-content-between flex-wrap">
        <div v-for="styleName in values" :key="styleName"
             :class="{'active': styleName === activeClass}"
             @click="setActiveClass(styleName)"
        >
          {{ styleName }}
        </div>
      </div>
      <div class="example-code code">
        <div>
          .selector
          <code style="white-space: pre" v-html="showStyle">
          </code>
        </div>
        <div v-if="defaultStyleChild">
          .selector-child
          <code style="white-space: pre" v-html="showStyleChild">
          </code>
        </div>
        <div v-if="styleChild">
          .selector-child-active
          <code style="white-space: pre" v-html="showStyleChild">
          </code>
        </div>
      </div>
    </div>
    <div class="col-6 p-2">
      <div class="example">
        <div :style="style" class="parent">
          <!--          <div v-for="n in numberOfChildren" :key="n" :style="styleChild" class="child">-->
          <div v-for="n in numberOfChildren" :key="n" :style="selfChild(n)" class="child">

            {{ n }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFlexbox",
  props: {
    defaultStyleParent: {
      type: Object,
      default: null
    },
    defaultStyleChild: {
      type: Object,
      default: null
    },
    styleDir: {
      type: Boolean,
      default: true,
    },
    numberOfChildren: {
      type: Number,
      default: 4,
    },
    activeIndex: {
      type: Number,
      default: null
    },
    property: {},
    values: {},
  },
  data: () => ({
    activeClass: '',
  }),
  created() {
    this.activeClass = this.values[0]
  },
  computed: {
    style() {
      if (this.styleDir) {
        return {
          ...this.defaultStyleParent,
          [this.property]: this.activeClass,
        }
      } else
        return {
          ...this.defaultStyleParent,
        }
    },
    showStyle() {
      return Object.keys(this.style).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.style[key]};\n`, `{\n`) + `}`
    },
    styleChild() {
      if (!this.styleDir) {
        return {
          ...this.defaultStyleChild,
          [this.property]: this.activeClass,
        }
      } else
        return {
          ...this.defaultStyleChild,
        }
    },
    showStyleChild() {
      return this.styleChild ? JSON.stringify(this.styleChild)
              .replace(/"/gm, '').replace(/{/gm, '{\n\t')
              .replace(/,/gm, ';\n\t')
              .replace(/:/gm, ': ')
              .replace(/}/gm, ';\n}')
          : null
    },


    // styleChild() {
    //   return {
    //     ...this.defaultStyleChild,
    //   }
    // },
    // showStyleChild() {
    //   return this.styleChild ? JSON.stringify(this.styleChild)
    //           .replace(/"/gm, '').replace(/{/gm, '{\n\t')
    //           .replace(/,/gm, ';\n\t')
    //           .replace(/:/gm, ': ')
    //           .replace(/}/gm, ';\n}')
    //       : null
    // },
  },
  methods: {
    setActiveClass(styleName) {
      this.activeClass = styleName;
    },
    selfChild(n) {
      if (this.activeIndex === n) {
        return this.styleChild
      }
      return this.defaultStyleChild
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: start;
}

p {
  font-size: 16px;
}

.button > div {
  border: 2px solid #4fc3f7;
  margin-bottom: 10px;
  padding: 8px 8px;
  cursor: pointer;
}

.example {
  border: 2px solid #4fc3f7;
  padding: 10px;
  height: 100%;
  flex: 1;
}

.example-code {
  border: 2px solid #4fc3f7;
  padding: 10px;
}

.parent {
  border: 1px dotted #a6a6a6;
  height: 100%;
}

.child {
  min-width: 2.5rem;
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  text-align: center;
}

.active {
  background: #d1dfe4;
}

.code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}

dl {
  font-size: 16px;
}

dd {
  padding-left: 30px;
}
</style>
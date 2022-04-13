<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="col-6">
        <div class="parent-block">
          <div :style="parentStyle" class="square">
            <div v-for="(child, index) in children" :key="index"
                 :class="{'active-child': child === activeChild}"
                 :style="child.style.join(';')"
                 class="littleSquare m-2"
                 @click="setActiveChild(child)"></div>
          </div>
        </div>
        <div>
          <select v-model="display">
            <option v-for="value in styles.display" :key="value">{{ value }}</option>
          </select>
          <select v-model="justifyContent">
            <option v-for="value in styles.justifyContent" :key="value">{{ value }}</option>
          </select>
          <select v-model="alignItems">
            <option v-for="value in styles.alignItems" :key="value">{{ value }}</option>
          </select>
          <button @click="addChild">addChild</button>
          <div v-if="activeChild">
            <div>
              <button @click="addInput">+</button>
              <button @click="deleteInput">-</button>
            </div>
            <div class="col-8">
              <input v-for="(input, index) in activeChild.style" :key="index" :value="input"
                     @input="$set(activeChild.style,index, $event.target.value)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 code p-2">
        <div>
          .parent
          <code style="white-space: pre" v-html="showParentStyle"/>
        </div>
        <div v-if="activeChild">
          <code style="white-space: pre" v-html="showChildStyle"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "VFlexExample",
  data: () => ({
    activeChild: null,
    display: 'flex',
    justifyContent: null,
    alignItems: null,
    styles: {
      display: ['flex', 'inline-flex'],
      justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    children: [{id: +(new Date()), style: ['']}],
  }),
  computed: {
    parentStyle() {
      if (this.justifyContent === null && this.alignItems === null) {
        return {
          display: this.display,
        }
      } else if (this.justifyContent !== null && this.alignItems === null) {
        return {
          display: this.display,
          justifyContent: this.justifyContent,
        }
      } else if (this.alignItems !== null && this.justifyContent === null) {
        return {
          display: this.display,
          alignItems: this.alignItems,
        }
      } else
        return {
          display: this.display,
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
        }
    },
    showParentStyle() {
      return Object.keys(this.parentStyle).reduce((acc, key) =>
          `${acc}\t${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()}: ${this.parentStyle[key]};\n`, `{\n`) + `}`
    },
    childStyle() {
      return this.children
          .filter((child) => child.style.some(str => str))
          .map(child => (`.child:nth-child(${this.children.indexOf(child) + 1}) {${child.style}}`).replace(',', ';'))
    },
    showChildStyle() {
      return JSON.stringify(this.childStyle)
          .replace(/"/gm, '')
          .replace('[', '')
          .replace(']', '')
          .replace(/{/gm, '{\n\t')
          .replace(/;/gm, ';\n\t')
          .replace(/}/gm, ';\n}\n')
          .replace(/,/gm, '')
    },
  },
  methods: {
    addChild() {
      this.children.push(
          {id: +(new Date()), style: ['']}
      )
    },
    setActiveChild(child) {
      this.activeChild = child
    },
    addInput() {
      this.activeChild.style.push('')
    },
    deleteInput() {
      this.activeChild.style.pop('')
    }
  }
}
</script>

<style scoped>
.parent-block {
  height: 500px;
  width: 500px;
}

.square {
  height: 100%;
  padding: 10px;
  background-color: yellow;
}

.littleSquare {
  min-height: 50px;
  min-width: 50px;
  background-color: red;
}

input {
  width: 100%;
}

.active-child {
  background: green;
}

.code {
  border: 1px solid;
  color: #d63384;
}
</style>
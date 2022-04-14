<template>
  <div class="generator-page">
    <h1>Генератор Flexbox CSS</h1>
    <hr>
    <div class="row justify-content-around">
      <div class="col-12 col-md-6 col-xl-5">
        <div class="parent-block">
          <div :style="parentStyle" class="square">
            <div v-for="(child, index) in children" :key="index"
                 :class="{'active-child': child === activeChild}"
                 :style="child.style.join(';')"
                 class="littleSquare m-2"
                 @click="setActiveChild(child)">
              <div class="deleteChild" @click.stop="deleteChild(index)"></div>
            </div>
          </div>
        </div>
        <div>
          <div class="select-parent-style p-2">
            <div class="d-flex w-100 justify-content-between mb-1">
              Select styles for square(parent)
              <button @click="addChild">addChild</button>
            </div>
            <div>
              <div class="mb-1 d-flex">
                <div class="label">display:</div>
                <select v-model="display">
                  <option v-for="value in styles.display" :key="value">{{ value }}</option>
                </select>
              </div>
              <div class="mb-1 d-flex">
                <div class="label">justify-content:</div>
                <select v-model="justifyContent">
                  <option v-for="value in styles.justifyContent" :key="value">{{ value }}</option>
                </select>
              </div>
              <div class="d-flex">
                <div class="label">align-items:</div>
                <select v-model="alignItems">
                  <option v-for="value in styles.alignItems" :key="value">{{ value }}</option>
                </select>
              </div>
            </div>
          </div>
          <div v-if="activeChild" class="p-2 child-input-style">
            <div class="d-flex">
              <div class="w-75">
                Input styles for rectangle(child)
              </div>
              <div class="w-25 buttons-input">
                <button class="me-2" @click="addInput">+</button>
                <button @click="deleteInput">-</button>
              </div>
            </div>
            <div class="pt-1">
              <input v-for="(input, index) in activeChild.style" :key="index" :value="input"
                     @input="$set(activeChild.style,index, $event.target.value)"
                     class="mb-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-5 ">
        <div class="code p-2">
          <div>
            .parent
            <code style="white-space: pre" v-html="showParentStyle"/>
          </div>
          <div v-if="showChildStyle">
            <code style="white-space: pre" v-html="showChildStyle"/>
          </div>
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
    deleteChild(index) {
      if (this.children.indexOf(this.activeChild) === index) {
        this.children.splice(index, 1)
        this.activeChild = null
      } else
        this.children.splice(index, 1)
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
  },
}
</script>

<style scoped>
.generator-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  text-align: center;
}

.parent-block {
  height: 500px;
}

.square {
  height: 100%;
  padding: 10px;
  background-color: #97dffa;
}

.littleSquare {
  min-height: 50px;
  min-width: 50px;
  background-color: #4fc3f7;
}

input {
  width: 100%;
}

.active-child {
  background: green;
  border: 2px solid black;
}

.code {
  border: 1px solid;
  color: #d63384;
}

.deleteChild {
  position: relative;
  right: -30px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;
}

.deleteChild:hover {
  opacity: 1;
}

.deleteChild::before,
.deleteChild::after {
  content: '';
  position: absolute;
  top: 10px;
  display: block;
  width: 15px;
  height: 3px;
  background: #000;
}

.deleteChild::before {
  transform: rotate(45deg);
}

.deleteChild::after {
  transform: rotate(-45deg);
}

.child-input-style {
  border: 2px solid #4fc3f7;
}

.buttons-input {
  text-align: end;
}

.select-parent-style {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid #4fc3f7;
}

button {
  background-color: #97dffa;
  border: none;
  padding: 5px 10px;
}

.label {
  width: 140px;
}

select {
  width: 150px;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 d-flex flex-column sidebar">
        <div class="sidebar-logo">
          <p>logo</p>
        </div>
        <div class="area-props">
          <div>
            <h1>
              <div class="area-name">
                .<span area-label="area name" class="input token class-name" role="textbox">container</span>
              </div>
              <div class="area-action-buttons">
                <button class="remove-button" title="Remove this area from the grid">
                  remove
                </button>
                <button class="remove-button-clear" title="Clear this area of subgrids">
                  clean
                </button>
                <button class="add-area-button" title="Add implicit element to this grid area">
                  add
                </button>
              </div>
            </h1>
          </div>
          <div>
            <h3>Explicit Grid</h3>

            <hr>
            <hr>
            <input type="text">
            <div class="area-side">
              <div>
                <span>grid-template-columns</span>
                <button @click="addColumn">add</button>
              </div>
              <div v-for="(col, index) of gridTemplateColumns" :key="index" class="input-container d-flex">
                <input v-model="col.size" class="" type="text">
                <select v-model="col.unitOfMeasurement" class="unit-select" name="">
                  <option v-for="unit of unitOfMeasurements" :key="unit" :value="unit">{{ unit }}</option>
                </select>
                <button class="remove-btn" @click="removeColumn(col)">
                  remove
                </button>
              </div>
            </div>


            <hr>
            <hr>

            <div class="area-side">
              <div>
                <span>grid-template-rows</span>
                <button @click="addRow">add</button>
              </div>
              <div v-for="(row, index) of gridTemplateRows" :key="index" class="input-container d-flex">
                <input v-model="row.size" class="" type="text">
                <select v-model="row.unitOfMeasurement" class="unit-select" name="">
                  <option v-for="unit of unitOfMeasurements" :key="unit" :value="unit">{{ unit }}</option>
                </select>
                <button class="remove-btn" @click="removeContainerRow">
                  remove
                </button>
              </div>
            </div>

            <hr>
            <hr>


            <div class="area-side">
              <span>row-gap</span>
              <input type="number">
              <select>
                <option>px</option>
                <option>%</option>
                <option>em</option>
              </select>
            </div>
            <div class="area-side">
              <span>column-gap</span>
              <input type="number">
              <select>
                <option>px</option>
                <option>%</option>
                <option>em</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Implicit Grid</h3>
            <div class="area-side">
              <div>
                <span>grid-auto-columns</span>
                <button>add</button>
              </div>
              <div class="input-container d-flex">
                <input area-label="column-size" class="" min="0" step="0.5" type="number">
                <select area-label="column-size" class="unit-select" name=""></select>
                <button area-label="remove-column 1" class="remove-btn">
                  remove
                </button>
              </div>
            </div>
            <div class="area-side">
              <div>
                <span>grid-auto-rows</span>
                <button>add</button>
              </div>
              <div class="input-container d-flex">
                <input area-label="column-size" class="" min="0" step="0.5" type="number">
                <select area-label="column-size" class="unit-select" name=""></select>
                <button area-label="remove-column 1" class="remove-btn">
                  remove
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3>Grid Placement</h3>
            <div>
              <div>
                <div>
                  <input id="justify-items" type="checkbox">
                  <label for="justify-items">justify-items</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input id="items-placement-justify-items-stretch" type="radio">
                    <label for="items-placement-justify-items-stretch">stretch</label>
                    <input id="items-placement-justify-items-start" type="radio">
                    <label for="items-placement-justify-items-start">start</label>
                    <input id="items-placement-justify-items-center" type="radio">
                    <label for="items-placement-justify-items-center">center</label>
                    <input id="items-placement-justify-items-end" type="radio">
                    <label for="items-placement-justify-items-end">end</label>
                  </div>
                </div>
                <div>
                  <input id="align-items" type="checkbox">
                  <label for="align-items">align-items</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input id="items-placement-align-items-stretch" type="radio">
                    <label for="items-placement-align-items-stretch">stretch</label>
                    <input id="items-placement-align-items-start" type="radio">
                    <label for="items-placement-align-items-start">start</label>
                    <input id="items-placement-align-items-center" type="radio">
                    <label for="items-placement-align-items-center">center</label>
                    <input id="items-placement-align-items-end" type="radio">
                    <label for="items-placement-align-items-end">end</label>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <input id="justify-content" type="checkbox">
                  <label for="justify-content">justify-content</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input id="items-placement-justify-content-stretch" type="radio">
                    <label for="items-placement-justify-content-stretch">stretch</label>
                    <input id="items-placement-justify-content-start" type="radio">
                    <label for="items-placement-justify-content-start">start</label>
                    <input id="items-placement-justify-content-center" type="radio">
                    <label for="items-placement-justify-content-center">center</label>
                    <input id="items-placement-justify-content-end" type="radio">
                    <label for="items-placement-justify-content-end">end</label>
                  </div>
                </div>
                <div>
                  <input id="align-content" type="checkbox">
                  <label for="align-content">align-content</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input id="items-placement-align-content-stretch" type="radio">
                    <label for="items-placement-align-content-stretch">stretch</label>
                    <input id="items-placement-align-content-start" type="radio">
                    <label for="items-placement-align-content-start">start</label>
                    <input id="items-placement-align-content-center" type="radio">
                    <label for="items-placement-align-content-center">center</label>
                    <input id="items-placement-align-content-end" type="radio">
                    <label for="items-placement-align-content-end">end</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>Area Box</h3>
            <div class="row">
              <div class="col">
                <div class="items-header">
                  <label>
                    width
                  </label>
                </div>
                <div class="area-size">
                  <div class="input-container">
                    <select class="unit-select">
                      <option>px</option>
                      <option>%</option>
                      <option>em</option>
                      <option>auto</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="items-header">
                  <label>height</label>
                </div>
                <div class="area-size">
                  <div class="input-container">
                    <select class="unit-select">
                      <option>px</option>
                      <option>%</option>
                      <option>em</option>
                      <option>auto</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-6 area-editor-container">
        <div :style="parentStyle" class="parent h-100">

          <div v-for="index in gridTemplateRows.length * gridTemplateColumns.length" :key="index">{{ index }}</div>

          <!--          <div v-for="(row, index) in gridTemplateRows" :key="index" :class="`row-${index + 1}`">-->
          <!--            <div v-for="(col, colIndex) in gridTemplateColumns" :key="colIndex" :class="`col-${colIndex + 1}`">-->
          <!--              {{ index }} / {{ colIndex }}-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>


      <div class="col-3 sidebar">
        <div class="d-flex h-100 flex-column">
          <div class="col">
            <div class="buttons-wrapper">
              <div>
                <button>undo</button>
                <button>redo</button>
                <button>restart</button>
                <button>share link</button>
              </div>
              <div>
                <button>Codepen</button>
                <button>CodeSandbox</button>
                <button>Stackblitz</button>
              </div>
            </div>

          </div>
          <div class="col">
            <div class="code-container">
              <span>Html</span>
              <code>some code what should be shown</code>
              <button>copy</button>
            </div>
          </div>
          <div class="col">
            <div class="code-container">
              <span>CSS</span>
              <code>
                some css code what should be shown
              </code>
              <button>copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridGenerator",
  data: () => ({
    unitOfMeasurements: [
      "fr",
      "px",
      "%",
      "em",
      "auto",
      "min-content",
      "max-content",
      "minmax",
    ],
    containersRow: [],
    containersCol: [],
    gridTemplateColumns: [{
      size: '1',
      unitOfMeasurement: 'fr'

    }],
    gridTemplateRows: [{
      size: '1',
      unitOfMeasurement: 'fr'
    }],
  }),
  computed: {
    parentStyle() {
      return {
        display: 'grid',
        'grid-template-columns': this.gridTemplateColumns.map(col => `${col.size}${col.unitOfMeasurement}`).join(' '),
        'grid-template-rows': this.gridTemplateRows.map(row => `${row.size}${row.unitOfMeasurement}`).join(' '),
      }
    }
  },
  methods: {
    addColumn() {
      this.gridTemplateColumns.push({
        size: 1,
        unitOfMeasurement: this.unitOfMeasurements[0]
      })
    },
    addRow() {
      this.gridTemplateRows.push({
        size: 1,
        unitOfMeasurement: this.unitOfMeasurements[0]
      })
    },
    removeColumn(col) {
      console.log(col)
    },
    removeRow(row) {
      console.log(row);
    },
    addContainerCol() {
      this.containersCol++
    },
    addContainerRow() {
      this.containersRow++
    },
    removeContainerCol() {
      this.containersCol--
    },
    removeContainerRow() {
      this.containersRow--
    },
    showGridTemplateColumns() {
      console.log(this.gridTemplateColumns.string)
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}

.row {
  height: 100%;
}

/*.col{*/
/*  height: 100%;*/
/*}*/
.sidebar {
  /*height: 100%;*/
  background-color: #1e1e1e;
  color: #fafafa;
}


</style>

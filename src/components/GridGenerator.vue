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
                .<span area-label="area name" role="textbox" class="input token class-name">container</span>
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
            <div class="area-side">
              <div @click="addContainerCol">
                <span>grid-template-columns</span>
                <button>add</button>
              </div>
              <div class="input-container d-flex" v-for="container of containersCol" :key="container">
                <input type="text" class="" area-label="column-size"
                       v-model="gridTemplateColumns.string"
                       @input="showGridTemplateColumns()"
                >
                <!--                <select class="unit-select" area-label="column-size" name="">-->
                <!--                  <option>fr</option>-->
                <!--                  <option>px</option>-->
                <!--                  <option>%</option>-->
                <!--                  <option>em</option>-->
                <!--                  <option>auto</option>-->
                <!--                  <option>min-content</option>-->
                <!--                  <option>max-content</option>-->
                <!--                  <option>minmax</option>-->
                <!--                </select>-->
                <button class="remove-btn" area-label="remove-column 1"
                        @click="removeContainerCol"
                >
                  remove
                </button>
              </div>
            </div>
            <div class="area-side">
              <div @click="addContainerRow">
                <span>grid-template-rows</span>
                <button>add</button>
              </div>
              <div class="input-container d-flex" v-for="container of containersRow" :key="container">
                <input type="number"
                       class=""
                       area-label="column-size"
                       min="0"
                       step="0.5"

                >
                <!--                <select class="unit-select" area-label="column-size" name="">-->
                <!--                  <option>fr</option>-->
                <!--                  <option>px</option>-->
                <!--                  <option>%</option>-->
                <!--                  <option>em</option>-->
                <!--                  <option>auto</option>-->
                <!--                  <option>min-content</option>-->
                <!--                  <option>max-content</option>-->
                <!--                  <option>minmax</option>-->
                <!--                </select>-->
                <button class="remove-btn"
                        area-label="remove-column 1"
                        @click="removeContainerRow"
                >
                  remove
                </button>
              </div>
            </div>
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
                <input type="number" class="" area-label="column-size" min="0" step="0.5">
                <select class="unit-select" area-label="column-size" name=""></select>
                <button class="remove-btn" area-label="remove-column 1">
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
                <input type="number" class="" area-label="column-size" min="0" step="0.5">
                <select class="unit-select" area-label="column-size" name=""></select>
                <button class="remove-btn" area-label="remove-column 1">
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
                  <input type="checkbox" id="justify-items">
                  <label for="justify-items">justify-items</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input type="radio" id="items-placement-justify-items-stretch">
                    <label for="items-placement-justify-items-stretch">stretch</label>
                    <input type="radio" id="items-placement-justify-items-start">
                    <label for="items-placement-justify-items-start">start</label>
                    <input type="radio" id="items-placement-justify-items-center">
                    <label for="items-placement-justify-items-center">center</label>
                    <input type="radio" id="items-placement-justify-items-end">
                    <label for="items-placement-justify-items-end">end</label>
                  </div>
                </div>
                <div>
                  <input type="checkbox" id="align-items">
                  <label for="align-items">align-items</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input type="radio" id="items-placement-align-items-stretch">
                    <label for="items-placement-align-items-stretch">stretch</label>
                    <input type="radio" id="items-placement-align-items-start">
                    <label for="items-placement-align-items-start">start</label>
                    <input type="radio" id="items-placement-align-items-center">
                    <label for="items-placement-align-items-center">center</label>
                    <input type="radio" id="items-placement-align-items-end">
                    <label for="items-placement-align-items-end">end</label>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" id="justify-content">
                  <label for="justify-content">justify-content</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input type="radio" id="items-placement-justify-content-stretch">
                    <label for="items-placement-justify-content-stretch">stretch</label>
                    <input type="radio" id="items-placement-justify-content-start">
                    <label for="items-placement-justify-content-start">start</label>
                    <input type="radio" id="items-placement-justify-content-center">
                    <label for="items-placement-justify-content-center">center</label>
                    <input type="radio" id="items-placement-justify-content-end">
                    <label for="items-placement-justify-content-end">end</label>
                  </div>
                </div>
                <div>
                  <input type="checkbox" id="align-content">
                  <label for="align-content">align-content</label> <span>initial</span>
                  <div class="radio-toolbar">
                    <input type="radio" id="items-placement-align-content-stretch">
                    <label for="items-placement-align-content-stretch">stretch</label>
                    <input type="radio" id="items-placement-align-content-start">
                    <label for="items-placement-align-content-start">start</label>
                    <input type="radio" id="items-placement-align-content-center">
                    <label for="items-placement-align-content-center">center</label>
                    <input type="radio" id="items-placement-align-content-end">
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
      <div class="col-6 area-editor-container d-grid">
      </div>
      <div class="col-3 sidebar">
        <div class="row flex-column">
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
  data() {
    return {
      containersRow: 1,
      containersCol: 1,
      gridTemplateColumns:[{
        string:''
      }],
    }

  },
  methods: {
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
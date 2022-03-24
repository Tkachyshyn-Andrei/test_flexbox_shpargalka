<template>
  <div class="container">
    <div id="app">
      <div>
        <h1>Шпаргалка по Flexbox CSS</h1>
      </div>




      <div class="row">
        <div class="col-6 p-2">
          <h2>flex-direction</h2>
          <div class="button d-flex justify-content-between">
            <div v-for="styleName in flexDirection" :key="styleName.key"
                 @click="setActiveStyle(styleName)"
                 :class="{'active': styleName === activeClass}"
            >
              {{ styleName.label }}
            </div>
          </div>
          <div class="example-code">
            <code>.parent {<br>
              &nbsp;&nbsp;display: flex;<br>
              &nbsp;&nbsp;<mark id="flex-dir1">flex-direction: row;</mark>
              <br>
              &nbsp;&nbsp;height: 100%;<br>
              }</code>
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="example">
            <div class="parent" :style="style">
              <div class="child">1</div>
              <div class="child">2</div>
              <div class="child">3</div>
              <div class="child">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    activeClass: '',
    direction: 'row',
    flexDirection: [
      {label: 'row'},
      {label: 'row-reverse'},
      {label: 'column'},
      {label: 'column-reverse'},
    ]
  }),
  computed: {
    style(){
      return {
        flexDirection: this.direction
      }
    }
  },
  methods: {
    setActiveStyle(styleName){
      this.activeClass = styleName;
      console.log(styleName)
    }
  }
}
</script>

<style>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  text-align: center;
}

h2 {
  text-align: start;
}

.button > div {
  border: 2px solid #4fc3f7;
  margin-bottom: 10px;
  padding: 8px 20px;
  cursor: pointer;
}

.example {
  border: 2px solid #4fc3f7;
  padding: 10px;
  display: flex;
  height: 100%;
  flex: 1;
}

.example-code {
  border: 2px solid #4fc3f7;
  padding: 10px;
}

.parent {
  display: flex;
  border: 1px dotted #a6a6a6;
  height: 100%;
  width: 100%;
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
</style>

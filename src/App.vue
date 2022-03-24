<template>
  <div class="container">
    <div id="app">
      <div>
        <h1>Шпаргалка по Flexbox CSS</h1>
      </div>
      <div class="row">
        <div class="col-6 p-2">
          <h2>flex-direction</h2>
          <div class="item d-flex">
            <div>row</div>
            <div>row-reverse</div>
            <div>column</div>
            <div>column-reverse</div>
          </div>
          <div class="example">

          </div>
        </div>
        <div class="col-6 p-2">
          <div class="example">
            <div class="parent">
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
    // className: '',
    // activeClass: 'flex',
    // display: [
    //   {label: 'flex', key: 'flex'},
    //   {label: 'inline-flex', key: 'inline-flex'},
    // ]
  }),
  // methods: {
  //   setActiveClass: function (className) {
  //     this.activeClass = className;
  //   }
  // }
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

.item > div {
  border: 2px solid #4fc3f7;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 20px
}

.example {
  min-height: 155px;
  border: 2px solid #4fc3f7;
  padding: 10px;
}

.parent {
  display: flex;
  border: 1px dotted #a6a6a6;
  height: 240px;
}

.child {
  min-width: 2.5rem;
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  text-align: center;
}

</style>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>{{ title }}</h2>
          <ul class="row d-flex m-0 p-0 text-center list-unstyled">
            <li  class="col items p-1" v-for="item of items" :key="item" @click="changeDisplay(item)">
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="example">
            there text
            <div class="parent">
              <div class="col child">1</div>
              <div class="col child">2</div>
              <div class="col child">3</div>
              <div class="col child">4</div>
              <div class="col child">5</div>
              <div class="col child">6</div>
              <div class="col child">7</div>
              <div class="col child">8</div>
              <div class="col child">9</div>
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
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  },
  methods:{
    changeDisplay(item){
      document.querySelector('.parent').classList.toggle(item)
    },

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

.items{
  border: 2px solid #4fc3f7;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.parent {

  grid-template:50px 50px 50px / 50px 50px 50px;
  border: 1px dotted #a6a6a6;
  height: 240px;
}
.child{
  min-width: 2.5rem;
  min-height: 2.5rem;
  padding: 0.5rem;
  background-color: #97dffa;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #fff;
}
.grid{
  display: grid;
}
.subgrid{
  display: grid;
  grid-template-columns: subgrid;
}
.inline-grid{
  display: inline-grid;
}
.start{
  display: grid;
  justify-items: start;
}
.end{
  display: grid;
  justify-items: end;
}
.center{
  display: grid;
  justify-items: center;
}
.stretch{
  display: grid;
  justify-items: stretch;
}

</style>
<template>
  <div class="row">
    <div class="col-6 p-2">
      <h2>flex-direction</h2>
      <div class="button d-flex justify-content-between flex-wrap">
        <div v-for="styleName in flexDirection" :key="styleName.key"
             :class="{'active': styleName === activeClass}"
             @click="setActiveClass(styleName)"
        >
          {{ styleName }}
        </div>
      </div>
      <div class="example-code code">
        selector
        <code style="white-space: pre" v-html="showStyle">
        </code>
      </div>
    </div>
    <div class="col-6 p-2">
      <div class="example">
        <div :style="style" class="parent">
          <div class="child">1</div>
          <div class="child">2</div>
          <div class="child">3</div>
          <div class="child">4</div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <p>Властивість flex-direction задає напрямок основних осей у контейнері і цим визначає положення флексів у
        контейнері.</p>
      <dl>
        <dt>row</dt>
        <dd>Головна вісь спрямована так як і орієнтація тексту, за умовчанням зліва направо.</dd>
        <dt>row-reverse</dt>
        <dd>Схоже на значення row, але міняються місцями початкова та кінцева точки та головна вісь направлена з права
          наліво
        </dd>
        <dt>column</dt>
        <dd>Головна вісь розташована вертикально і спрямована зверху донизу.</dd>
        <dt>column-reverse</dt>
        <dd>Головна вісь розташовується вертикально, але змінюється положення початкової та кінцевої точок і вісь
          спрямована знизу нагору.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFlexDirection",
  data: () => ({
    activeClass: '',
    direction: 'row',
    flexDirection: [
      'row',
      'row-reverse',
      'column',
      'column-reverse',
    ]
  }),
  created() {
    this.activeClass = this.flexDirection[0]
  },
  computed: {
    style() {
      return {
        display: 'flex',
        flexDirection: this.direction,
      }
    },
    showStyle() {
      return Object.keys(this.style).reduce((acc, key) =>
          `${acc} \t ${key.split(/(?=[A-Z])/).join(`-`).toLowerCase()} : ${this.style[key]};\n`, `{\n`) + `}`
    }
  },
  methods: {
    setActiveClass(styleName) {
      this.activeClass = styleName;
      this.direction = styleName;
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
  display: flex;
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
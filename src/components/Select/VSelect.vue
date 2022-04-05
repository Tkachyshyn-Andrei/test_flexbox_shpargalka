<template>
  <div class="d-flex mb-1">
    <div class="property-name">
      {{ property }}: &nbsp;
    </div>
    <select @change="switchSelect($event)">
      <option disabled value="">Виберіть один із варіантів</option>
      <option v-for="option in values" :key="option" :value="option" :selected="option === value">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    property: {
      type: String,
    },
    values: {
      type: Array,
    },
    value:{}
  },
  methods: {
    switchSelect(event) {
      this.$emit('input', event.target.value)
    }
  },
}
</script>

<style scoped>
.property-name {
  min-width: 135px;
}

select {
  border: none;
  color: #2c3e50;
  background-color: #ceedfb;
}

</style>
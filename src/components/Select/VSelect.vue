<template>
  <div class="d-flex mb-1 justify-content-between">
    <div class="property-name">
      {{ label }}
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
    label: {
      type: String,
    },
    values: {
      type: Array,
    },
    value: {
      type: [Number, String]
    }
  },
  methods: {
    switchSelect(event) {
      this.$emit('input', event.target.value)
    }
  },
}
</script>

<style scoped>
select {
  border: none;
  color: #2c3e50;
  background-color: #ceedfb;
}

</style>
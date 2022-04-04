<template>
  <div class="d-flex mb-1">
    <div class="property-name">
      {{ property }}: &nbsp;
    </div>
    <select v-model="selected">
      <option disabled value="">Виберіть один із варіантів</option>
      <option v-for="value in values" :key="value"
              :value="value"
      >
        {{ value }}
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
  },
  data: () => ({
    selected: '',
  }),
}
</script>

<style scoped>
.property-name {
  min-width: 150px;
}

select {
  border: none;
  color: #2c3e50;
  background-color: #ceedfb;
}

</style>
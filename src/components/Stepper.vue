<template>
  <div>
    <div id="stepper-value" data-testid="stepper-value">{{ count }}</div>
    <button id="increment" data-testid="increment" @click="increment">点击</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  max: {
    type: Number,
    default: 1
  }
})
const count = ref(0)
const increment = () => {
  if (count.value < props.max) {
    count.value++
  }
}
</script>

<style></style>

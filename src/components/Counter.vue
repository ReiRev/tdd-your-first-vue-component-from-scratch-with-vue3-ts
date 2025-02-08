<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)

defineExpose({ count })
</script>

<template>
  <div>
    <span class="count" v-text="count"></span>
    <button class="increment" @click="count++"></button>
    <button class="decrement" @click="count > 0 && count--" v-show="count > 0"></button>
  </div>
</template>

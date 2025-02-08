<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)

defineExpose({ count })
</script>

<template>
  <div>
    <span class="count" v-text="count"></span>
    <button @click="count++"></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)

defineExpose({ count })
</script>

<template>
  {{ count }}
</template>

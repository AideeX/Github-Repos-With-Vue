<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  throw new Error('Test error triggered')
})
</script>

<template>
  <div>
    <h2>This component should trigger an error on mount</h2>
  </div>
  </template>
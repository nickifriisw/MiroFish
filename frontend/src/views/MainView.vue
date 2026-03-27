<template>
  <div class="process-view">
    <h1>Process View - Project {{ projectId }}</h1>
    <p>Project setup and graph building interface</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  projectId: { type: String, required: true }
})
</script>

<style scoped>
.process-view {
  padding: 40px;
}
</style>

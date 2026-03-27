<template>
  <div class="graph-panel">
    <h2>Graph Visualization</h2>
    <div ref="graphContainer" class="graph-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const graphContainer = ref(null)
const props = defineProps({
  graphData: { type: Object, default: null }
})

onMounted(() => {
  if (props.graphData && graphContainer.value) {
    renderGraph(props.graphData)
  }
})

function renderGraph(data) {
  const width = 600
  const height = 400
  
  const svg = d3.select(graphContainer.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
  
  // Simple graph rendering
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', height / 2)
    .attr('text-anchor', 'middle')
    .text('Graph Visualization')
}
</script>

<style scoped>
.graph-panel {
  padding: 20px;
}
.graph-container {
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

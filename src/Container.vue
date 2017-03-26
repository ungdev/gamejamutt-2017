<template>
  <div class="gj-container">
    <gj-presentation v-show="page === 'presentation'"></gj-presentation>
    <gj-planning v-show="page === 'planning'"></gj-planning>
    <gj-map v-show="page === 'map'"></gj-map>
  </div>
</template>

<script>
import ContainerMap from './Container-Map.vue'
import ContainerPlanning from './Container-Planning.vue'
import ContainerPresentation from './Container-Presentation.vue'

export default {
  props: [ 'page' ],

  components: {
    'gj-map': ContainerMap,
    'gj-planning': ContainerPlanning,
    'gj-presentation': ContainerPresentation
  }
}
</script>

<style>
.gj-container {
  min-height: 380px;
  background-color: #1b5e8d;
  border: 3px solid #0a2538;
  box-sizing: border-box;
  margin: 0 auto 20px auto;
  max-width: 1200px;
}

.gj-container__page {
  display: none;
}
</style>

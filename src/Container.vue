<template>
  <div class="gj-container">
    <gj-presentation v-show="page === 'presentation'"></gj-presentation>
    <gj-planning v-show="page === 'planning'"></gj-planning>
    <gj-map v-show="page === 'map'"></gj-map>
    <gj-success v-show="page === 'success'"></gj-success>
    <gj-error v-show="page === 'error'"></gj-error>
  </div>
</template>

<script>
import ContainerMap from './Container-Map.vue'
import ContainerPlanning from './Container-Planning.vue'
import ContainerPresentation from './Container-Presentation.vue'
import ContainerSuccess from './Container-Success.vue'
import ContainerError from './Container-Error.vue'

export default {
  props: [ 'page' ],

  components: {
    'gj-map': ContainerMap,
    'gj-planning': ContainerPlanning,
    'gj-presentation': ContainerPresentation,
    'gj-success': ContainerSuccess,
    'gj-error': ContainerError
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

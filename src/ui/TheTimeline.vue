<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TheTimeline'
}
</script>

<style scoped lang="scss">
  .timeline {
    margin: 20px 0 20px 20px;
    position: relative;
  }
</style>

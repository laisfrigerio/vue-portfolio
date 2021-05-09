<template>
  <the-header />
  <router-view/>
</template>

<script>
import TheHeader from '@/ui/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/normalize";
</style>

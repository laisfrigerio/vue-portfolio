<template>
  <h1>Projetos</h1>
</template>

<script>
import { onMounted } from 'vue'

import useHeader from '@/hooks/useHeader'
import { HEADER } from '@/utils/const'

export default {
  name: 'Projects',
  setup () {
    const { setActive } = useHeader()

    onMounted(() => {
      setActive(HEADER.projects)
    })
  }
}
</script>

<style>

</style>

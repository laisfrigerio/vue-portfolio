<template>
  <h1>Educação</h1>
</template>

<script>
import { onMounted } from 'vue'

import useHeader from '@/hooks/useHeader'
import { HEADER } from '@/utils/const'

export default {
  name: 'Education',
  setup () {
    const { setActive } = useHeader()

    onMounted(() => {
      setActive(HEADER.education)
    })
  }
}
</script>

<style>

</style>

<template>
  <div class="home">
  </div>
</template>

<script>
import { onMounted } from 'vue'

import useHeader from '@/hooks/useHeader'
import { HEADER } from '@/utils/const'

export default {
  name: 'Home',
  setup () {
    const { setActive } = useHeader()

    onMounted(() => {
      setActive(HEADER.home)
    })
  }
}
</script>

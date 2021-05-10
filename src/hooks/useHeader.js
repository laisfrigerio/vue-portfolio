import { ref } from 'vue'

const active = ref('home')

const useHeader = () => {
  const setActive = (value) => {
    active.value = value
  }

  return {
    active,
    setActive
  }
}

export default useHeader

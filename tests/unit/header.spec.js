import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/ui/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('render three links into header component', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.findAll('header ul li')).toHaveLength(3)
  })
})

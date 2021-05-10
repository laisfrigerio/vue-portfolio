import { shallowMount } from '@vue/test-utils'
import TheAside from '@/ui/TheAside.vue'

describe('TheAside.vue', () => {
  it('check author picture', () => {
    const wrapper = shallowMount(TheAside)
    expect(wrapper.find('aside .profile-image figure img.picture').attributes('src')).toBe('https://avatars0.githubusercontent.com/u/20709086?s=460&u=13c9928ea02aa8349e70cac14ea211c40a8f80d9&v=4')
  })

  it('check author\'s name', () => {
    const wrapper = shallowMount(TheAside)
    expect(wrapper.find('aside .author .name .title-01').text()).toBe('Lais Frigério')
  })

  it('check author\'s professional', () => {
    const wrapper = shallowMount(TheAside)
    expect(wrapper.find('aside .author .name .title-02').text()).toBe('Software Developer')
  })

  it('check author\'s e-mail', () => {
    const wrapper = shallowMount(TheAside)
    expect(wrapper.find('aside .author .name .title-04').text()).toBe('laaisfrigerio@gmail.com')
  })
})

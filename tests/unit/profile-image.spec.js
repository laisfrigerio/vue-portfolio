import { shallowMount } from '@vue/test-utils'
import ProfileImage from '@/components/ProfileImage.vue'

describe('ProfileImage.vue', () => {
  it('check author picture', () => {
    const wrapper = shallowMount(ProfileImage)
    expect(wrapper.find('.profile-image figure img.picture').attributes('src')).toBe('https://avatars0.githubusercontent.com/u/20709086?s=460&u=13c9928ea02aa8349e70cac14ea211c40a8f80d9&v=4')
  })
})

import { mount } from '@vue/test-utils'
import TheTimeline from '@/ui/TheTimeline.vue'

describe('TheTimeline.vue', () => {
  it('render empty into the timeline component', () => {
    const wrapper = mount(TheTimeline)
    expect(wrapper.html()).toContain('')
  })

  it('render h1 tag into the timeline component', () => {
    const wrapper = mount(TheTimeline, {
      slots: {
        default: '<h1>Lais Frigério</h1>'
      }
    })
    expect(wrapper.html()).toContain('<h1>Lais Frigério</h1>')
  })
})

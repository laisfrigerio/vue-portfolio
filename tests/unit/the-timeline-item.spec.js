import { mount } from '@vue/test-utils'
import TheTimelineItem from '@/ui/TheTimelineItem.vue'

describe('TheTimelineItem.vue', () => {
  it('render the timeline item component and pass props', () => {
    const period = 'Dezembro 2017 - Novembro 2018'
    const title = 'Analista de Sistemas'
    const subtitle = 'Gazeta do Povo'

    const wrapper = mount(TheTimelineItem, {
      props: {
        period,
        title,
        subtitle
      }
    })
    expect(wrapper.html()).toContain(`<h4 class="title-04">${title}</h4>`)
    expect(wrapper.html()).toContain(`<small>${period} <strong>${subtitle}</strong></small>`)
  })

  it('render the timeline item component with props and slot', () => {
    const period = 'Outubro 2017 - Dezembro 2017'
    const title = 'Estagiária'
    const subtitle = 'Agência Polvo'
    const slot = '<li>Item 1</li>'

    const wrapper = mount(TheTimelineItem, {
      props: {
        period,
        title,
        subtitle
      },
      slots: {
        default: slot
      }
    })
    expect(wrapper.html()).toContain(title)
    expect(wrapper.html()).toContain(subtitle)
    expect(wrapper.html()).toContain(period)
    expect(wrapper.html()).toContain(slot)
  })
})

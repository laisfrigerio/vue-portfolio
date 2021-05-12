import { shallowMount } from '@vue/test-utils'
import SkillTable from '@/components/SkillTable.vue'

describe('ProfileSkill.vue', () => {
  it('check has 0 items', () => {
    const wrapper = shallowMount(SkillTable, {
      props: {
        items: [],
        totalItems: 5
      }
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(0)
  })

  it('check has 4 languages', () => {
    const wrapper = shallowMount(SkillTable, {
      props: {
        items: [
          { name: 'Português', level: 5 },
          { name: 'Inglês', level: 3 },
          { name: 'Alemão', level: 1 },
          { name: 'Espanhol', level: 1 }
        ],
        totalItems: 5
      }
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(4)
  })

  it('check has 5 techs', () => {
    const wrapper = shallowMount(SkillTable, {
      props: {
        items: [
          { name: 'HTML', level: 5 },
          { name: 'CSS', level: 4 },
          { name: 'Javascript', level: 4 },
          { name: 'PHP', level: 4 },
          { name: 'SQL', level: 4 }
        ],
        totalItems: 5
      }
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(5)
  })
})

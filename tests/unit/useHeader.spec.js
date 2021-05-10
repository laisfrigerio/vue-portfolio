import useHeader from '@/hooks/useHeader'
import { HEADER } from '@/utils/const'

describe('useHeader hook', () => {
  it('check active is home', () => {
    const { active } = useHeader()
    expect(active.value).toBe(HEADER.home)
  })

  it('set active is "education"', () => {
    const { active, setActive } = useHeader()
    setActive(HEADER.education)
    expect(active.value).toBe(HEADER.education)
  })
})
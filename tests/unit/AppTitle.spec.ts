import App from '@/App.vue'
import { mount } from '@vue/test-utils'
import AppTitle from '@/components/AppTitle.vue'

describe('Title.vue', () => {
  it('renders props.title when passed', () => {
    const msg = 'Úkol pro Orgis IT'
    const wrapper = mount(App)
    const wrapperTitle = wrapper.findComponent(AppTitle)
    expect(wrapperTitle.text()).toMatch(msg)
  })
})

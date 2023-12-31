import { DOMWrapper, mount } from '@vue/test-utils'
import App from '@/App.vue'
import DivElement from '@/components/DivElement.vue'
import AppForm from '@/components/AppForm.vue'

describe('App.vue', () => {
  it('has send successfully data and return data rendered in div element', async () => {
    const wrapper = mount(App)
    const wrapperForm = wrapper.findComponent(AppForm)
    const wrapperDivElement = wrapper.findComponent(DivElement)

    const data: { [key: string]: string | number } = {
      width: '250',
      height: '250',
      color: '#000000',
      text: '',
    }

    const wrapperInputsArray = wrapper.findAll('input')

    wrapperInputsArray.forEach((item: DOMWrapper<HTMLInputElement>) => {
      //console.log(item.element.id)
      const varName = item.element.id
      const value: string | number = data[varName]
      item.setValue(value)
    })

    wrapperForm.vm.$emit('renderElement')

    await wrapper.vm.$nextTick()
    expect(wrapperForm.emitted().renderElement).toBeTruthy()

    expect(wrapperDivElement.props().width).toBe(data.width)
    expect(wrapperDivElement.props().height).toBe(data.height)
    expect(wrapperDivElement.props().color).toBe(data.color)
    expect(wrapperDivElement.props().text).toBe(data.text)
  })
})

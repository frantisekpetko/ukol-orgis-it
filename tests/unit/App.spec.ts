import { VueWrapper, mount, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import DivElement from '@/components/DivElement.vue';

describe('App.vue', () => {
  it('has send successfully and return data rendered in div element', async () => {
    /*
    const wrapper = shallowMount(App);



    let data: { [key: string]: string | number} = {
      width: 250,
      height: 250,
      color: '#000000',
      text: ''
    }

    const units = 'px';

    //expect(wrapper.vm.width).toEqual('')
    //console.log('test', wrapper.vm.width)
    //console.log(varToString({width}));

    const wrapperInputsArray = wrapper.findAll('input');
    const wrapperSelectsArray = wrapper.findAll('select');

    wrapperInputsArray.forEach((item) => {
      console.log(item.element.id);
      const varName = item.element.id;
      const value: any = data[varName];
      item.setValue(value)
    })

    const btn = wrapper.find('div form button');
    
    await btn.trigger('click');

    await wrapper.vm.$nextTick()
    //const div = wrapper.get('div div div');
    const div = document.querySelector('div div div');
    //const style = window.getComputedStyle(div)

    const divText = wrapper.getComponent(DivElement);
    const divStyles = divText.find('div div');
    console.log(divText.find('div div div').text())
    //const divComponent = shallowMount(DivElement);

    //console.log(wrapper.find({ref: 'divStyles'}).style.getPropertyValue('color'))
    //expect(style.width).toBe(`${width}${units}`);
    //expect(style.height).toBe(`${height}${units}`);
    //expect(style.background).toBe(`${color}`);
    console.log('test text', divText.text())
    //expect(divText.find('div div div').text()).toBe(text)
    */


  })
})

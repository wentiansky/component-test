import { describe, it, expect } from 'vitest'
// 可以测试组件和DOM
import { mount } from '@vue/test-utils'
import Stepper from '@/components/Stepper.vue'

// 通过data-testid获取dom元素
// const valueSelector = '[data-testid=stepper-value]'
// const buttonSelector = '[data-testid=increment]'
// 通过id获取dom元素
const valueSelector = '[id=stepper-value]'
const buttonSelector = '[id=increment]'
const wrapper = mount(Stepper, {
  props: { max: 1 }
})

describe('测试Stepper', () => {
  // 必须要有it
  it('count增加1', async () => {
    expect(wrapper.find(valueSelector).text()).toContain('0')
    await wrapper.find(buttonSelector).trigger('click')
    expect(wrapper.find(valueSelector).text()).toContain('1')
  })
})

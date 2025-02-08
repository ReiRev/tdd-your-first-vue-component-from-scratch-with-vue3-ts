import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  let wrapper: ReturnType<typeof mount<typeof Counter>>

  beforeEach(() => {
    wrapper = mount(Counter, {})
  })

  it('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it('increments the count when the increment button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)

    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it('decrements the count when the decrement button is clicked', () => {
    // We can't use setData against ref.
    wrapper.vm.count = 5

    wrapper.find('.decrement').trigger('click') // 1

    expect(wrapper.vm.count).toBe(4)
  })

  it('never goes below zero', () => {
    expect(wrapper.vm.count).toBe(0)

    // testing style might be complicated with vitest, so skip.
    wrapper.find('.decrement').trigger('click') // 1

    expect(wrapper.vm.count).toBe(0)
  })

  it('presents the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)
  })
})

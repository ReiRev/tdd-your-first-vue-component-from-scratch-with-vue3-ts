import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  it('defaults to a count of 0', () => {
    const wrapper = mount(Counter, {})
    expect(wrapper.vm.count).toBe(0)
  })
})

import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Reminders from '@/components/Reminders.vue'

describe('Reminders', () => {
  let wrapper: ReturnType<typeof mount<typeof Reminders>>

  const addReminder = async (body: string) => {
    const newReminder = wrapper.find('.new-reminder')

    // You need to use await since setValue and trigger will return Promise.
    await newReminder.setValue(body)
    await wrapper.find('button').trigger('click')
  }

  const remindersList = () => {
    return wrapper.find('ul').text()
  }

  beforeEach(() => {
    wrapper = mount(Reminders)
  })

  it('hides the reminders list if there are none', () => {
    expect(wrapper.find('ul').exists()).toBe(false)
  })

  it('can add reminders', async () => {
    await addReminder('Go to the store')

    expect(remindersList()).toContain('Go to the store')
  })

  it('can remove any reminder', async () => {
    await addReminder('Go to the store')
    await addReminder('Finish screencast')

    const deleteButton = wrapper.find('ul > li:first-child .remove')
    await deleteButton.trigger('click')

    expect(remindersList()).not.toContain('Go to the store')
  })
})

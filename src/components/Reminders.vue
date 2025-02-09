<script setup lang="ts">
import { ref } from 'vue'

const reminders = ref<string[]>([])
const newReminder = ref('')
const add = () => {
  reminders.value.push(newReminder.value)
  newReminder.value = ''
}
const remove = (reminder: string) => {
  reminders.value = reminders.value.filter((r) => r !== reminder)
}
</script>

<template>
  <div>
    <input type="text" class="new-reminder" v-model="newReminder" />
    <button @click="add">Add Reminder</button>

    <ul v-if="reminders.length">
      <li v-for="reminder in reminders" :key="reminder">
        {{ reminder }}
        <button class="remove" @click="remove(reminder)">Remove</button>
      </li>
    </ul>
  </div>
</template>

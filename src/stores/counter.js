import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    if (count.value === 5) {
      throw new Error('An error occurred!')
    }
  }

  return { count, doubleCount, increment }
})

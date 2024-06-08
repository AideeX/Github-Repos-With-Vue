<script setup>
import { useCounterStore } from '../stores/counter.js'

const counter = useCounterStore()

const incrementAndCheck = () => {
  try{
    counter.increment()
  } catch (error) {
    console.error(error)
    throw error
  }
}
</script>

<template>
  <div class="counter-container">
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="incrementAndCheck">Click Me</button>
  </div>
</template>

<style scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem;
  transition: background-color 0.3s ease;
}

p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
}

button {
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
}

button:hover {
  background-color: var(--button-bg-hover-color);
}

button:active {
  background-color: var(--button-bg-hover-color);
}

@media screen and (min-width: 450px) and (max-width: 768px) {
  .counter-container {
    padding: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 450px) {
  .counter-container {
    padding: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  button {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
}
</style>
<script setup>
import { ref, onErrorCaptured } from 'vue'
import Counter from './Counter.vue'

const hasError = ref(false)
const errorImage = '/bug-fixing.svg'

onErrorCaptured((err, instance, info) => {
  if (err.message === 'Count reached 5') {
    hasError.value = true
  }
  console.error(err, instance, info)
  return false
})
</script>
<template>
  <div v-if="hasError" class="error-container">
    <h1>OOPS! An error occurred.</h1>
    <img :src="errorImage" alt="Error Image" class="error-image">
    <router-link to="/" class="error-link">HOME</router-link>
  </div>
  <div v-else>
    <Counter />
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem;
  transition: background-color 0.3s ease;
}

.error-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.error-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  text-decoration: none;
  border-radius: var(--button-border-radius);
  transition: background-color 0.3s ease;
  text-align: center;
  font-weight: bold;
}

.error-link:hover {
  background-color: var(--button-bg-hover-color);
}

.error-link:active {
  background-color: var(--button-bg-hover-color);
}

@media screen and (min-width: 450px) and (max-width: 768px) {
  .error-container {
    padding: 1.5rem;
  }

  .error-link {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 450px) {
  .error-container {
    padding: 1rem;
  }

  .error-link {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
}
</style>
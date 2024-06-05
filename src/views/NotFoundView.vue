<script setup>
import { ref } from 'vue';

const lostImage = 'error404.png';
</script>

<template>
  <div class="error-container">
    <img :src="lostImage" alt="Odunlade looking confused..." class="error-image" />
    <p class="error-message">
      It may seem as though you have lost your way but who neva loss before? No worries though, this is the road that will lead you 
      <router-link to="/" class="active-link">Home</router-link>
    </p>
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

.error-message {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
}

.active-link {
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.active-link:hover {
  color: #0056b3;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .error-container {
    padding: 1.5rem;
  }

  .error-message {
    font-size: 1rem;
  }
}

@media screen and (max-width: 450px) {
  .error-container {
    padding: 1rem;
  }

  .error-message {
    font-size: 0.9rem;
  }
}
</style>
<script setup>
import  GamesView  from '@/views/GamesView.vue'
</script>

<template>
  <footer class="footer bg-background dark:bg-charcoal text-charcoal dark:text-gray-100 py-4 flex justify-center space-x-4 shadow-md dark:shadow-purple-dark mt-8">
    <p>&copy; 2024 Idaresit's Repositories</p>
    <router-link to="/games" class="text-purple dark:text-purple-light hover:text-purple-dark dark:hover:text-purple-hover">Games</router-link>
  </footer>
</template>

<!-- <style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-color-light);
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
}

.footer-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #0056b3;
}

/* Media Queries */
@media screen and (min-width: 450px) and (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .footer-link {
    margin: 0.5rem 0;
  }
}
@media screen and (max-width: 450px) {
  .footer {
    flex-direction: column;
  }

  .footer-link {
    margin: 0.5rem 0;
  }
}
</style> -->
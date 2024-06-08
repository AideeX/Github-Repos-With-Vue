<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const github = ref(null)
const githubLogo = '/github-logo.png';

onMounted(async () => {
  const response = await axios.get('https://api.github.com/users/AideeX')
  github.value = response.data
})
</script>

<template>
  <header class="bg-background dark:bg-charcoal text-gray-800 dark:text-gray-100 py-4 px-6 flex flex-col sm:flex-row justify-between items-center shadow-md dark:shadow-purple-dark">
    <div v-if="github" class="profile flex items-center space-x-4">
      <img :src="github.avatar_url" alt="avatar" class="avatar w-16 h-16 rounded-lg" />
      <div>
        <h1 class="text-xl font-bold">{{ github.name }}'s <img :src="githubLogo" alt="github logo" class="inline-block w-6 h-6" /> Repositories</h1>
        <p class="bio text-sm text-gray-600 dark:text-gray-300">{{ github.bio }}</p>
        <a href="mailto:aideeubachukwu@gmail.com" class="email text-purple dark:text-purple-light hover:text-purple-dark dark:hover:text-purple-hover ml-2">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
    <nav class="mt-4 sm:mt-0">
      <ul class="nav-links flex space-x-4">
        <li><router-link to="/" class="text-purple dark:text-purple-light hover:text-purple-dark dark:hover:text-purple-hover">Home</router-link></li>
        <li><router-link to="/about" class="text-purple dark:text-purple-light hover:text-purple-dark dark:hover:text-purple-hover">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<!-- <style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color-light);
  padding: 1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  margin: 1rem;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 15%;
  margin-bottom: 1rem;
}

.bio {
  text-align: center;
  margin-bottom: 1rem;
}

.email {
  color: inherit;
  text-decoration: none;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
}

/* Media Queries */
@media screen and (min-width: 450px) and (max-width: 768px) {
  header {
    flex-direction: row;
    justify-content: space-between;
  }

  .profile {
    flex-direction: row;
    align-items: center;
  }

  .avatar {
    margin-right: 1rem;
  }

  .bio {
    text-align: left;
  }

  .nav-links {
    margin-left: auto;
  }
}

@media screen and (max-width: 450px) {
  header {
    padding: 0.5rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  .bio {
    font-size: 0.9rem;
  }

  .email {
    font-size: 1rem;
  }

  .nav-links {
    flex-direction: column;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }
}
</style> -->
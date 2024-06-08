<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const repo = ref(null)

const fetchRepo = async () => {
  try {
    console.log(route.params.name)
    const response = await axios.get(`https://api.github.com/repos/AideeX/${route.params.name}`)
    repo.value = response.data
  } catch (error) {
    console.error('Error fetching repo:', error)
  }
}

onMounted(fetchRepo)
</script>

<template>
  <section v-if="repo" class="repo-container bg-background dark:bg-charcoal text-charcoal dark:text-gray-100 p-6 rounded-lg shadow-lg dark:shadow-purple-dark max-w-3xl mx-auto mt-6 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ repo.name }}</h1>
    <table class="repo-table w-full mb-6">
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Stars</th><td class="py-2">{{ repo.stargazers_count }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Forks</th><td class="py-2">{{ repo.forks_count }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Open Issues</th><td class="py-2">{{ repo.open_issues_count }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Watchers</th><td class="py-2">{{ repo.watchers_count }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Repo Size</th><td class="py-2">{{ repo.size }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Default Branch</th><td class="py-2">{{ repo.default_branch }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Language</th><td class="py-2">{{ repo.language }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Created at</th><td class="py-2">{{ new Date(repo.created_at).toLocaleDateString() }}</td>
      </tr>
      <tr class="border-b border-gray-300 dark:border-gray-600">
        <th class="text-left py-2">Last updated</th><td class="py-2">{{ new Date(repo.updated_at).toLocaleDateString() }}</td>
      </tr>
    </table>
    <div class="buttons flex space-x-4">
      <router-link to="/">
        <button class="bg-purple text-white py-2 px-4 rounded shadow-lg transition-colors duration-300 hover:bg-purple-dark">Go Home</button>
      </router-link>
      <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="bg-purple text-white py-2 px-4 rounded shadow-lg transition-colors duration-300 hover:bg-purple-dark">Explore More</a>
    </div>
  </section>
</template>

<!-- <style scoped>
.repo-container {
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 800px;
  transition: background-color 0.3s ease;
}

.repo-container h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.repo-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.repo-table th, .repo-table td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.repo-table th {
  background-color: #f2f2f2;
}

.repo-table td {
  background-color: #fff;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.button {
  padding: 0.5rem 1rem;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  text-decoration: none;
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
}

.button:hover {
  background-color: var(--button-bg-hover-color);
}

.button:active {
  background-color: var(--button-bg-hover-color);
}

/* Media Queries */
@media screen and (min-width: 450px) and (max-width: 768px) {
  .repo-container {
    padding: 1.5rem;
  }

  .repo-container h1 {
    font-size: 1.75rem;
  }

  .repo-table th, .repo-table td {
    padding: 0.4rem;
  }

  .button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 450px) {
  .repo-container {
    padding: 1rem;
  }

  .repo-container h1 {
    font-size: 1.5rem;
  }

  .repo-table th, .repo-table td {
    padding: 0.3rem;
  }

  .button {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style> -->
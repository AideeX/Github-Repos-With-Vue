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
  <section v-if="repo" class="repo-container">
    <h1>{{ repo.name }}</h1>
    <table class="repo-table">
        <tr>
          <th>Stars</th><td>{{ repo.stargazers_count }}</td>
        </tr>
        <tr>
          <th>Forks</th><td>{{ repo.forks_count }}</td>
        </tr>
        <tr>
          <th>Open Issues</th><td>{{ repo.open_issues_count }}</td>
        </tr>
        <tr>
          <th>Watchers</th><td>{{ repo.watchers_count }}</td>
        </tr>
        <tr>
          <th>Repo Size</th><td>{{ repo.size }}</td>
        </tr>
        <tr>
          <th>Default Branch</th><td>{{ repo.default_branch }}</td>
        </tr>
        <tr>
          <th>Language</th><td>{{ repo.language }}</td>
        </tr>
        <tr>
          <th>Created at</th><td>{{ new Date(repo.created_at).toLocaleDateString() }}</td>
        </tr>
        <tr>
          <th>Last updated</th><td>{{ new Date(repo.updated_at).toLocaleDateString() }}</td>
        </tr>
      </table>
      <div class="buttons">
        <router-link to="/">
          <button class="button">Go Home</button>
        </router-link>
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="button">Explore More</a>
      </div>
  </section>
</template>

<style scoped>
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
</style>
<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const repos = ref([])
const currentPage = ref(1)
const hasMore = ref(true)
const searchTerm = ref('')

const fetchRepos = async (page = 1) => {
  const response = await axios.get('https://api.github.com/users/AideeX/repos', {
    params: {
      page,
      per_page: 6,
    },
  })
  repos.value = response.data
  hasMore.value = response.data.length === 6
}

const handleSearch = () => {
  currentPage.value = 1
  fetchRepos(currentPage.value)
}

const nextPage = () => {
  if (hasMore.value) {
    currentPage.value += 1
    fetchRepos(currentPage.value)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
    fetchRepos(currentPage.value)
  }
}

const filteredRepos = computed(() => {
  if (searchTerm.value) {
    return repos.value.filter((repo) => repo.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
  } else {
    return repos.value
  }
})

const hasMoreFiltered = computed(() => {
  return filteredRepos.value.length > currentPage.value * 6 || hasMore.value;
})

onMounted(() => fetchRepos(currentPage.value))
</script>

<template>
  <section class="repos-container">
    <div class="search-container">
      <input type="text" v-model="searchTerm" @input="handleSearch" placeholder="Search repositories">
    </div>
    <div class="repos-list">
      <div v-for="(repo, index) in filteredRepos" :key="index" class="repo-card">
        <router-link :to="`/repo/${repo.name}`">
          <h2>{{ repo.name }}</h2>
        </router-link>
        <p>{{ repo.description }}</p>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="!hasMoreFiltered">Next</button>
    </div>
  </section>
</template>

<style scoped>
.repos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem;
  transition: background-color 0.3s ease;
  
}

.search-container {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
}

.search-container input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-container input:focus {
  outline: none;
  }

.repos-list {
  width: 100%;
  max-width: 1200px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  text-align: center;
}

.repo-card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 calc(33.333% - 1rem);
  box-sizing: border-box;
}

.repo-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.repo-card p {
  margin: 0;
  color: #666;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.pagination button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  margin: 0 1rem;
}

/* Media Queries */
@media screen and (min-width: 450px) and (max-width: 768px) {
  .repos-container {
    padding: 1.5rem;
  }

  .search-container {
    max-width: 100%;
  }

  .repos-list {
    justify-content: center;
  }

  .repo-card {
    flex: 1 1 calc(50% - 1rem);
  }

  .repo-card h2 {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 450px) {
  .repos-container {
    padding: 1rem;
  }

  .repo-card {
    flex: 1 1 100%;
  }

  .repo-card h2 {
    font-size: 1rem;
  }
}
</style>
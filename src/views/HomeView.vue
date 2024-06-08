<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import GithubRepos from '@/components/GithubRepos.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue';
// import Footer from '@/components/Footer.vue'
// import TestError from '@/components/TestError.vue';
</script>

<template>
  <main>
    <ErrorBoundary>
      <!-- <TestError /> -->
      <Header />
      <GithubRepos />
    </ErrorBoundary>
    <!-- <Footer /> -->
    <RouterView/>
  </main>
</template>

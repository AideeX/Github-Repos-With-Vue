<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import GithubRepos from '@/components/GithubRepos.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <Header />
    <GithubRepos />
    <Footer />
    <RouterView/>
  </main>
</template>

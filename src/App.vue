<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WishlistSection from './components/WishlistSection.vue'
import AppFooter from './components/AppFooter.vue'
import { site } from './config/site'
</script>

<template>
  <div id="inicio" :style="{ '--image-position': site.appearance.imagePosition, '--image-ratio': site.appearance.imageRatio }">
    <AppHeader />
    <main class="container"><HeroSection /><WishlistSection /></main>
    <AppFooter />
  </div>
</template>

<script setup>
import { site } from '../config/site'
import { safeUrl } from '../utils/giftLinks'
</script>

<template>
  <footer class="site-footer container"><a class="wordmark" href="#inicio" aria-label="Voltar ao início">{{ site.brand.prefix }} <span>{{ site.brand.script }}</span></a><p>{{ site.footer }}</p><a v-if="safeUrl(site.links.pinterest)" :href="safeUrl(site.links.pinterest)" target="_blank" rel="noopener noreferrer">Pinterest <span class="sr-only">(nova aba)</span></a><a v-else href="#inicio">Voltar ao início ↑</a></footer>
</template>

<script setup>
import { site } from '../config/site'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <svg class="hero-ribbon" viewBox="0 0 260 200" fill="none" aria-hidden="true"><path d="M-20 173C37 119 112 128 157 77C180 50 201 18 221 30C254 51 188 83 157 77C129 70 101 44 91 63C79 86 128 95 157 77C131 104 143 156 111 178M157 77C180 83 179 118 208 122" /></svg>
    <p class="eyebrow">{{ site.hero.eyebrow }}</p>
    <h1 id="hero-title">{{ site.hero.title }}<span>{{ site.hero.script }}</span></h1>
    <span class="hero-divider" aria-hidden="true"></span>
    <p class="hero-description">{{ site.hero.description }}</p>
  </section>
</template>

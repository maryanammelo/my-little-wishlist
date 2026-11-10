<script setup>
import { ref } from 'vue'
import { site } from '../config/site'
const active = ref('inicio')
</script>

<template>
  <a class="skip-link" href="#presentes">Pular para os presentes</a>
  <header class="site-header container">
    <a class="wordmark" href="#inicio" :aria-label="`${site.name} — início`" @click="active = 'inicio'">{{ site.brand.prefix }} <span>{{ site.brand.script }}</span></a>
    <span class="header-rule" aria-hidden="true"></span>
    <nav aria-label="Navegação principal">
      <a href="#inicio" :class="{ active: active === 'inicio' }" @click="active = 'inicio'">Início</a>
      <a href="#presentes" :class="{ active: active === 'presentes' }" @click="active = 'presentes'">Presentes</a>
    </nav>
  </header>
</template>

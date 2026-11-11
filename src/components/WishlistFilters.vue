<script setup>
import { Heart, X } from '@lucide/vue'
import { categories, hiddenCategoryIds } from '../data/categories'
const visibleCategories = categories.filter(({ id }) => !hiddenCategoryIds.includes(id))
defineProps({ mode: String, category: String })
defineEmits(['update:mode', 'update:category'])
</script>

<template>
  <div class="filters">
    <div class="filter-group primary-filters" role="group" aria-label="Seleção de presentes">
      <button class="filter-chip" :class="{ selected: mode === 'all' }" :aria-pressed="mode === 'all'" @click="$emit('update:mode', 'all')">Todos</button>
      <button class="filter-chip" :class="{ selected: mode === 'favorites' }" :aria-pressed="mode === 'favorites'" @click="$emit('update:mode', 'favorites')"><Heart :size="18" aria-hidden="true" /> Favoritos</button>
    </div>
    <div class="filter-group category-filters" role="group" aria-label="Categorias de presentes">
      <button v-for="item in visibleCategories" :key="item.id" class="filter-chip" :class="{ selected: category === item.id }" :aria-pressed="category === item.id" @click="$emit('update:category', category === item.id ? '' : item.id)">{{ item.label }}</button>
    </div>
    <button v-if="category" class="clear-category" @click="$emit('update:category', '')"><X :size="14" aria-hidden="true" /> Limpar categoria</button>
  </div>
</template>

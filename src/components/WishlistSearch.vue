<script setup>
import { Search, X } from '@lucide/vue'
import { site } from '../config/site'
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-field">
    <Search :size="23" aria-hidden="true" />
    <label class="sr-only" for="gift-search">Buscar por nome, descrição ou palavra-chave</label>
    <input id="gift-search" type="search" :value="modelValue" :placeholder="site.searchPlaceholder" @input="$emit('update:modelValue', $event.target.value)" />
    <button v-if="modelValue" class="icon-button" aria-label="Limpar busca" @click="$emit('update:modelValue', '')"><X :size="20" aria-hidden="true" /></button>
  </div>
</template>

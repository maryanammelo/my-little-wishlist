<script setup>
import { ref, shallowRef } from 'vue'
import { SearchX } from '@lucide/vue'
import { gifts } from '../data/gifts'
import { site } from '../config/site'
import { useGiftFilters } from '../composables/useGiftFilters'
import WishlistFilters from './WishlistFilters.vue'
import WishlistSearch from './WishlistSearch.vue'
import GiftCard from './GiftCard.vue'
import GiftDetailsModal from './GiftDetailsModal.vue'
const { mode, category, query, filtered, reset } = useGiftFilters(gifts)
const selected = ref(null)
const opener = shallowRef(null)
function open(gift, element) { opener.value = element; selected.value = gift }
</script>

<template>
  <section id="presentes" class="wishlist" aria-labelledby="wishlist-title">
    <div class="section-heading"><h2 id="wishlist-title">{{ site.wishlistTitle }}</h2><p role="status" aria-live="polite" aria-atomic="true">{{ filtered.length }} {{ filtered.length === 1 ? 'item' : 'itens' }}</p></div>
    <WishlistFilters v-model:mode="mode" v-model:category="category" />
    <WishlistSearch v-model="query" />
    <div v-if="filtered.length" class="gift-grid"><GiftCard v-for="(gift, index) in filtered" :key="gift.id" :gift="gift" :index="index" @open="open" /></div>
    <div v-else class="empty-state"><SearchX :size="36" aria-hidden="true" /><h3>{{ site.emptyMessage }}</h3><p>Que tal tentar outra palavra ou explorar toda a lista?</p><button class="action-button" @click="reset">Limpar busca e filtros</button></div>
    <GiftDetailsModal :gift="selected" :opener="opener" @close="selected = null" />
  </section>
</template>

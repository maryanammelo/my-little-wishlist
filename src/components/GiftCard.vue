<script setup>
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'
import GiftImage from './GiftImage.vue'
import { externalAction } from '../utils/giftLinks'
const props = defineProps({ gift: Object, index: Number })
defineEmits(['open'])
const action = computed(() => externalAction(props.gift))
const hasReferences = computed(() => props.gift.type === 'open' && props.gift.references?.length)
</script>

<template>
  <article class="gift-card" :class="{ 'gift-card--received': gift.received }">
    <div v-if="gift.received" class="gift-received-banner" role="status">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M7.5 8a2.5 2.5 0 1 1 2.5-2.5V8m4 0a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 14 8" />
      </svg>
      <span>JÁ GANHEI</span>
    </div>
    <button class="gift-image-button" :aria-label="`Ver detalhes de ${gift.title}`" :style="gift.imagePosition ? { '--image-position': gift.imagePosition } : undefined" @click="$emit('open', gift, $event.currentTarget)">
      <GiftImage :src="gift.image" :alt="gift.imageAlt" :eager="index < 4" :fit="gift.imageFit" />
    </button>
    <div class="gift-card-body">

      <h3><button @click="$emit('open', gift, $event.currentTarget)">{{ gift.title }}</button></h3>
      <p class="gift-description">{{ gift.description }}</p>
      <div v-if="gift.received" class="action-button action-button--received" role="status">
        <span>Presente recebido</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
      </div>
      <button v-else-if="hasReferences" class="action-button" @click="$emit('open', gift, $event.currentTarget)">Ver referências <ArrowUpRight :size="18" aria-hidden="true" /></button>
      <a v-else-if="action" class="action-button" :href="action.url" target="_blank" rel="noopener noreferrer">{{ action.label }} <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (abre em nova aba)</span></a>
      <button v-else class="action-button" @click="$emit('open', gift, $event.currentTarget)">Ver detalhes <ArrowUpRight :size="18" aria-hidden="true" /></button>
    </div>
  </article>
</template>

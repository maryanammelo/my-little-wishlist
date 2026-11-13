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
  <article class="gift-card">
    <button class="gift-image-button" :aria-label="`Ver detalhes de ${gift.title}`" :style="gift.imagePosition ? { '--image-position': gift.imagePosition } : undefined" @click="$emit('open', gift, $event.currentTarget)">
      <GiftImage :src="gift.image" :alt="gift.imageAlt" :eager="index < 4" :fit="gift.imageFit" />
    </button>
    <div class="gift-card-body">

      <h3><button @click="$emit('open', gift, $event.currentTarget)">{{ gift.title }}</button></h3>
      <p class="gift-description">{{ gift.description }}</p>
      <button v-if="hasReferences" class="action-button" @click="$emit('open', gift, $event.currentTarget)">Ver referências <ArrowUpRight :size="18" aria-hidden="true" /></button>
      <a v-else-if="action" class="action-button" :href="action.url" target="_blank" rel="noopener noreferrer">{{ action.label }} <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (abre em nova aba)</span></a>
      <button v-else class="action-button" @click="$emit('open', gift, $event.currentTarget)">Ver detalhes <ArrowUpRight :size="18" aria-hidden="true" /></button>
    </div>
  </article>
</template>

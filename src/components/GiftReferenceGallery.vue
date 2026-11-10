<script setup>
import GiftImage from './GiftImage.vue'
import { safeUrl } from '../utils/giftLinks'
defineProps({ references: Array })
</script>

<template>
  <section v-if="references?.length" class="reference-section" aria-label="Imagens de inspiração">
    <h3>Um pouquinho de inspiração</h3>
    <div class="reference-gallery">
      <figure v-for="(reference, index) in references" :key="index">
        <GiftImage :src="reference.image" :alt="reference.alt || 'Referência visual do presente'" />
        <figcaption v-if="reference.caption || safeUrl(reference.sourceUrl)">{{ reference.caption }} <a v-if="safeUrl(reference.sourceUrl)" :href="safeUrl(reference.sourceUrl)" target="_blank" rel="noopener noreferrer">Ver origem<span class="sr-only"> (nova aba)</span></a></figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { Image } from '@lucide/vue'
const props = defineProps({ src: String, alt: String, eager: Boolean, fit: String })
const failed = ref(false)
const resolvedSrc = computed(() => props.src?.startsWith('/images/')
  ? `${import.meta.env.BASE_URL}${props.src.slice(1)}`
  : props.src)
watch(() => props.src, () => { failed.value = false })
</script>

<template>
  <div v-if="failed || !resolvedSrc" class="image-fallback" role="img" :aria-label="alt">
    <Image :size="30" aria-hidden="true" /><span>Imagem em breve</span>
  </div>
  <img v-else :src="resolvedSrc" :alt="alt" :class="{ 'image-contain': fit === 'contain' }" :loading="eager ? 'eager' : 'lazy'" decoding="async" width="720" height="900" @error="failed = true" />
</template>
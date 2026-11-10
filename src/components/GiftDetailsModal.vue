<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { ArrowUpRight, Heart, X } from '@lucide/vue'
import GiftImage from './GiftImage.vue'
import GiftReferenceGallery from './GiftReferenceGallery.vue'
import { categoryLabel } from '../data/categories'
import { externalAction } from '../utils/giftLinks'
const props = defineProps({ gift: Object, opener: Object })
const emit = defineEmits(['close'])
const dialog = ref(null)
const closeButton = ref(null)
const action = computed(() => props.gift ? externalAction(props.gift) : null)
const labels = { colors: 'Cores', sizes: 'Tamanhos', styles: 'Estilo', materials: 'Materiais' }
const preferences = computed(() => Object.entries(props.gift?.preferences ?? {}).filter(([, value]) => value?.length))
let previousOverflow = ''
let returnFocus
function close() { emit('close') }
function onKeydown(event) {
  if (event.key === 'Escape') { event.preventDefault(); close() }
  if (event.key !== 'Tab') return
  const elements = [...dialog.value.querySelectorAll('button, a[href], [tabindex="0"]')].filter((element) => !element.disabled)
  const first = elements[0], last = elements.at(-1)
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
}
function restore() {
  document.body.style.overflow = previousOverflow
  document.removeEventListener('keydown', onKeydown)
  document.querySelector('#app')?.removeAttribute('inert')
  if (returnFocus?.isConnected) returnFocus.focus()
}
watch(() => props.gift, async (gift, previous) => {
  if (!gift) { if (previous) restore(); return }
  if (!previous) {
    previousOverflow = document.body.style.overflow
    returnFocus = props.opener ?? document.activeElement
    document.body.style.overflow = 'hidden'
    document.querySelector('#app')?.setAttribute('inert', '')
    document.addEventListener('keydown', onKeydown)
  }
  await nextTick()
  closeButton.value?.focus()
})
onBeforeUnmount(() => { if (props.gift) restore() })
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="gift" class="modal-backdrop" @click.self="close">
        <section ref="dialog" class="gift-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
          <button ref="closeButton" class="modal-close icon-button" aria-label="Fechar detalhes" @click="close"><X :size="22" aria-hidden="true" /></button>
          <div class="modal-image"><GiftImage :src="gift.image" :alt="gift.imageAlt" :fit="gift.imageFit" eager /></div>
          <div class="modal-content">
            <p class="category-label">{{ categoryLabel(gift.category) }}</p>
            <span v-if="gift.favorite" class="modal-favorite"><Heart :size="15" aria-hidden="true" /> Entre os meus favoritos</span>
            <h2 id="modal-title">{{ gift.title }}</h2>
            <p id="modal-description">{{ gift.description }}</p>
            <dl v-if="preferences.length || gift.store || gift.price != null" class="preferences">
              <div v-for="[key, values] in preferences" :key="key"><dt>{{ labels[key] || key }}</dt><dd>{{ Array.isArray(values) ? values.join(', ') : values }}</dd></div>
              <div v-if="gift.store"><dt>Loja</dt><dd>{{ gift.store }}</dd></div>
              <div v-if="gift.price != null"><dt>Preço de referência</dt><dd>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(gift.price) }}</dd></div>
            </dl>
            <p v-if="gift.notes" class="gift-notes">{{ gift.notes }}</p>
            <a v-if="action" class="action-button" :href="action.url" target="_blank" rel="noopener noreferrer">{{ action.label }} <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (nova aba)</span></a>
            <GiftReferenceGallery :references="gift.references" />
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

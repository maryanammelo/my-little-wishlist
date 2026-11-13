import { computed, ref, unref } from 'vue'

export const normalize = (text) => String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR')

export function filterGifts(gifts, { mode = 'all', category = '', query = '' } = {}) {
  const words = normalize(query).trim().split(/\s+/).filter(Boolean)
  return gifts.filter((gift) => {
    const text = normalize([gift.title, gift.description, ...(gift.tags ?? [])].join(' '))
    return (mode !== 'favorites' || gift.favorite) && (!category || gift.category === category || (gift.alsoInCategories ?? []).includes(category)) && words.every((word) => text.includes(word))
  })
}

export function useGiftFilters(gifts) {
  const mode = ref('all')
  const category = ref('')
  const query = ref('')
  const filtered = computed(() => filterGifts(unref(gifts), { mode: mode.value, category: category.value, query: query.value }))
  function reset() { mode.value = 'all'; category.value = ''; query.value = '' }
  return { mode, category, query, filtered, reset }
}

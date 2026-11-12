import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { gifts } from '../src/data/gifts.js'
import { categories } from '../src/data/categories.js'
import { filterGifts } from '../src/composables/useGiftFilters.js'
import { externalAction, safeUrl } from '../src/utils/giftLinks.js'

test('catálogo contém 31 presentes com IDs únicos e imagens locais quando cadastradas', () => {
  assert.equal(gifts.length, 31)
  assert.equal(new Set(gifts.map((gift) => gift.id)).size, 31)
  assert.deepEqual(new Set(gifts.map((gift) => gift.type)), new Set(['open', 'product', 'experience']))
  for (const gift of gifts) {
    assert.ok(categories.some((category) => category.id === gift.category))
    if (gift.image) assert.ok(existsSync(`public${gift.image}`), gift.image)
  }
})

test('busca ignora caixa e acentos e pesquisa palavras-chave e descrições', () => {
  assert.equal(filterGifts(gifts, { query: 'BÓLSA' })[0].id, 'bolsa-borgonha')
  assert.ok(filterGifts(gifts, { query: 'headphone' }).some((gift) => gift.id === 'fone-de-ouvido'))
  assert.ok(filterGifts(gifts, { query: 'fragrancia' }).some((gift) => gift.id === 'perfume'))
})

test('categoria, favoritos e busca se combinam sem modificar os dados', () => {
  const original = JSON.stringify(gifts)
  assert.deepEqual(filterGifts(gifts, { mode: 'favorites', category: 'acessorios', query: 'bolsa' }).map((gift) => gift.id), ['bolsa-borgonha'])
  assert.equal(filterGifts(gifts, { category: 'livros', query: 'bolsa' }).length, 0)
  assert.equal(JSON.stringify(gifts), original)
})

test('links ausentes e protocolos inseguros não geram ações externas', () => {
  for (const url of [null, '', 'javascript:alert(1)', 'data:text/html,teste']) assert.equal(safeUrl(url), null)
  assert.equal(externalAction({ type: 'product', productUrl: null }), null)
})

test('os três tipos suportam URLs cadastradas e Pinterest sem galeria', () => {
  assert.equal(externalAction({ type: 'product', productUrl: 'https://example.com/item' }).label, 'Ver produto')
  assert.equal(externalAction({ type: 'open', pinterestUrl: 'https://www.pinterest.com/' }).label, 'Abrir no Pinterest')
  assert.equal(externalAction({ type: 'experience', experienceUrl: 'https://example.com/evento' }).label, 'Ver experiência')
})

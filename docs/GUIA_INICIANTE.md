# Guia para iniciantes — Mary's Wishlist

Este guia usa exemplos do próprio projeto. Comece pelo [guia de execução](SETUP.md) para abrir o site no VS Code.

## Mapa do projeto

- `src/main.js`: carrega fontes, CSS global e monta a aplicação Vue.
- `src/App.vue`: organiza header, hero, lista de presentes e rodapé.
- `src/components/`: componentes visuais reutilizáveis. Por exemplo, `GiftCard.vue` exibe um presente e `GiftDetailsModal.vue` mostra seus detalhes.
- `src/composables/useGiftFilters.js`: concentra busca, filtros e estado relacionado.
- `src/data/gifts.js`: presentes e suas informações.
- `src/data/categories.js`: categorias disponíveis nos filtros.
- `src/config/site.js`: textos gerais do site.
- `src/assets/styles/tokens.css`: cores e estilos globais.
- `src/assets/styles/layout.css`: header, hero, espaçamento geral e rodapé.
- `src/assets/styles/catalog.css`: busca, filtros, grid e cards.
- `src/assets/styles/modal.css`: janela de detalhes e galeria de referências.
- `public/images/`: imagens servidas diretamente pelo Vite.
- `tests/gifts.test.js`: testes do catálogo, filtros e links.

## Como os componentes conversam

`App.vue` monta `WishlistSection.vue`. A seção importa `gifts`, chama `useGiftFilters(gifts)` e passa cada resultado para `GiftCard.vue`. Quando um card é aberto, a seção entrega o presente ao `GiftDetailsModal.vue`.

### Props

Props são dados enviados de um componente pai para um filho. Em `WishlistSection.vue`, cada `GiftCard` recebe `gift` e `index`. O card usa `gift.title`, `gift.image` e os outros campos para montar sua apresentação.

### Emits

Um componente filho pode avisar o pai que algo aconteceu. `GiftCard.vue` emite `open` quando a pessoa escolhe ver os detalhes. `WishlistSection.vue` recebe esse evento e abre o modal. O modal emite `close` para pedir que a seção o feche.

### `ref` e `computed`

`ref` guarda um valor que pode mudar e atualiza a tela quando ele muda. Em `useGiftFilters.js`, `mode`, `category` e `query` guardam o filtro de favoritos, a categoria e o texto digitado.

`computed` calcula um valor a partir de outros valores reativos. `filtered` recalcula os presentes visíveis usando `mode`, `category` e `query`. Não é preciso armazenar essa lista em outro estado.

## Onde fazer mudanças comuns

- Cadastrar ou editar título, descrição, favorito, imagem, tags e preferências: `src/data/gifts.js`.
- Adicionar ou renomear uma categoria: `src/data/categories.js`; use o mesmo `id` nos presentes.
- Alterar textos do hero, título da lista ou rodapé: `src/config/site.js`.
- Alterar cores e estilos globais: `src/assets/styles/tokens.css`.
- Alterar a disposição de uma área: o CSS correspondente em `src/assets/styles/`.
- Alterar o que aparece em um card: `src/components/GiftCard.vue`.
- Alterar detalhes do presente: `src/components/GiftDetailsModal.vue`.
- Ajustar como a busca/filtros funcionam: `src/composables/useGiftFilters.js` e, para os botões, `src/components/WishlistFilters.vue`.

## Como os filtros funcionam

`WishlistFilters.vue` envia mudanças de modo e categoria; `WishlistSearch.vue` envia o texto digitado. `useGiftFilters.js` combina os três valores. A busca considera título, descrição e `tags`, ignora maiúsculas e acentos, e pode ser combinada com Favoritos e uma categoria.

Ao cadastrar uma categoria, adicione seu objeto a `categories` em `src/data/categories.js` e use o novo `id` nos presentes. A função `categoryLabel` converte o ID no texto mostrado nos filtros e detalhes.

## Adicionar uma funcionalidade

1. Procure a tela ou componente responsável pelo trecho que mudará.
2. Coloque dados do catálogo em `src/data/gifts.js`, estado reutilizado ou lógica de filtros no composable, e apresentação no componente correspondente.
3. Passe dados ao filho com props e envie ações ao pai com emits.
4. Preserve o comportamento existente e atualize os testes em `tests/` quando a mudança alterar regras de dados ou filtros.
5. Confira com `bun run build` e `node --test`.

Para começar, use os scripts Bun descritos em [SETUP.md](SETUP.md). Não compartilhe a lista como definitiva antes de revisar os presentes e as imagens demonstrativas.
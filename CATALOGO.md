# Como editar a wishlist

## Onde alterar cada coisa

- `src/data/gifts.js`: presentes, favoritos, fotos, descrições, links e preferências. Os 40 itens atuais são demonstrativos.
- `src/data/categories.js`: categorias exibidas nos filtros.
- `src/config/site.js`: textos do hero, título do catálogo, rodapé, link geral do Pinterest e preferências de enquadramento.
- `src/assets/styles/tokens.css`: paleta, cores e tipografia base.
- `src/assets/styles/layout.css`: header, hero e rodapé.
- `src/assets/styles/catalog.css`: filtros, busca, grid e cards.
- `src/assets/styles/modal.css`: detalhes e galeria.

As fontes DM Sans e Pinyon Script são servidas localmente pelos pacotes Fontsource, incluindo suas licenças. Os ícones são do Lucide (`@lucide/vue`).

## Adicionar presentes reais

Os exemplos usam uma lista compacta `entries`, convertida em objetos completos no final de `gifts.js`. Você pode editar essa lista ou substituir a exportação por objetos explícitos como este:

```js
export const gifts = [
  {
    id: 'minha-bolsa', // único em toda a lista
    type: 'open', // 'open', 'product' ou 'experience'
    title: 'Bolsa borgonha',
    description: 'Pequena, minimalista e delicada.',
    category: 'acessorios', // ID de categories.js
    image: '/images/minha-bolsa.webp',
    imageAlt: 'Bolsa borgonha com alça fina',
    favorite: true, // somente a dona da lista edita essa escolha
    tags: ['bolsa', 'vinho'],
    preferences: {
      colors: ['Borgonha'],
      sizes: [],
      styles: ['Minimalista'],
      materials: [],
    },
    references: [
      {
        image: '/images/inspiracao-bolsa.webp',
        alt: 'Referência de formato e acabamento da bolsa',
        caption: 'Gosto deste formato.',
        sourceUrl: null, // URL real da origem, quando disponível
      },
    ],
    pinterestUrl: null, // cole uma URL real da sua pasta pública
    productUrl: null, // URL real da página do produto
    experienceUrl: null, // URL real da experiência, opcional
    store: null,
    price: null, // número em reais, opcional
    notes: 'Não precisa ser uma marca específica.',
  },
]
```

## Imagens e referências

Coloque arquivos autorizados em `public/images/` e use `/images/nome-do-arquivo.webp` nos dados. Não inclua `public` na URL. Também é possível usar uma URL HTTPS de imagem. Prefira arquivos otimizados e enquadramento vertical 4:5. Imagens indisponíveis recebem uma alternativa visual sem quebrar o card.

As fotos demonstrativas são ilustrativas do Unsplash e não representam produtos específicos à venda. As três fotos de destaque geradas para o projeto também são ilustrativas. Substitua por suas próprias fotos quando cadastrar a lista definitiva. As URLs de origem das imagens de demonstração estão nos dados; nenhuma integração ou scraping do Pinterest foi feito.

Para sugestões abertas, `references` abre a galeria dentro do modal. O campo `pinterestUrl` adiciona **Abrir no Pinterest**. Sem galeria, o botão do card pode abrir a pasta diretamente. Use a URL real de uma pasta pública; o site não busca imagens automaticamente nem exige login/API do Pinterest.

Para produtos, preencha `productUrl`. Para experiências, use `experienceUrl` se houver link. Sem URL, o card abre os detalhes e não mostra um falso botão de compra. Os links externos aceitam HTTP/HTTPS e abrem em nova aba com `noopener noreferrer`.

## Rodar e verificar

```powershell
<<<<<<< HEAD
bun run dev
bun run build
node --test
```

Após instalar novas dependências, reinicie o servidor Vite se ele já estava aberto: Ctrl+C e `bun run dev`.

O projeto não contém backend, cadastro, pagamentos ou edição pública dos favoritos. Para atualizar a wishlist, edite os arquivos de dados.

=======
npm.cmd run dev
npm.cmd run build
node --test
```

Após instalar novas dependências, reinicie o servidor Vite se ele já estava aberto: Ctrl+C e `npm.cmd run dev`.

O projeto não contém backend, cadastro, pagamentos ou edição pública dos favoritos. Para atualizar a wishlist, edite os arquivos de dados.
>>>>>>> a34155437192c4da21d3a9fcc19e770d60b49990

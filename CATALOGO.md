# Catálogo da wishlist

Consulte o [guia para iniciantes](GUIA_INICIANTE.md) para entender a estrutura Vue e o fluxo dos filtros.

## Cadastrar um presente

Edite `entries` em `src/data/gifts.js`. Cada item é um objeto com campos nomeados:

```js
{
  id: 'minha-bolsa',
  type: 'open', // 'open', 'product' ou 'experience'
  title: 'Bolsa borgonha',
  description: 'Pequena, minimalista e delicada.',
  category: 'acessorios', // ID existente em src/data/categories.js
  favorite: true,
  tags: ['bolsa', 'vinho'],
  image: '/images/minha-bolsa.webp',
  imageAlt: 'Bolsa borgonha com alça fina',
  preferences: { colors: ['Borgonha'], styles: ['Minimalista'] },
  productUrl: null,
  pinterestUrl: null,
  experienceUrl: null,
  store: null,
  price: null,
  notes: null,
}
```

`id` deve ser único. `preferences`, links, loja, preço, notas e referências são opcionais. Categorias aceitas ficam em `src/data/categories.js`. O catálogo preenche campos opcionais ausentes com valores padrão.

## Imagens e referências

Coloque imagens autorizadas em `public/images/` e informe o caminho começando em `/images/`. Use nomes únicos, prefira arquivos otimizados e mantenha a proporção vertical 4:5. `imageAlt` deve descrever a imagem. Se uma imagem não carregar, o card mostra uma alternativa visual.

Sugestões abertas recebem por padrão uma referência baseada na imagem principal. Para usar outras inspirações, adicione `references` ao presente:

```js
references: [
  {
    image: '/images/inspiracao-bolsa.webp',
    alt: 'Bolsa com formato semelhante',
    caption: 'Gosto deste formato.',
    sourceUrl: null,
  },
],
```

As imagens atuais são demonstrativas e não representam produtos à venda. O site não busca imagens do Pinterest. Links externos aceitam apenas HTTP e HTTPS e abrem em nova aba.

## Executar e verificar

No PowerShell, na raiz do repositório:

```powershell
bun install
bun run dev
bun run build
node --test
```

Os testes cobrem quantidade e unicidade de IDs, categorias, imagens locais, busca, filtros combinados e links externos.
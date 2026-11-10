# Produto

**Estado:** escopo inicial aprovado. A interface atual contém conteúdo demonstrativo; as escolhas finais da proprietária continuam pendentes.

## Objetivo

Apresentar uma wishlist pessoal de aniversário para amigos e familiares. Visitantes podem explorar presentes por categoria, pesquisar, consultar favoritos definidos pela proprietária, ver detalhes e seguir referências ou links válidos.

## Experiência

A página única reúne header, hero editável, catálogo, filtros, busca, modal de detalhes e footer. A experiência cobre três tipos de presente: produto específico, sugestão aberta e experiência. Os cards seguem a ordem vertical imagem, categoria, título, descrição e ação aplicável.

Busca por título, descrição e palavras-chave ignora caixa e acentos e combina com uma categoria e o filtro Todos ou Favoritos. Sem correspondências, a interface mostra uma opção para limpar os filtros.

## Limites do escopo atual

Não há backend, autenticação, compras, pagamentos, cadastro, scraping ou API do Pinterest. Visitantes não alteram a seleção de favoritos. Links externos são opcionais e só aparecem quando há endereço HTTP(S) cadastrado. A galeria apresenta referências cadastradas manualmente.

## Conteúdo e propriedade

Os 40 presentes e as fotos da implementação inicial são exemplos visuais, não escolhas finais, preços ou recomendações de compra. A proprietária deve revisar e substituir títulos, preferências, imagens e links antes de compartilhar a lista como definitiva. O procedimento está em [CATALOGO.md](../CATALOGO.md).

## Requisitos vigentes

- Layout adaptável, grid de até quatro colunas e cards verticais.
- Navegação por teclado, foco visível, alternativas para imagens ausentes e respeito à preferência por movimento reduzido.
- Modal com Escape, foco, retorno ao elemento de origem e bloqueio da rolagem de fundo.
- Textos, itens e categorias editáveis por arquivos centrais.

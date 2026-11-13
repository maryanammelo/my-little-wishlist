# Sistema visual

**Estado:** direção visual aprovada por briefing e referência. Implementação documentada conforme a interface atual.

## Identidade

Catálogo editorial feminino, minimalista, delicado e sofisticado. Valorizar fotografia, espaço em branco, hierarquia clara e superfícies simples. Evitar excesso decorativo, aparência de dashboard, sombras pesadas, glassmorphism e gradientes chamativos.

## Cores

| Token | Cor | Uso |
| --- | --- | --- |
| Pure Light | `#F8F1E0` | Superfícies suaves e paleta base |
| Soft Grace | `#DAA5AD` | Detalhes delicados |
| Blooming Rose | `#BC8169` | Acentos |
| Alliance Wine | `#500E2A` | Ações e destaque |
| Aged Wine | `#3F1122` | Hover e contraste |
| Branco | `#FFFFFF` | Superfícies |

As cores e os demais tokens estão em `src/assets/styles/tokens.css`.

## Tipografia e ícones

- **DM Sans**, carregada localmente por Fontsource, para a interface.
- **Pinyon Script**, também local, para “wishlist” e outros destaques pontuais.
- Ícones lineares de `@lucide/vue`; não usar emoji como ícone.

## Componentes e responsividade

Header compacto e hero centralizado usam superfícies discretas. Os cards seguem uma única ordem vertical e imagens 4:5. O grid tem uma coluna em telas estreitas, duas a partir de 400 px, três a partir de 960 px e quatro a partir de 1280 px. Filtros quebram em linhas conforme necessário. O modal adapta a imagem e a área de leitura para telas pequenas e grandes.

CSS organizado em `src/assets/styles/layout.css`, `catalog.css` e `modal.css`, importados por `src/assets/main.css`.

## Acessibilidade e movimento

Manter labels e regiões semânticas, nomes acessíveis, foco visível e tamanho adequado para toque. Qualquer animação deve respeitar `prefers-reduced-motion`. Mudanças visuais relevantes precisam de aprovação da responsável pelo produto.

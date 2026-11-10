# Histórico de alterações

Alterações relevantes verificadas neste repositório. Este histórico é editorial e não substitui o histórico Git.

## Em desenvolvimento

- Implementação da primeira interface Vue: header, hero, catálogo de 40 presentes demonstrativos, filtros, busca, favoritos, modal de detalhes, referências manuais e rodapé responsivo.
- Fontes locais, favicon, estilos por área e documentação para personalizar presentes.
- Verificação registrada na tarefa de implementação: `npm.cmd run build` aprovado; cinco testes automatizados aprovados; revisão visual em seis larguras entre 320 px e 1440 px sem overflow; console sem erros ou avisos.
- Os presentes, preferências e links ainda não são o conteúdo definitivo da proprietária.

## Esta atualização

- 2026-11-10 — Removidos marcadores de conflito que impediam o build, mantendo o conteúdo HEAD alinhado às decisões aprovadas; instruções de uso adotam Bun.
- Catálogo reorganizado em objetos com campos nomeados; comparação confirmou os 40 presentes e seus campos funcionais. Campos de URL de fotos antigas sem uso no app foram retirados.
- CSS de catálogo e modal reformatado sem alterar seletores, declarações, breakpoints ou valores visuais. Criado o guia Vue para iniciantes e alinhada a documentação de cards.
- Verificação após a refatoração: `bun run build` aprovado; `node --test` passou nos cinco testes existentes; `git diff --check` sem erros.

- README passou a apresentar os comandos iniciais e o mapa da documentação.
- Guia SETUP atualizado para o caminho local confirmado e para a estrutura Vue já implementada.
- Criados os registros de produto, sistema visual, decisões, pendências e alterações. Estados e limitações foram descritos de acordo com a implementação verificada e o briefing aprovado.

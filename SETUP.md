# Ambiente de desenvolvimento

Base do projeto Mary's Wishlist com Vue 3, Vite e JavaScript. As dependências do projeto são gerenciadas por Bun.

## Abrir no VS Code

No PowerShell, acesse a pasta do repositório:

```powershell
cd "C:\Users\Maryana.Melo\OneDrive\Documentos\GitHub\Projetos\my-little-wishlist"
code .
```

Se `code` não for reconhecido, abra o VS Code e use **Arquivo > Abrir Pasta** para selecionar essa pasta.

## Executar localmente

No terminal do VS Code, na raiz do projeto:

```powershell
bun run dev
```

Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173). Para parar o servidor, pressione **Ctrl+C**. Se `bun` não for reconhecido, instale Bun e reinicie o terminal.

## Dependências e build

Em uma cópia nova do repositório, instale as versões fixadas no lockfile Bun:

```powershell
bun install --frozen-lockfile
```

Para gerar a versão de produção em `dist/`:

```powershell
bun run build
```

Para conferir o build localmente:

```powershell
bun run preview
```

## Estrutura

- `index.html`: página de entrada do Vite.
- `vite.config.js`: configuração do Vite, plugin Vue e integração do Vue DevTools durante o desenvolvimento.
- `src/main.js`: inicialização da aplicação.
- `src/App.vue`: montagem do header, hero, catálogo e rodapé.
- `src/components/`: componentes Vue da interface.
- `src/assets/`: fontes importadas e estilos organizados por área.
- `public/`: arquivos estáticos servidos diretamente.
- `package.json` e `bun.lock`: dependências e versões fixadas.

`node_modules/` e `dist/` são ignorados pelo `.gitignore` existente.

A primeira versão da interface está implementada. Consulte `CATALOGO.md` para editar presentes, imagens e links. Consulte `README.md` para o mapa da documentação do projeto.

## Vue DevTools no desenvolvimento

O Vue DevTools é carregado pelo servidor Vite somente em desenvolvimento. Inicie-o com `bun run dev`. Abra o dock pelo botão flutuante na página ou use **Alt+Shift+D**. No inspetor de componentes, ative a seleção visual (ícone de mira), clique em uma parte do site e selecione o componente identificado. Use **Open in editor** para abrir o arquivo `.vue` no VS Code. A configuração aponta para `code`; esse comando precisa estar no PATH. A seleção visual e a abertura do arquivo devem ser conferidas manualmente no navegador e no VS Code.

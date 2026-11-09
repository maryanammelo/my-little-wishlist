# Ambiente de desenvolvimento

Base do projeto Mary's Wishlist com Vue 3, Vite e JavaScript.

## Abrir no VS Code

No PowerShell, acesse a pasta do repositório:

```powershell
cd "C:\Users\Maryana.Melo\OneDrive\Documentos\Projetos\my-little-wishlist"
code .
```

Se `code` não for reconhecido, abra o VS Code e use **Arquivo > Abrir Pasta** para selecionar essa mesma pasta.

## Executar localmente

No VS Code, abra **Terminal > Novo Terminal** e use PowerShell na raiz do projeto:

```powershell
npm.cmd run dev
```

Abra no navegador o endereço mostrado no terminal (normalmente http://localhost:5173).
Mantenha o terminal aberto enquanto desenvolve. Para parar o servidor, pressione **Ctrl+C**.

Se `npm.cmd` não for reconhecido, feche e abra novamente o VS Code após a instalação do Node.js.
Como alternativa, adicione a instalação existente ao PATH apenas do terminal atual:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm.cmd run dev
```

## Dependências e build

As dependências já foram instaladas durante a configuração. Em uma nova cópia do repositório com o arquivo `package-lock.json`, execute:

```powershell
npm.cmd ci
```

Para gerar os arquivos de produção em `dist/`:

```powershell
npm.cmd run build
```

Para conferir o resultado do build localmente:

```powershell
npm.cmd run preview
```

## Estrutura

- `index.html`: página de entrada do Vite.
- `vite.config.js`: configuração do Vite e suporte aos componentes Vue.
- `src/main.js`: inicialização da aplicação.
- `src/App.vue`: componente principal, com uma mensagem provisória de configuração.
- `src/components/`: futuros componentes reutilizáveis `.vue`.
- `src/assets/`: estilos e arquivos processados pelo Vite.
- `public/`: arquivos estáticos servidos diretamente.
- `package.json`: scripts e dependências.
- `package-lock.json`: versões fixadas das dependências instaladas.

Os arquivos `.gitkeep` apenas permitem que pastas inicialmente vazias sejam incluídas no Git.
`node_modules/` e `dist/` já estão ignorados pelo `.gitignore` existente.

A interface da wishlist ainda não foi implementada.

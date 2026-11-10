# My Little Wishlist

Site pessoal de wishlist de aniversário, feito com Vue 3, Vite e JavaScript. O catálogo demonstra produtos específicos, sugestões abertas e experiências; não processa compras ou pagamentos.

## Começar

Requer Node.js e npm. No Windows PowerShell, na raiz do repositório:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço local mostrado pelo Vite, normalmente `http://localhost:5173`. Para gerar a versão de produção, use `npm.cmd run build`.

## Documentação

- [Guia de execução](SETUP.md): abrir no VS Code, iniciar o servidor e gerar o build.
- [Catálogo](CATALOGO.md): cadastrar presentes, imagens, preferências, referências e links.
- [Produto](docs/PRODUCT.md): público, escopo e requisitos atuais.
- [Sistema visual](docs/DESIGN_SYSTEM.md): paleta, fontes e padrões da interface.
- [Decisões](docs/DECISIONS.md): decisões aprovadas, escolhas técnicas, propostas e itens em revisão.
- [Pendências](docs/BACKLOG.md): trabalho futuro sem confundir ideias com funcionalidades aprovadas.
- [Histórico](docs/CHANGELOG.md): alterações relevantes verificadas.

Os presentes e as preferências em `src/data/gifts.js` são demonstrativos. Personalize-os antes de compartilhar a wishlist como lista definitiva. Visitantes não podem alterar os favoritos.

export const categories = [
  { id: 'roupas', label: 'Roupas' },
  { id: 'sapatos', label: 'Sapatos' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'beleza', label: 'Beleza' },
  { id: 'eletronicos', label: 'Eletrônicos' },
  { id: 'casa', label: 'Casa' },
  { id: 'livros', label: 'Livros' },
  { id: 'outros', label: 'Outros' },
]
export const categoryLabel = (id) => categories.find((category) => category.id === id)?.label ?? id

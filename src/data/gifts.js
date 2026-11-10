// Conteúdo demonstrativo. Substitua por suas próprias escolhas e fotos autorizadas.
// Fotos editoriais ilustrativas do Unsplash, sem associação a marcas ou lojas.
const entries = [
  ['bolsa-borgonha', 'open', 'Bolsa borgonha', 'Pequena, delicada e com espaço para o essencial.', 'acessorios', '1548036328-c9fa89d128fa', true, ['bolsa', 'vinho'], { colors: ['Borgonha', 'Vinho'], styles: ['Minimalista'] }],
  ['fone-de-ouvido', 'product', 'Fone de ouvido', 'Uma pausa no mundo, com a minha playlist favorita.', 'eletronicos', '1546435770-a3e426bf472b', true, ['fone', 'música', 'headphone']],
  ['perfume', 'product', 'Perfume delicado', 'Uma fragrância leve, floral e marcante na medida.', 'beleza', '1541643600914-78b084683601', true, ['perfume', 'floral']],
  ['flores', 'open', 'Um buquê de flores', 'Flores frescas para deixar a semana mais bonita.', 'outros', '1490750967868-88aa4486c946', false, ['flores', 'buquê']],
  ['cardigan', 'open', 'Cardigan aconchegante', 'Para os dias fresquinhos e cafés demorados.', 'roupas', '1434389677669-e08b4cac3105', true, ['tricô', 'casaco'], { colors: ['Creme', 'Vinho'], materials: ['Algodão', 'Tricô macio'] }],
  ['sapatilha', 'open', 'Sapatilha clássica', 'Um modelo delicado para acompanhar o dia a dia.', 'sapatos', '1539109136881-3be0616acf4b', false, ['sapatilha', 'bailarina']],
  ['colar', 'open', 'Colar dourado', 'Corrente fininha com um detalhe especial.', 'acessorios', '1611652022419-a9419f74343d', true, ['joia', 'colar', 'dourado']],
  ['ceramica', 'open', 'Xícara de cerâmica', 'Para transformar o café em um pequeno ritual.', 'casa', '1514228742587-6b1558fcca3d', false, ['café', 'xícara', 'caneca']],
  ['livro', 'open', 'Uma boa história', 'Um romance para ler sem ver a hora passar.', 'livros', '1544947950-fa07a98d237f', true, ['romance', 'leitura', 'livro']],
  ['jantar', 'experience', 'Jantar especial', 'Uma mesa bonita, boa conversa e tempo juntos.', 'outros', '1414235077428-338989a2e8c0', true, ['jantar', 'restaurante', 'experiência']],
  ['vestido', 'open', 'Vestido em tom de vinho', 'Linhas simples, tecido leve e um caimento bonito.', 'roupas', '1595777457583-95e059d581b8', false, ['vestido', 'borgonha']],
  ['tenis', 'open', 'Tênis para todos os dias', 'Confortável, discreto e fácil de combinar.', 'sapatos', '1549298916-b41d501d3772', false, ['tênis', 'conforto']],
  ['batom', 'product', 'Batom rosado', 'Um toque de cor suave, daqueles que vão com tudo.', 'beleza', '1586495777744-4413f21062fa', true, ['batom', 'maquiagem']],
  ['camera', 'product', 'Câmera instantânea', 'Para guardar momentos fora da tela também.', 'eletronicos', '1516035069371-29a1b244cc32', false, ['foto', 'câmera', 'fotografia']],
  ['vela', 'open', 'Vela perfumada', 'Luz baixinha e um cheirinho acolhedor pela casa.', 'casa', '1603006905003-be475563bc59', true, ['vela', 'aroma']],
  ['poesia', 'open', 'Poesia na estante', 'Palavras bonitas para reler e deixar por perto.', 'livros', '1491841550275-ad7854e35ca6', false, ['poema', 'poesia']],
  ['spa', 'experience', 'Uma tarde de spa', 'Um dia tranquilo, sem pressa, para cuidar de mim.', 'outros', '1540555700478-4be289fbecef', true, ['spa', 'massagem', 'descanso']],
  ['camisa', 'open', 'Camisa de linho', 'Leve, atemporal e com aquele ar descomplicado.', 'roupas', '1598554747436-c9293d6a588f', false, ['linho', 'camisa']],
  ['sandalia', 'open', 'Sandália minimalista', 'Tiras delicadas e um salto confortável.', 'sapatos', '1515347619252-60a4bf4fff4f', false, ['sandália', 'salto']],
  ['brincos', 'open', 'Brincos pequenos', 'Um par dourado, discreto e cheio de charme.', 'acessorios', '1535632066927-ab7c9ab60908', true, ['brinco', 'joias']],
  ['skincare', 'open', 'Um ritual de cuidado', 'Texturas leves para um momento só meu.', 'beleza', '1556229010-6c3f2c9ca5f8', false, ['skincare', 'pele', 'creme']],
  ['caixa-som', 'product', 'Caixinha de som', 'Música boa para acompanhar os pequenos momentos.', 'eletronicos', '1608043152269-423dbba4e7e1', false, ['som', 'música', 'bluetooth']],
  ['vaso', 'open', 'Vaso para flores', 'Cerâmica em tons neutros e formas orgânicas.', 'casa', '1578500494198-246f612d3b3d', false, ['vaso', 'cerâmica']],
  ['arte', 'open', 'Livro de arte', 'Fotografia, design e páginas para se inspirar.', 'livros', '1532012197267-da84d127e765', false, ['arte', 'design', 'fotografia']],
  ['viagem', 'experience', 'Uma escapadinha', 'Conhecer um lugar novo e colecionar memórias.', 'outros', '1476514525535-07fb3b4ae5f1', true, ['viagem', 'passeio']],
  ['pijama', 'open', 'Pijama macio', 'Conforto para uma noite de filme e descanso.', 'roupas', '1618354691229-88d47f285158', false, ['pijama', 'conforto']],
  ['bota', 'open', 'Bota de cano curto', 'Um clássico para os dias de outono.', 'sapatos', '1543163521-1bf539c55dd2', false, ['bota', 'outono']],
  ['lenco', 'open', 'Lenço estampado', 'Um detalhe bonito para a bolsa ou para o cabelo.', 'acessorios', '1601924994987-69e26d50dc26', false, ['lenço', 'seda']],
  ['pinceis', 'open', 'Pincéis de maquiagem', 'Um conjunto essencial, com cerdas bem macias.', 'beleza', '1512496015851-a90fb38ba796', false, ['pincel', 'maquiagem']],
  ['leitor', 'product', 'Leitor digital', 'Uma biblioteca inteira para levar comigo.', 'eletronicos', '1592496431122-2349e0fbc666', true, ['leitor', 'ebook', 'livro']],
  ['manta', 'open', 'Manta para o sofá', 'Uma textura gostosa e um cantinho acolhedor.', 'casa', '1584100936595-c0654b55a2e2', false, ['manta', 'decoração']],
  ['receitas', 'open', 'Livro de receitas', 'Ideias para testar e dividir à mesa.', 'livros', '1556909114-f6e7ad7d3136', false, ['receitas', 'cozinha']],
  ['show', 'experience', 'Uma noite de música', 'Um show especial para cantar todas as músicas.', 'outros', '1459749411175-04bf5292ceea', true, ['show', 'ingresso', 'música']],
  ['sueter', 'open', 'Suéter em tom creme', 'Tricô leve, modelagem soltinha e muito conforto.', 'roupas', '1576566588028-4147f3842f27', false, ['suéter', 'tricô']],
  ['mocassim', 'open', 'Mocassim atemporal', 'Para deixar os looks simples mais especiais.', 'sapatos', '1560343090-f0409e92791a', false, ['mocassim', 'sapato']],
  ['relogio', 'open', 'Relógio delicado', 'Uma peça pequena, com desenho limpo e clássico.', 'acessorios', '1524805444758-089113d48a6d', false, ['relógio', 'acessório']],
  ['necessaire', 'open', 'Nécessaire de viagem', 'Tudo no lugar, com um toque de delicadeza.', 'beleza', '1596462502278-27bfdc403348', false, ['nécessaire', 'viagem']],
  ['luminaria', 'open', 'Luminária de leitura', 'Luz quentinha para as últimas páginas do dia.', 'casa', '1507473885765-e6ed057f782c', false, ['luz', 'luminária']],
  ['caderno', 'open', 'Caderno de ideias', 'Para planos, listas e pensamentos soltos.', 'livros', '1531346878377-a5be20888e57', false, ['caderno', 'papelaria']],
  ['piquenique', 'experience', 'Piquenique no parque', 'Uma toalha, algumas delícias e uma tarde ao sol.', 'outros', '1506784983877-45594efa4cbe', false, ['piquenique', 'parque', 'experiência']],
]

const editorialImages = {
  'bolsa-borgonha': '/images/bolsa-editorial.png',
  'fone-de-ouvido': '/images/fone-editorial.png',
  perfume: '/images/perfume-editorial.png',
}

export const gifts = entries.map(([id, type, title, description, category, photo, favorite, tags, preferences = {}]) => ({
  id, type, title, description, category, favorite, tags,
  image: editorialImages[id] ?? `/images/${id}.jpg`,
  imageAlt: `Fotografia ilustrativa: ${title.toLocaleLowerCase('pt-BR')}`,
  imageSource: editorialImages[id] ? null : `https://images.unsplash.com/photo-${photo}`,
  photoUrl: `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=720&q=85`,
  preferences: { colors: [], sizes: [], styles: [], materials: [], ...preferences },
  references: type === 'open' ? [{ image: editorialImages[id] ?? `/images/${id}.jpg`, alt: `Inspiração para ${title.toLocaleLowerCase('pt-BR')}` }] : [],
  pinterestUrl: null,
  productUrl: null,
  experienceUrl: null,
  store: null,
  price: null,
  notes: type === 'product'
    ? 'Modelo demonstrativo: a marca e o link do produto ainda serão escolhidos.'
    : type === 'experience'
      ? 'Uma ideia para vivermos juntos. Podemos combinar o lugar e a data depois.'
      : 'Uma inspiração, sem marca ou modelo obrigatório. As preferências serão confirmadas pela dona da wishlist.',
}))

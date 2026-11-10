// Conteúdo demonstrativo. Substitua por suas próprias escolhas e fotos autorizadas.
const entries = [
  {
    "id": "bolsa-borgonha",
    "type": "open",
    "title": "Bolsa borgonha",
    "description": "Pequena, delicada e com espaço para o essencial.",
    "category": "acessorios",
    "favorite": true,
    "tags": [
      "bolsa",
      "vinho"
    ],
    "image": "/images/bolsa-editorial.png",
    "imageAlt": "Fotografia ilustrativa: bolsa borgonha",
    "preferences": {
      "colors": [
        "Borgonha",
        "Vinho"
      ],
      "styles": [
        "Minimalista"
      ]
    }
  },
  {
    "id": "fone-de-ouvido",
    "type": "product",
    "title": "Fone de ouvido",
    "description": "Uma pausa no mundo, com a minha playlist favorita.",
    "category": "eletronicos",
    "favorite": true,
    "tags": [
      "fone",
      "música",
      "headphone"
    ],
    "image": "/images/fone-editorial.png",
    "imageAlt": "Fotografia ilustrativa: fone de ouvido"
  },
  {
    "id": "perfume",
    "type": "product",
    "title": "Perfume delicado",
    "description": "Uma fragrância leve, floral e marcante na medida.",
    "category": "beleza",
    "favorite": true,
    "tags": [
      "perfume",
      "floral"
    ],
    "image": "/images/perfume-editorial.png",
    "imageAlt": "Fotografia ilustrativa: perfume delicado"
  },
  {
    "id": "flores",
    "type": "open",
    "title": "Um buquê de flores",
    "description": "Flores frescas para deixar a semana mais bonita.",
    "category": "outros",
    "favorite": false,
    "tags": [
      "flores",
      "buquê"
    ],
    "image": "/images/flores.jpg",
    "imageAlt": "Fotografia ilustrativa: um buquê de flores"
  },
  {
    "id": "cardigan",
    "type": "open",
    "title": "Cardigan aconchegante",
    "description": "Para os dias fresquinhos e cafés demorados.",
    "category": "roupas",
    "favorite": true,
    "tags": [
      "tricô",
      "casaco"
    ],
    "image": "/images/cardigan.jpg",
    "imageAlt": "Fotografia ilustrativa: cardigan aconchegante",
    "preferences": {
      "colors": [
        "Creme",
        "Vinho"
      ],
      "materials": [
        "Algodão",
        "Tricô macio"
      ]
    }
  },
  {
    "id": "sapatilha",
    "type": "open",
    "title": "Sapatilha clássica",
    "description": "Um modelo delicado para acompanhar o dia a dia.",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "sapatilha",
      "bailarina"
    ],
    "image": "/images/sapatilha.jpg",
    "imageAlt": "Fotografia ilustrativa: sapatilha clássica"
  },
  {
    "id": "colar",
    "type": "open",
    "title": "Colar dourado",
    "description": "Corrente fininha com um detalhe especial.",
    "category": "acessorios",
    "favorite": true,
    "tags": [
      "joia",
      "colar",
      "dourado"
    ],
    "image": "/images/colar.jpg",
    "imageAlt": "Fotografia ilustrativa: colar dourado"
  },
  {
    "id": "ceramica",
    "type": "open",
    "title": "Xícara de cerâmica",
    "description": "Para transformar o café em um pequeno ritual.",
    "category": "casa",
    "favorite": false,
    "tags": [
      "café",
      "xícara",
      "caneca"
    ],
    "image": "/images/ceramica.jpg",
    "imageAlt": "Fotografia ilustrativa: xícara de cerâmica"
  },
  {
    "id": "livro",
    "type": "open",
    "title": "Uma boa história",
    "description": "Um romance para ler sem ver a hora passar.",
    "category": "livros",
    "favorite": true,
    "tags": [
      "romance",
      "leitura",
      "livro"
    ],
    "image": "/images/livro.jpg",
    "imageAlt": "Fotografia ilustrativa: uma boa história"
  },
  {
    "id": "jantar",
    "type": "experience",
    "title": "Jantar especial",
    "description": "Uma mesa bonita, boa conversa e tempo juntos.",
    "category": "outros",
    "favorite": true,
    "tags": [
      "jantar",
      "restaurante",
      "experiência"
    ],
    "image": "/images/jantar.jpg",
    "imageAlt": "Fotografia ilustrativa: jantar especial"
  },
  {
    "id": "vestido",
    "type": "open",
    "title": "Vestido em tom de vinho",
    "description": "Linhas simples, tecido leve e um caimento bonito.",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "vestido",
      "borgonha"
    ],
    "image": "/images/vestido.jpg",
    "imageAlt": "Fotografia ilustrativa: vestido em tom de vinho"
  },
  {
    "id": "tenis",
    "type": "open",
    "title": "Tênis para todos os dias",
    "description": "Confortável, discreto e fácil de combinar.",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "tênis",
      "conforto"
    ],
    "image": "/images/tenis.jpg",
    "imageAlt": "Fotografia ilustrativa: tênis para todos os dias"
  },
  {
    "id": "batom",
    "type": "product",
    "title": "Batom rosado",
    "description": "Um toque de cor suave, daqueles que vão com tudo.",
    "category": "beleza",
    "favorite": true,
    "tags": [
      "batom",
      "maquiagem"
    ],
    "image": "/images/batom.jpg",
    "imageAlt": "Fotografia ilustrativa: batom rosado"
  },
  {
    "id": "camera",
    "type": "product",
    "title": "Câmera instantânea",
    "description": "Para guardar momentos fora da tela também.",
    "category": "eletronicos",
    "favorite": false,
    "tags": [
      "foto",
      "câmera",
      "fotografia"
    ],
    "image": "/images/camera.jpg",
    "imageAlt": "Fotografia ilustrativa: câmera instantânea"
  },
  {
    "id": "vela",
    "type": "open",
    "title": "Vela perfumada",
    "description": "Luz baixinha e um cheirinho acolhedor pela casa.",
    "category": "casa",
    "favorite": true,
    "tags": [
      "vela",
      "aroma"
    ],
    "image": "/images/vela.jpg",
    "imageAlt": "Fotografia ilustrativa: vela perfumada"
  },
  {
    "id": "poesia",
    "type": "open",
    "title": "Poesia na estante",
    "description": "Palavras bonitas para reler e deixar por perto.",
    "category": "livros",
    "favorite": false,
    "tags": [
      "poema",
      "poesia"
    ],
    "image": "/images/poesia.jpg",
    "imageAlt": "Fotografia ilustrativa: poesia na estante"
  },
  {
    "id": "spa",
    "type": "experience",
    "title": "Uma tarde de spa",
    "description": "Um dia tranquilo, sem pressa, para cuidar de mim.",
    "category": "outros",
    "favorite": true,
    "tags": [
      "spa",
      "massagem",
      "descanso"
    ],
    "image": "/images/spa.jpg",
    "imageAlt": "Fotografia ilustrativa: uma tarde de spa"
  },
  {
    "id": "camisa",
    "type": "open",
    "title": "Camisa de linho",
    "description": "Leve, atemporal e com aquele ar descomplicado.",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "linho",
      "camisa"
    ],
    "image": "/images/camisa.jpg",
    "imageAlt": "Fotografia ilustrativa: camisa de linho"
  },
  {
    "id": "sandalia",
    "type": "open",
    "title": "Sandália minimalista",
    "description": "Tiras delicadas e um salto confortável.",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "sandália",
      "salto"
    ],
    "image": "/images/sandalia.jpg",
    "imageAlt": "Fotografia ilustrativa: sandália minimalista"
  },
  {
    "id": "brincos",
    "type": "open",
    "title": "Brincos pequenos",
    "description": "Um par dourado, discreto e cheio de charme.",
    "category": "acessorios",
    "favorite": true,
    "tags": [
      "brinco",
      "joias"
    ],
    "image": "/images/brincos.jpg",
    "imageAlt": "Fotografia ilustrativa: brincos pequenos"
  },
  {
    "id": "skincare",
    "type": "open",
    "title": "Um ritual de cuidado",
    "description": "Texturas leves para um momento só meu.",
    "category": "beleza",
    "favorite": false,
    "tags": [
      "skincare",
      "pele",
      "creme"
    ],
    "image": "/images/skincare.jpg",
    "imageAlt": "Fotografia ilustrativa: um ritual de cuidado"
  },
  {
    "id": "caixa-som",
    "type": "product",
    "title": "Caixinha de som",
    "description": "Música boa para acompanhar os pequenos momentos.",
    "category": "eletronicos",
    "favorite": false,
    "tags": [
      "som",
      "música",
      "bluetooth"
    ],
    "image": "/images/caixa-som.jpg",
    "imageAlt": "Fotografia ilustrativa: caixinha de som"
  },
  {
    "id": "vaso",
    "type": "open",
    "title": "Vaso para flores",
    "description": "Cerâmica em tons neutros e formas orgânicas.",
    "category": "casa",
    "favorite": false,
    "tags": [
      "vaso",
      "cerâmica"
    ],
    "image": "/images/vaso.jpg",
    "imageAlt": "Fotografia ilustrativa: vaso para flores"
  },
  {
    "id": "arte",
    "type": "open",
    "title": "Livro de arte",
    "description": "Fotografia, design e páginas para se inspirar.",
    "category": "livros",
    "favorite": false,
    "tags": [
      "arte",
      "design",
      "fotografia"
    ],
    "image": "/images/arte.jpg",
    "imageAlt": "Fotografia ilustrativa: livro de arte"
  },
  {
    "id": "viagem",
    "type": "experience",
    "title": "Uma escapadinha",
    "description": "Conhecer um lugar novo e colecionar memórias.",
    "category": "outros",
    "favorite": true,
    "tags": [
      "viagem",
      "passeio"
    ],
    "image": "/images/viagem.jpg",
    "imageAlt": "Fotografia ilustrativa: uma escapadinha"
  },
  {
    "id": "pijama",
    "type": "open",
    "title": "Pijama macio",
    "description": "Conforto para uma noite de filme e descanso.",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "pijama",
      "conforto"
    ],
    "image": "/images/pijama.jpg",
    "imageAlt": "Fotografia ilustrativa: pijama macio"
  },
  {
    "id": "bota",
    "type": "open",
    "title": "Bota de cano curto",
    "description": "Um clássico para os dias de outono.",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "bota",
      "outono"
    ],
    "image": "/images/bota.jpg",
    "imageAlt": "Fotografia ilustrativa: bota de cano curto"
  },
  {
    "id": "lenco",
    "type": "open",
    "title": "Lenço estampado",
    "description": "Um detalhe bonito para a bolsa ou para o cabelo.",
    "category": "acessorios",
    "favorite": false,
    "tags": [
      "lenço",
      "seda"
    ],
    "image": "/images/lenco.jpg",
    "imageAlt": "Fotografia ilustrativa: lenço estampado"
  },
  {
    "id": "pinceis",
    "type": "open",
    "title": "Pincéis de maquiagem",
    "description": "Um conjunto essencial, com cerdas bem macias.",
    "category": "beleza",
    "favorite": false,
    "tags": [
      "pincel",
      "maquiagem"
    ],
    "image": "/images/pinceis.jpg",
    "imageAlt": "Fotografia ilustrativa: pincéis de maquiagem"
  },
  {
    "id": "leitor",
    "type": "product",
    "title": "Leitor digital",
    "description": "Uma biblioteca inteira para levar comigo.",
    "category": "eletronicos",
    "favorite": true,
    "tags": [
      "leitor",
      "ebook",
      "livro"
    ],
    "image": "/images/leitor.jpg",
    "imageAlt": "Fotografia ilustrativa: leitor digital"
  },
  {
    "id": "manta",
    "type": "open",
    "title": "Manta para o sofá",
    "description": "Uma textura gostosa e um cantinho acolhedor.",
    "category": "casa",
    "favorite": false,
    "tags": [
      "manta",
      "decoração"
    ],
    "image": "/images/manta.jpg",
    "imageAlt": "Fotografia ilustrativa: manta para o sofá"
  },
  {
    "id": "receitas",
    "type": "open",
    "title": "Livro de receitas",
    "description": "Ideias para testar e dividir à mesa.",
    "category": "livros",
    "favorite": false,
    "tags": [
      "receitas",
      "cozinha"
    ],
    "image": "/images/receitas.jpg",
    "imageAlt": "Fotografia ilustrativa: livro de receitas"
  },
  {
    "id": "show",
    "type": "experience",
    "title": "Uma noite de música",
    "description": "Um show especial para cantar todas as músicas.",
    "category": "outros",
    "favorite": true,
    "tags": [
      "show",
      "ingresso",
      "música"
    ],
    "image": "/images/show.jpg",
    "imageAlt": "Fotografia ilustrativa: uma noite de música"
  },
  {
    "id": "sueter",
    "type": "open",
    "title": "Suéter em tom creme",
    "description": "Tricô leve, modelagem soltinha e muito conforto.",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "suéter",
      "tricô"
    ],
    "image": "/images/sueter.jpg",
    "imageAlt": "Fotografia ilustrativa: suéter em tom creme"
  },
  {
    "id": "mocassim",
    "type": "open",
    "title": "Mocassim atemporal",
    "description": "Para deixar os looks simples mais especiais.",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "mocassim",
      "sapato"
    ],
    "image": "/images/mocassim.jpg",
    "imageAlt": "Fotografia ilustrativa: mocassim atemporal"
  },
  {
    "id": "relogio",
    "type": "open",
    "title": "Relógio delicado",
    "description": "Uma peça pequena, com desenho limpo e clássico.",
    "category": "acessorios",
    "favorite": false,
    "tags": [
      "relógio",
      "acessório"
    ],
    "image": "/images/relogio.jpg",
    "imageAlt": "Fotografia ilustrativa: relógio delicado"
  },
  {
    "id": "necessaire",
    "type": "open",
    "title": "Nécessaire de viagem",
    "description": "Tudo no lugar, com um toque de delicadeza.",
    "category": "beleza",
    "favorite": false,
    "tags": [
      "nécessaire",
      "viagem"
    ],
    "image": "/images/necessaire.jpg",
    "imageAlt": "Fotografia ilustrativa: nécessaire de viagem"
  },
  {
    "id": "luminaria",
    "type": "open",
    "title": "Luminária de leitura",
    "description": "Luz quentinha para as últimas páginas do dia.",
    "category": "casa",
    "favorite": false,
    "tags": [
      "luz",
      "luminária"
    ],
    "image": "/images/luminaria.jpg",
    "imageAlt": "Fotografia ilustrativa: luminária de leitura"
  },
  {
    "id": "caderno",
    "type": "open",
    "title": "Caderno de ideias",
    "description": "Para planos, listas e pensamentos soltos.",
    "category": "livros",
    "favorite": false,
    "tags": [
      "caderno",
      "papelaria"
    ],
    "image": "/images/caderno.jpg",
    "imageAlt": "Fotografia ilustrativa: caderno de ideias"
  },
  {
    "id": "piquenique",
    "type": "experience",
    "title": "Piquenique no parque",
    "description": "Uma toalha, algumas delícias e uma tarde ao sol.",
    "category": "outros",
    "favorite": false,
    "tags": [
      "piquenique",
      "parque",
      "experiência"
    ],
    "image": "/images/piquenique.jpg",
    "imageAlt": "Fotografia ilustrativa: piquenique no parque"
  }
]

const notesByType = {
  product: 'Modelo demonstrativo: a marca e o link do produto ainda serão escolhidos.',
  experience: 'Uma ideia para vivermos juntos. Podemos combinar o lugar e a data depois.',
  open: 'Uma inspiração, sem marca ou modelo obrigatório. As preferências serão confirmadas pela dona da wishlist.',
}

export const gifts = entries.map((gift) => ({
  ...gift,
  preferences: { colors: [], sizes: [], styles: [], materials: [], ...gift.preferences },
  references: gift.references ?? (gift.type === 'open'
    ? [{ image: gift.image, alt: `Inspiração para ${gift.title.toLocaleLowerCase('pt-BR')}` }]
    : []),
  pinterestUrl: gift.pinterestUrl ?? null,
  productUrl: gift.productUrl ?? null,
  experienceUrl: gift.experienceUrl ?? null,
  store: gift.store ?? null,
  price: gift.price ?? null,
  notes: gift.notes ?? notesByType[gift.type],
}))

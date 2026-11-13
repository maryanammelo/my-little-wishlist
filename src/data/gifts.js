// Conteúdo demonstrativo. Substitua por suas próprias escolhas e fotos autorizadas.
const entries = [
    {
    "id": "bolsa-borgonha",
    "type": "product",
    "title": "Relógio Boxy Romain Prata SaintGermain",
    "description": "Ainda não sei.",
    "category": "acessorios",
    "favorite": false,
    "tags": ["relógio", "boxy", "romain", "prata", "saintgermain"],
    "image": "/images/relogio-boxy-romain-prata.png",
    "imageAlt": "Relógio de caixa quadrada prateada com pulseira metálica",
    "productUrl": "https://vt.tiktok.com/ZS9f5cdcSseRG-rx7vY/"
  },
{
    "id": "fone-de-ouvido",
    "type": "product",
    "title": "AirPods Pro 3",
    "description": "Uma pausa no mundo, com a minha playlist favorita.",
    "category": "eletronicos",
    "favorite": true,
    "tags": [
      "fone",
      "música",
      "headphone"
    ],
    "image": "/images/fone-airpods.png",
    "imageAlt": "AirPods brancos com estojo de carregamento aberto"
  },
  {
    "id": "perfume",
    "type": "product",
    "title": "Vénus Eau de Parfum Perfume - Nina Ricci",
    "description": "Um toque dourado de charme para deixar cada momento ainda mais especial.",
    "category": "beleza",
    "favorite": true,
    "tags": [
      "perfume",
      "floral"
    ],
    "image": "/images/venus-eau-de-parfum-nina-ricci.png",
    "imageAlt": "Perfume Vénus Eau de Parfum Nina Ricci com frasco dourado em formato de concha",
    "imageFit": "contain"
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
    "image": "/images/buque-de-flores-referencias.png",
    "imageAlt": "Colagem com quatro buquês em estilos e combinações de cores diferentes",
    "imageFit": "contain"
  },
  {
    "id": "cardigan",
    "type": "product",
    "title": "Vestido amarelo manteiga",
    "description": "Siren Gaze Vestido Feminino Elegante de Verão Amarelo - SHEIN Tamanho PP/XS",
    "category": "roupas",
    "favorite": true,
    "tags": [
      "vestido",
      "amarelo manteiga",
      "siren gaze",
      "shein",
      "tamanho PP",
      "XS"
    ],
    "image": "/images/vestido-amarelo-manteiga.png",
    "imageAlt": "Vestido amarelo manteiga com gola ampla e botões dourados",
    "productUrl": "https://onelink.shein.com/60/67tm5q6kovca?shc=2_RdFb4LZ5xTg",
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
    "type": "product",
    "title": "Adidas Samba Og Maroon Cream White Bordô",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": true,
    "tags": [
      "adidas",
      "samba",
      "maroon",
      "cream",
      "white",
      "bordô"
    ],
    "image": "/images/adidas-samba-og-maroon-cream-white.png",
    "imageAlt": "Tênis Adidas Samba OG em bordô e branco, visto de lado",
    "imageFit": "contain"
  },
  {
    "id": "colar",
    "type": "product",
    "title": "Relógio Saint Germain Mini Belle Bicolor Gold 24mm",
    "description": "Ainda não sei.",
    "category": "acessorios",
    "favorite": false,
    "tags": [
      "relógio",
      "saint germain",
      "mini belle",
      "bicolor",
      "gold",
      "24mm"
    ],
    "image": "/images/relogio-saint-germain.png",
    "imageAlt": "Relógio Saint Germain Mini Belle bicolor com pulseira prateada e dourada",
    "productUrl": "https://vt.tiktok.com/ZS9f5vd1W9rmb-14z3q/"
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
    "image": "/images/jantar-especial-sushi.png",
    "imageAlt": "Prato com uma seleção variada de sushi e sashimi",
    "imageFit": "contain"
  },
  {
    "id": "vestido",
    "type": "open",
    "title": "Calça Branca Jeans/Alfaiataria",
    "description": "Modelo Wide leg ou Reta - Tamanho 34",
    "category": "roupas",
    "favorite": true,
    "tags": [
      "calça",
      "branca",
      "jeans",
      "alfaiataria",
      "tamanho 34"
    ],
    "image": "/images/calca-branca-jeans-alfaiataria.png",
    "imageAlt": "Pessoa usando calça branca de perna ampla e blusa de poás bordô"
  },
  {
    "id": "tenis",
    "type": "product",
    "title": "Nike Dunk Low Cacao Wow",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": true,
    "tags": [
      "tênis",
      "conforto"
    ],
    "image": "/images/nike-dunk-low-cacao-wow.png",
    "imageAlt": "Tênis Nike Dunk Low Cacao Wow branco e marrom, visto de lado",
    "imageFit": "contain"
  },
  {
    "id": "lapis-olhos-contem1g",
    "type": "product",
    "title": "Lápis Para Olhos Contém1g - Cobre Marinho E Vinho",
    "description": "O tom vinho é o meu favorito e o que eu mais gostaria de ganhar; cobre e marinho também são lindos.",
    "category": "beleza",
    "favorite": true,
    "tags": [
      "lápis para olhos",
      "lápis",
      "contém1g",
      "cobre",
      "marinho",
      "vinho",
      "maquiagem"
    ],
    "image": "/images/lapis-olhos-contem1g.png",
    "imageAlt": "Três lápis para olhos Contém1g nas cores marinho, cobre e vinho",
    "imageFit": "contain"
  },
  {
    "id": "camera",
    "type": "product",
    "title": "iPhone 17 PRO/PRO MAX 256GB",
    "description": "Para guardar momentos fora da tela também.",
    "category": "eletronicos",
    "favorite": false,
    "tags": [
      "foto",
      "câmera",
      "fotografia"
    ],
    "image": "/images/iphone-17-pro-pro-max.png",
    "imageAlt": "iPhone em azul, prata e laranja, em vistas frontal e traseira"
  },
  {
    "id": "camisa",
    "type": "open",
    "title": "Camisa social branca",
    "description": "Tamanho PP",
    "category": "roupas",
    "favorite": true,
    "tags": [
      "camisa",
      "social",
      "branca",
      "tamanho PP"
    ],
    "image": "/images/camisa-social-branca.png",
    "imageAlt": "Pessoa usando camisa social branca e calça jeans, sentada em um café"
  },
  {
    "id": "sandalia",
    "type": "product",
    "title": "TÊNIS HANDBALL SPEZIAL",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": true,
    "tags": [
      "adidas",
      "handball spezial",
      "handball",
      "spezial",
      "bordô",
      "tênis"
    ],
    "image": "/images/adidas-handball-spezial.png",
    "imageAlt": "Tênis Adidas Handball Spezial vinho e creme, visto de lado",
    "imageFit": "contain"
  },
  {
    "id": "brincos",
    "type": "product",
    "title": "Relógio Boxy Bicolor Quadrado Dourado e Prata",
    "description": "Ainda não sei.",
    "category": "acessorios",
    "favorite": false,
    "tags": [
      "relógio",
      "boxy",
      "bicolor",
      "quadrado",
      "dourado",
      "prata"
    ],
    "image": "/images/relogio-boxy-bicolor.png",
    "imageAlt": "Relógio de caixa quadrada bicolor dourada e prateada",
    "productUrl": "https://vt.tiktok.com/ZS9f5v7hYR5VS-biV9B/"
  },
  {
    "id": "skincare",
    "type": "open",
    "title": "Mascavo Bronzer cor: Sunset",
    "description": "Mascavo Summer Glow Bronzer Sunset 8g",
    "category": "beleza",
    "favorite": false,
    "tags": ["bronzer", "mascavo", "sunset", "bronzeador"],
    "image": "/images/mascavo-bronzer-sunset.png",
    "imageAlt": "Bronzer compacto Mascavo Summer Glow na cor Sunset em estojo aberto",
    "imageFit": "contain"
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
    "title": "Calça Poá",
    "description": "Tamanho 34",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "calça",
      "poá",
      "tamanho 34"
    ],
    "image": "/images/calca-poa.png",
    "imageAlt": "Calça branca com estampa de poás pretos",
    "imagePosition": "center 100%"
  },
  {
    "id": "bota",
    "type": "product",
    "title": "Tênis Nike Air Max 90",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "nike",
      "air max 90",
      "tênis",
      "tamanho 36"
    ],
    "image": "/images/nike-air-max-90.png",
    "imageAlt": "Tênis Nike Air Max 90 branco e rosa, visto de lado",
    "imageFit": "contain",
    "productUrl": "https://www.nike.com.br/tenis-nike-air-max-90-feminino-080182.html?cor=56"
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
    "id": "sueter",
    "type": "product",
    "title": "Jaqueta marrom couro",
    "description": "DAZY Jaqueta de Couro PU Feminina - SHEIN - Tamanho XS",
    "category": "roupas",
    "favorite": false,
    "tags": [
      "dazy",
      "jaqueta",
      "marrom",
      "couro",
      "PU",
      "XS"
    ],
    "image": "/images/jaqueta-marrom-couro.png",
    "imageAlt": "Jaqueta marrom de couro PU usada sobre uma blusa preta",
    "productUrl": "https://onelink.shein.com/60/67tne2ekt99q?shc=2_RdFt1f9CNET"
  },
  {
    "id": "mocassim",
    "type": "open",
    "title": "Bota Preta Cano Longo",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": false,
    "tags": [
      "bota",
      "bota preta"
    ],
    "image": "/images/bota-preta-cano-longo.png",
    "imageAlt": "Bota preta de cano longo com salto baixo e detalhe dourado",
    "imageFit": "contain"
  },
  {
    "id": "necessaire",
    "type": "open",
    "title": "Kit Wella Fusion Shampoo e Condicionador",
    "description": "Um duo para transformar o cuidado dos fios em um ritual especial, com shampoo e condicionador.",
    "category": "beleza",
    "favorite": false,
    "tags": ["wella", "fusion", "shampoo", "condicionador", "cabelos"],
    "image": "/images/wella-fusion-duo.png",
    "imageAlt": "Kit Wella Professionals Fusion com shampoo e condicionador",
    "imageFit": "contain"
  },
  {
    "id": "calca-marrom-zara",
    "type": "product",
    "title": "Calça marrom",
    "description": "Tamanho 34",
    "category": "roupas",
    "favorite": false,
    "tags": ["calça", "marrom", "zara", "jeans", "wide leg", "tamanho 34"],
    "image": "/images/calca-marrom-zara.png",
    "imageAlt": "Calça jeans marrom de cintura alta e modelagem ampla",
    "imageFit": "contain",
    "productUrl": "https://www.zara.com/br/pt/jeans-zw-collection-wide-leg-cintura-alta-p08307251.html?v1=557198531&utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil"
  },
  {
    "id": "vestido-preto-cea",
    "type": "product",
    "title": "Vestido preto",
    "description": "Tamanho PP",
    "category": "roupas",
    "favorite": false,
    "tags": ["vestido", "preto", "renda", "cea", "tamanho PP"],
    "image": "/images/vestido-preto-cea.png",
    "imageAlt": "Vestido preto curto de gola alta e sem mangas, usado por uma modelo",
    "imageFit": "contain",
    "productUrl": "https://www.cea.com.br/vestido-curto-feminino-com-renda-frente-unica-preto-1114486-preto/p"
  },
  {
    "id": "roupas-bordo-borgonha",
    "type": "open",
    "title": "Roupas Bordô ou Borgonha",
    "description": "Qualquer peça de roupa nessa cor, eu iria amar!",
    "category": "roupas",
    "favorite": false,
    "tags": ["roupas", "bordô", "borgonha", "vinho"],
    "image": "/images/roupas-bordo-borgonha.png",
    "imageAlt": "Colagem de roupas, sapatos e acessórios em tons bordô e borgonha",
    "imageFit": "contain"
  },
  {
    "id": "sandalia-prata",
    "type": "open",
    "title": "Sandalia Prata",
    "description": "Tamanho 36",
    "category": "sapatos",
    "favorite": false,
    "tags": ["sandália", "prata", "sapatos", "tamanho 36"],
    "image": "/images/sandalia-prata.png",
    "imageAlt": "Colagem de sandálias prateadas em diferentes estilos",
    "imageFit": "contain"
  },
  {
    "id": "bolsa-dourada",
    "type": "open",
    "title": "Bolsa Dourada",
    "description": "Uma bolsa metalizada para dar um toque de brilho e elegância aos looks.",
    "category": "acessorios",
    "favorite": false,
    "tags": ["bolsa", "dourada", "metalizada", "acessórios"],
    "image": "/images/bolsa-dourada.png",
    "imageAlt": "Colagem de bolsas metalizadas em dourado e prata, em diferentes modelos",
    "imageFit": "contain"
  },
  {
    "id": "wella-oil-reflections-duo",
    "type": "open",
    "title": "Kit Wella Professionals Oil Reflections Duo",
    "description": "Um duo de shampoo e condicionador para deixar o cuidado dos fios ainda mais especial, com brilho e leveza.",
    "category": "beleza",
    "favorite": false,
    "tags": ["wella", "oil reflections", "shampoo", "condicionador", "cabelos"],
    "image": "/images/wella-oil-reflections-duo.png",
    "imageAlt": "Kit Wella Professionals Oil Reflections com shampoo e condicionador",
    "imageFit": "contain"
  },
  {
    "id": "pijama-fofo",
    "type": "open",
    "title": "Pijama",
    "description": "Pijamas fofinhos e confortáveis.",
    "category": "roupas",
    "favorite": false,
    "tags": ["pijama", "pijamas", "roupa", "conforto"],
    "image": "/images/pijama-referencias.png",
    "imageAlt": "Colagem de pijamas fofos em diferentes cores e modelos",
    "imageFit": "contain"
  },
  {
    "id": "piano-digital-yamaha",
    "type": "product",
    "title": "Piano Digital Yamaha",
    "description": "P145 88 Teclas Com Pedal",
    "category": "eletronicos",
    "alsoInCategories": ["outros"],
    "favorite": false,
    "tags": ["piano", "yamaha", "P145", "88 teclas", "pedal"],
    "image": "/images/piano-digital-yamaha.png",
    "imageAlt": "Piano digital Yamaha P145 de 88 teclas com pedal",
    "imageFit": "contain",
    "productUrl": "https://meli.la/2eL6rxa"
  },
  {
    "id": "anel-life",
    "type": "product",
    "title": "Anel Life",
    "description": "Coloré em Prata 925 com Cristais Verde e Incolores. Tamanho: 10/11/12.",
    "category": "acessorios",
    "favorite": false,
    "tags": ["anel", "life", "vivara", "prata 925", "cristal verde"],
    "image": "/images/anel-life-prata-cristais-verde.png",
    "imageAlt": "Anel Life em prata com cristal verde central e cristais incolores",
    "imageFit": "contain",
    "productUrl": "https://www.vivara.com.br/anel-life-colore-prata-cristal-verde-al01008600/p"
  },
  {
    "id": "anel-life-colors",
    "type": "product",
    "title": "Anel Life Colors",
    "description": "Em Prata 925 com Pedras Incolores. Tamanho: 10/11/12.",
    "category": "acessorios",
    "favorite": false,
    "tags": ["anel", "life colors", "vivara", "prata 925", "pedras incolores"],
    "image": "/images/anel-life-colors.png",
    "imageAlt": "Anel Life Colors de prata com fileira de pedras coloridas",
    "imageFit": "contain",
    "productUrl": "https://www.vivara.com.br/anel-life-colors-em-prata-925-com-pedras-incolores-al01028600/p"
  },
  {
    "id": "colares-de-prata",
    "type": "open",
    "title": "Colares de prata",
    "description": "Qualquer colar de prata me deixaria muito feliz — eu iria amar ganhar um!",
    "category": "acessorios",
    "favorite": false,
    "tags": ["colar", "colares", "prata", "acessórios"],
    "image": "/images/colares-de-prata-referencias.png",
    "imageAlt": "Inspiração de colares delicados de prata usados em camadas",
    "imageFit": "contain"
  }
]

const notesByType = {
  product: 'O link do produto ainda será escolhido.',
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
  notes: gift.notes ?? (gift.productUrl ? 'Link do produto disponível.' : notesByType[gift.type]),
}))

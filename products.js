const productsData = [
  // --- VESTUÁRIO (5) ---
  {
    id: 1,
    name: "Jaqueta Corta-Vento Esportiva",
    category: "Vestuário",
    price: 219.90,
    image: "images/D_NQ_NP_709871-MLA112652591939_062026-O-jaqueta-corta-vento-esportiva-preta-unissex.webp"
  },
  {
    id: 2,
    name: "Camiseta Dry-Fit High Performance",
    category: "Vestuário",
    price: 99.90,
    image: "images/kit-camiseta-dry-fit-masculina-treino-academia-02-6a16f743439c2.webp"
  },
  {
    id: 3,
    name: "Bermuda de Treino Ergonômica",
    category: "Vestuário",
    price: 119.90,
    image: "images/D_NQ_NP_665630-MLB109872500182_042026-O.webp"
  },
  {
    id: 4,
    name: "Casaco Moletom Heavyweight",
    category: "Vestuário",
    price: 289.90,
    image: "images/images.jpg"
  },
  {
    id: 5,
    name: "Regata de Compressão Fitness",
    category: "Vestuário",
    price: 79.90,
    image: "images/regata_tokyo_de_alta_compressao_leflu_marinho_com_bolso_167_1_38351b243faceebe62e23170c038e381.webp"
  },

  // --- CALÇADOS (5) ---
  {
    id: 6,
    name: "Tênis Running Ultralight",
    category: "Calçados",
    price: 389.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Tênis Court Indoor Pro",
    category: "Calçados",
    price: 429.90,
    image: "images/tenis-indoor-court-lite-4-nike-fd6574-103-5d115df10eefa7dcede4e5b8f60499b3.jpg"
  },
  {
    id: 8,
    name: "Tênis Casual Urban Street",
    category: "Calçados",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Chuteira Campo Carbon Fiber",
    category: "Calçados",
    price: 549.90,
    image: "images/images (1).jpg"
  },
  {
    id: 10,
    name: "Sandália Slide Comfort Sport",
    category: "Calçados",
    price: 129.90,
    image: "images/chinelo-masculino-brsport-2251231-marinho-kalceaki-wy1fivzwn6.webp"
  },

  // --- ACESSÓRIOS (5) ---
  {
    id: 11,
    name: "Mochila Urban Impermeável",
    category: "Acessórios",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Garrafa Térmica Inox 1L",
    category: "Acessórios",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Boné Aba Curva Breathable",
    category: "Acessórios",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Meias Esportivas Cano Alto (Kit 3)",
    category: "Acessórios",
    price: 49.90,
    image: "images/images (2).jpg"
  },
  {
    id: 15,
    name: "Shoulder Bag Minimalist",
    category: "Acessórios",
    price: 99.90,
    image: "images/images (3).jpg"
  },

  // --- EQUIPAMENTOS (5) ---
  {
    id: 16,
    name: "Bola de Vôlei Profissional Match",
    category: "Equipamentos",
    price: 249.90,
    image: "images/615-7cXkmIL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 17,
    name: "Kit Halteres Ajustáveis 20kg",
    category: "Equipamentos",
    price: 499.90,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Tapete Yoga Mat Antiderrapante",
    category: "Equipamentos",
    price: 119.90,
    image: "images/BGIEJKKCUYVQKRQFETQY.webp"
  },
  {
    id: 19,
    name: "Corda de Pular em Alumínio Pro",
    category: "Equipamentos",
    price: 69.90,
    image: "images/images (4).jpg"
  },
  {
    id: 20,
    name: "Kit Super Band (Elásticos Extensores)",
    category: "Equipamentos",
    price: 89.90,
    image: "images/images (5).jpg"
  },

  // --- ELETRÔNICOS (5) ---
  {
    id: 21,
    name: "Smartwatch Sport GPS AMOLED",
    category: "Eletrônicos",
    price: 699.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    name: "Fone de Ouvido TWS Bluetooth Sport",
    category: "Eletrônicos",
    price: 279.90,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    name: "Caixa de Som Bluetooth IPX7 Waterproof",
    category: "Eletrônicos",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    name: "Balança Bioimpedância Smart App",
    category: "Eletrônicos",
    price: 199.90,
    image: "images/images (6).jpg"
  },
  {
    id: 25,
    name: "Headset Gamer RGB Surround 7.1",
    category: "Eletrônicos",
    price: 399.90,
    image: "images/D_NQ_NP_863239-MLB110132091288_042026-O.webp"
  },

  // --- NUTRIÇÃO (5) ---
  {
    id: 26,
    name: "Whey Protein Isolado 900g",
    category: "Nutrição",
    price: 189.90,
    image: "images/71SMlbB-BaL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 27,
    name: "Creatina Monohidratada Pura 300g",
    category: "Nutrição",
    price: 99.90,
    image: "images/creatina-100-pura-300g-hardcore-4585424.webp"
  },
  {
    id: 28,
    name: "Pré-Treino Explosive Energy 300g",
    category: "Nutrição",
    price: 119.90,
    image: "images/images (7).jpg"
  },
  {
    id: 29,
    name: "Coqueteleira Dosadora 3 em 1",
    category: "Nutrição",
    price: 49.90,
    image: "images/br-11134207-820mg-mnjd3n61d53666.jpg"
  },
  {
    id: 30,
    name: "Barra de Proteína Protein Bar (Box 12un)",
    category: "Nutrição",
    price: 89.90,
    image: "images/images (8).jpg"
  }
];
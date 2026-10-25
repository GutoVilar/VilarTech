document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('vilar_cart')) || [];

  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const priceVal = document.getElementById('priceVal');
  const resetFiltersBtn = document.getElementById('resetFilters');

  const cartBtn = document.getElementById('cartBtn');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // --- LÓGICA DE ALTERNÂNCIA DE TEMA (MODO CLARO / ESCURO) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('vilar_theme') || 'dark';

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
      theme = 'light';
      themeToggleBtn.textContent = '☀️';
    } else {
      themeToggleBtn.textContent = '🌙';
    }
    
    localStorage.setItem('vilar_theme', theme);
  });

  // RENDERIZAR GRADE DE PRODUTOS
  const renderProducts = (productsToRender) => {
    productsGrid.innerHTML = '';
    if (productsToRender.length === 0) {
      productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px 0;">Nenhum produto encontrado com os filtros selecionados.</p>';
      return;
    }

    productsToRender.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h4 class="product-title">${product.name}</h4>
          <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar</button>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  };

  // FILTRAGEM COMBINADA (Busca, Categoria e Preço)
  const filterProducts = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const maxPrice = Number(priceFilter.value);

    priceVal.textContent = maxPrice;

    const filtered = productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
  };

  // EVENTOS DE FILTRO
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
  priceFilter.addEventListener('input', filterProducts);

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 1200;
    filterProducts();
  });

  // CARRINHO DE COMPRAS
  window.addToCart = (id) => {
    const product = productsData.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCart();
  };

  window.removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCart();
  };

  const updateCart = () => {
    localStorage.setItem('vilar_cart', JSON.stringify(cart));
    
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 20px 0;">Carrinho vazio.</p>';
      cartTotalPrice.textContent = 'R$ 0,00';
      return;
    }

    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
      const itemEl = document.createElement('div');
      itemEl.classList.add('cart-item');
      itemEl.innerHTML = `
        <div>
          <strong>${item.name}</strong><br>
          <small>${item.quantity}x R$ ${item.price.toFixed(2).replace('.', ',')}</small>
        </div>
        <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:var(--danger); cursor:pointer; font-weight:600;">Remover</button>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    cartTotalPrice.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  };

  cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
  closeCart.addEventListener('click', () => cartModal.classList.remove('open'));

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    alert('Compra finalizada com sucesso! Obrigado por testar a aplicação.');
    cart = [];
    updateCart();
    cartModal.classList.remove('open');
  });

  // INICIALIZAÇÃO
  renderProducts(productsData);
  updateCart();
});
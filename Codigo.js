const products = [
    { 
      id: 1, 
      name: "Laptop Dell XPS 13", 
      category: "Laptops", 
      price: 1500, 
      img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full", 
      rating: 4.7, 
      reviews: 128,
      description: "El Dell XPS 13 es un portátil ultradelgado con pantalla InfinityEdge, procesador Intel Core de 11ª generación, hasta 16GB de RAM y SSD de alta velocidad. Perfecto para profesionales y estudiantes que buscan rendimiento y portabilidad.",
      specs: [
        "Procesador: Intel Core i7-1165G7",
        "Memoria: 16GB LPDDR4x",
        "Almacenamiento: 512GB SSD NVMe",
        "Pantalla: 13.4\" FHD+ (1920 x 1200) InfinityEdge",
        "Batería: Hasta 12 horas de duración"
      ]
    },
    { 
      id: 2, 
      name: "Mouse Logitech G Pro X", 
      category: "Mouse", 
      price: 80, 
      img: "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png", 
      rating: 4.9, 
      reviews: 342,
      description: "El Logitech G Pro X Superlight es un mouse gaming ultraligero diseñado para esports. Con menos de 63 gramos de peso, sensor HERO 25K y tecnología LIGHTSPEED para conexión inalámbrica sin lag.",
      specs: [
        "Sensor: HERO 25K",
        "Peso: <63g",
        "Conexión: Inalámbrica LIGHTSPEED",
        "Botones programables: 5",
        "Duración de batería: Hasta 70 horas"
      ]
    },
    { 
      id: 3, 
      name: "Monitor LG UltraGear 27\"", 
      category: "Monitor", 
      price: 350, 
      img: "https://www.lg.com/us/images/monitors/md08003534/gallery/desktop-01.jpg", 
      rating: 4.5, 
      reviews: 89,
      description: "El LG UltraGear es un monitor gaming de 27 pulgadas con panel IPS, resolución QHD (2560x1440), frecuencia de actualización de 144Hz y tiempo de respuesta de 1ms. Compatible con NVIDIA G-SYNC y AMD FreeSync Premium.",
      specs: [
        "Tamaño: 27 pulgadas",
        "Panel: IPS",
        "Resolución: 2560x1440 (QHD)",
        "Frecuencia: 144Hz",
        "Tiempo de respuesta: 1ms",
        "HDR: HDR10"
      ]
    },
    { 
      id: 4, 
      name: "Teclado Corsair K70 RGB", 
      category: "Teclado", 
      price: 150, 
      img: "https://cwsmgmt.corsair.com/pdp/K70-RGB-PRO/Content/k70_rgb_pro_pdp_lightingcontrol_01.jpg", 
      rating: 4.6, 
      reviews: 215,
      description: "El Corsair K70 RGB es un teclado mecánico premium con switches Cherry MX, retroiluminación RGB por tecla, construcción de aluminio y controles multimedia dedicados. Incluye reposamuñecas desmontable.",
      specs: [
        "Switches: Cherry MX Red",
        "Formato: Completo con teclado numérico",
        "Retroiluminación: RGB por tecla",
        "Material: Aluminio cepillado",
        "Características: Controles multimedia, USB passthrough"
      ]
    },
    { 
      id: 5, 
      name: "CPU AMD Ryzen 7 5800X", 
      category: "CPU", 
      price: 320, 
      img: "https://www.amd.com/system/files/2020-10/616656-amd-ryzen-7-5000-series-PIB-1260x709_0.png", 
      rating: 4.8, 
      reviews: 176,
      description: "El AMD Ryzen 7 5800X es un procesador de 8 núcleos y 16 hilos basado en la arquitectura Zen 3. Con velocidades de hasta 4.7GHz, es ideal para gaming y creación de contenido. Soporta PCIe 4.0 y viene desbloqueado para overclocking.",
      specs: [
        "Núcleos/Hilos: 8/16",
        "Frecuencia base: 3.8GHz",
        "Frecuencia turbo: Hasta 4.7GHz",
        "Caché L3: 32MB",
        "TDP: 105W",
        "Socket: AM4"
      ]
    },
    { 
      id: 6, 
      name: "Laptop HP Spectre x360", 
      category: "Laptops", 
      price: 1400, 
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08037217.png", 
      rating: 4.4, 
      reviews: 98,
      description: "El HP Spectre x360 es un portátil convertible premium con bisagra de 360°, pantalla táctil 4K OLED, procesador Intel Core i7, y hasta 16GB de RAM. Su diseño elegante en aluminio incluye características de seguridad avanzadas.",
      specs: [
        "Procesador: Intel Core i7-1165G7",
        "Memoria: 16GB DDR4",
        "Almacenamiento: 1TB SSD PCIe NVMe",
        "Pantalla: 13.3\" 4K OLED táctil",
        "Batería: Hasta 10 horas",
        "Características: Lector de huellas, cámara IR"
      ]
    },
  ];

  // Estructura de carrito mejorada con cantidades
  const cartItems = [];
  const favorites = new Set();

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }

  function toggleCart() {
    const cartEl = document.getElementById('cart');
    const cartOverlay = document.getElementById('cart-overlay');
    cartEl.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    updateCartDisplay();
  }
  
  function closeCart() {
    const cartEl = document.getElementById('cart');
    const cartOverlay = document.getElementById('cart-overlay');
    cartEl.classList.remove('open');
    cartOverlay.classList.remove('open');
  }

  function addToCart(product, event) {
    // Detener la propagación del evento para evitar la redirección
    if (event) {
      event.stopPropagation();
    }
    
    // Buscar si el producto ya está en el carrito
    const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);
    
    if (existingItemIndex !== -1) {
      // Si ya existe, incrementar la cantidad
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Si no existe, añadirlo con cantidad 1
      cartItems.push({
        product: product,
        quantity: 1
      });
    }
    
    updateCartDisplay();
    
    // Mostrar confirmación visual
    showAddToCartConfirmation();
  }
  
  function showAddToCartConfirmation() {
    // Crear elemento de confirmación
    const confirmation = document.createElement('div');
    confirmation.style.position = 'fixed';
    confirmation.style.bottom = '20px';
    confirmation.style.right = '20px';
    confirmation.style.backgroundColor = '#4CAF50';
    confirmation.style.color = 'white';
    confirmation.style.padding = '10px 20px';
    confirmation.style.borderRadius = '8px';
    confirmation.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    confirmation.style.zIndex = '9999';
    confirmation.style.display = 'flex';
    confirmation.style.alignItems = 'center';
    confirmation.style.transition = 'opacity 0.5s';
    confirmation.innerHTML = '<i class="fas fa-check-circle" style="margin-right: 10px;"></i> Producto añadido al carrito';
    
    document.body.appendChild(confirmation);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
      confirmation.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(confirmation);
      }, 500);
    }, 3000);
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
  }
  
  function updateItemQuantity(index, newQuantity) {
    // Asegurarse de que la cantidad sea al menos 1
    newQuantity = Math.max(1, newQuantity);
    cartItems[index].quantity = newQuantity;
    updateCartDisplay();
  }

  function toggleFavorite(productId, event) {
    // Detener la propagación del evento para evitar la redirección
    if (event) {
      event.stopPropagation();
    }
    
    const heartIcon = document.getElementById(`heart-${productId}`);
    
    if (favorites.has(productId)) {
      favorites.delete(productId);
      heartIcon.classList.remove('active');
    } else {
      favorites.add(productId);
      heartIcon.classList.add('active');
      
      // Añadir al carrito cuando se marca como favorito
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
      }
    }
  }

  function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    // Estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
    
    // Media estrella si es necesario
    if (halfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
  }

  function simulatePurchase() {
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    
    // Calcular el total
    const total = calculateTotal();
    
    alert(`¡Compra realizada con éxito! Total: $${total}`);
    cartItems.length = 0;
    updateCartDisplay();
    closeCart();
  }
  
  function calculateTotal() {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  
  function calculateSavings() {
    // Calcular un descuento ficticio (10% del total)
    const total = calculateTotal();
    return Math.round(total * 0.1);
  }

  function goToProductDetail(productId) {
    // Guardar el producto seleccionado en localStorage para recuperarlo en la página de detalle
    const product = products.find(p => p.id === productId);
    if (product) {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      // Redireccionar a la página de detalle
      window.location.href = 'producto-detalle.html';
    }
  }
  
  function getRelatedProducts(currentProductIds) {
    // Filtrar productos que no están en el carrito
    return products
      .filter(product => !currentProductIds.includes(product.id))
      .slice(0, 4); // Limitar a 4 productos relacionados
  }

  function updateCartDisplay() {
    const cartContent = document.getElementById('cart-content');
    const cartCount = document.getElementById('cart-count');
    
    // Actualizar contador del carrito (suma de cantidades)
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Si el carrito está vacío
    if (cartItems.length === 0) {
      cartContent.innerHTML = `
        <div class="cart-empty">
          <i class="fas fa-shopping-cart"></i>
          <p>Tu carrito está vacío</p>
          <button onclick="closeCart()">Continuar comprando</button>
        </div>
      `;
      return;
    }
    
    // Calcular el total
    const total = calculateTotal();
    const savings = calculateSavings();
    
    // IDs de productos en el carrito
    const cartProductIds = cartItems.map(item => item.product.id);
    
    // Obtener productos relacionados
    const relatedProducts = getRelatedProducts(cartProductIds);
    
    cartContent.innerHTML = `
      <div class="cart-items">
        ${cartItems.map((item, index) => `
          <div class="cart-item">
            <div class="cart-item-image">
              <img src="${item.product.img}" alt="${item.product.name}" />
            </div>
            <div class="cart-item-details">
              <div class="cart-item-title">${item.product.name}</div>
              <div class="cart-item-price">$${item.product.price}</div>
              <div class="cart-item-actions">
                <div class="quantity-selector">
                  <button class="quantity-btn" onclick="updateItemQuantity(${index}, ${item.quantity - 1})">-</button>
                  <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateItemQuantity(${index}, parseInt(this.value))" />
                  <button class="quantity-btn" onclick="updateItemQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                  <i class="fas fa-trash-alt"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${relatedProducts.length > 0 ? `
        <div class="related-products-cart">
          <h3>Productos que te pueden interesar</h3>
          <div class="related-products-grid">
            ${relatedProducts.map(product => `
              <div class="related-product-item">
                <div class="related-product-image">
                  <img src="${product.img}" alt="${product.name}" />
                </div>
                <div class="related-product-title">${product.name}</div>
                <div class="related-product-price">$${product.price}</div>
                <button class="add-related-btn" onclick="addToCart(${JSON.stringify(product)})">Agregar</button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="cart-footer">
        <div class="cart-subtotal">
          <span>Subtotal (${totalItems} productos):</span>
          <span>$${total}</span>
        </div>
        ${savings > 0 ? `
          <div class="cart-savings">
            <i class="fas fa-tag"></i> Ahorras: $${savings}
          </div>
        ` : ''}
        <button class="checkout-btn" onclick="simulatePurchase()">
          <i class="fas fa-lock"></i> Proceder al pago
        </button>
      </div>
    `;
  }

  function renderProducts(filtered = []) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const items = filtered.length ? filtered : products;
    items.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.onclick = () => goToProductDetail(product.id);
      div.innerHTML = `
        <div class="category-badge">${product.category}</div>
        <div class="product-img-container">
          <img src="${product.img}" alt="${product.name}" />
        </div>
        <div class="product-content">
          <div class="product-header">
            <h3>${product.name}</h3>
            <i id="heart-${product.id}" class="fas fa-heart heart-icon ${favorites.has(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)"></i>
          </div>
          <div class="product-rating">
            <div class="stars">${getStarRating(product.rating)}</div>
            <div class="reviews">(${product.reviews} reseñas)</div>
          </div>
          <div class="product-price">$${product.price}</div>
          <div class="product-actions">
            <button class="add-to-cart" onclick='addToCart(${JSON.stringify(product)}, event)'>
              <i class="fas fa-shopping-cart"></i> Agregar al carrito
            </button>
          </div>
        </div>
      `;
      productList.appendChild(div);
    });
  }

  function filterProducts(category) {
    const filtered = products.filter(product => product.category === category);
    renderProducts(filtered);
  }

  renderProducts();
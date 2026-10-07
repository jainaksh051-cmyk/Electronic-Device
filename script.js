/**
 * ============================================================================
 * ElectroMart - Next-Gen Technology E-Commerce Store
 * Vanilla JavaScript Application Logic
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Fallback Image Placeholder (Safe Offline / Broken Image Fallback)
     -------------------------------------------------------------------------- */
  const SVG_FALLBACK_PLACEHOLDER =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect fill="%23151f32" width="600" height="600"/><text fill="%2306b6d4" font-family="sans-serif" font-size="28" font-weight="bold" x="50%25" y="48%25" text-anchor="middle">ElectroMart</text><text fill="%2394a3b8" font-family="sans-serif" font-size="18" x="50%25" y="55%25" text-anchor="middle">Premium Tech Gadget</text></svg>';

  /* --------------------------------------------------------------------------
     2. Product Catalog Data (16 Flagship Devices across 8 Categories)
     -------------------------------------------------------------------------- */
  const PRODUCTS = [
    {
      id: 'iphone-17-pro',
      name: 'iPhone 17 Pro Max 256GB',
      category: 'Smartphones',
      price: 1199.0,
      oldPrice: 1399.0,
      discount: 14,
      rating: 4.9,
      reviews: 1420,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered with Aerospace Grade 5 Titanium, next-generation 3nm Neural Silicon, 48MP Periscope Telephoto Lens, and 120Hz ProMotion XDR display.',
      specs: ['A19 Pro Neural Chip', '256GB NVMe', '6.7" Super Retina XDR', 'USB-C Thunderbolt', 'Titanium Frame']
    },
    {
      id: 'samsung-s26-ultra',
      name: 'Samsung Galaxy S26 Ultra 512GB',
      category: 'Smartphones',
      price: 1299.0,
      oldPrice: 1449.0,
      discount: 10,
      rating: 4.8,
      reviews: 980,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
      description: 'The pinnacle of Android productivity. Features integrated S-Pen stylus, 200MP Quad Camera with AI Zoom, Snapdragon 8 Gen 4, and 5000mAh battery.',
      specs: ['Snapdragon 8 Gen 4', '512GB Storage', '200MP Quad Camera', 'Built-in S-Pen', '6.8" Dynamic AMOLED 2X']
    },
    {
      id: 'macbook-pro-16',
      name: 'MacBook Pro 16" M4 Max',
      category: 'Laptops',
      price: 2499.0,
      oldPrice: 2799.0,
      discount: 11,
      rating: 5.0,
      reviews: 640,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      description: 'Uncompromising workstation performance. Featuring 16-core CPU, 40-core GPU, Liquid Retina XDR with 1600 nits peak brightness, and up to 22 hours of battery.',
      specs: ['M4 Max 16-Core', '36GB Unified RAM', '1TB SSD Storage', '16.2" Liquid Retina XDR', 'MagSafe 3 & HDMI']
    },
    {
      id: 'dell-xps-16',
      name: 'Dell XPS 16 OLED Laptop',
      category: 'Laptops',
      price: 2099.0,
      oldPrice: 2399.0,
      discount: 13,
      rating: 4.7,
      reviews: 510,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      description: 'CNC machined aluminum chassis with seamless glass touch pad, capacitive touch function keys, and stunning 4K OLED InfinityEdge touch screen.',
      specs: ['Intel Core Ultra 9', '32GB LPDDR5x', '1TB PCIe 4.0 SSD', 'RTX 4070 8GB', '4K OLED Touch']
    },
    {
      id: 'sony-wh1000xm6',
      name: 'Sony WH-1000XM6 Wireless ANC',
      category: 'Headphones',
      price: 399.0,
      oldPrice: 479.0,
      discount: 17,
      rating: 4.9,
      reviews: 2150,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      description: 'Industry-leading Active Noise Cancellation powered by dual HD noise cancelling processors, LDAC Hi-Res audio, and 40-hour extended battery life.',
      specs: ['Dual ANC Chipset', 'LDAC Hi-Res Audio', '40h Battery Life', 'Multipoint Bluetooth 5.4', 'Voice Pickup AI']
    },
    {
      id: 'airpods-pro-2',
      name: 'Apple AirPods Pro (2nd Gen) USB-C',
      category: 'Headphones',
      price: 199.0,
      oldPrice: 249.0,
      discount: 20,
      rating: 4.8,
      reviews: 3800,
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
      description: 'Features Apple H2 chip delivering 2x more noise cancellation, Adaptive Audio, Personalized Spatial Audio with dynamic head tracking, and MagSafe USB-C case.',
      specs: ['Apple H2 Chip', 'Adaptive Audio', 'Personalized Spatial Audio', 'IP54 Dust & Water', 'MagSafe USB-C Case']
    },
    {
      id: 'apple-watch-ultra-2',
      name: 'Apple Watch Ultra 2 Titanium GPS',
      category: 'Smart Watches',
      price: 749.0,
      oldPrice: 799.0,
      discount: 6,
      rating: 4.9,
      reviews: 1120,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      description: 'Rugged 49mm titanium case, precision dual-frequency GPS, 3000 nits display, 100m water resistance, and up to 72 hours of battery in Low Power Mode.',
      specs: ['49mm Titanium Case', '3000 Nits Retina', 'Dual-Frequency GPS', '100m Water Resistant', 'S9 SiP Double Tap']
    },
    {
      id: 'galaxy-watch-6-pro',
      name: 'Samsung Galaxy Watch 6 Classic Pro',
      category: 'Smart Watches',
      price: 349.0,
      oldPrice: 429.0,
      discount: 19,
      rating: 4.7,
      reviews: 740,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      description: 'Rotating physical bezel, Sapphire Crystal glass, comprehensive ECG & body composition sensor, advanced sleep coaching, and Wear OS 5 ecosystem.',
      specs: ['Physical Rotating Bezel', 'BioActive Sensor', 'Sapphire Glass', 'Wear OS Powered', 'Sleep Coaching AI']
    },
    {
      id: 'ipad-pro-13-m4',
      name: 'iPad Pro 13" M4 Ultra Retina XDR',
      category: 'Tablets',
      price: 1299.0,
      oldPrice: 1399.0,
      discount: 7,
      rating: 4.9,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      description: 'Incredibly thin design packing revolutionary Tandem OLED Ultra Retina XDR display, breakthrough M4 performance, and Apple Pencil Pro support.',
      specs: ['Apple M4 Chip', 'Tandem OLED Display', 'ProRes 4K Video', 'Thunderbolt Port', 'Apple Pencil Pro Ready']
    },
    {
      id: 'galaxy-tab-s9',
      name: 'Samsung Galaxy Tab S9 Ultra 14.6"',
      category: 'Tablets',
      price: 999.0,
      oldPrice: 1199.0,
      discount: 17,
      rating: 4.7,
      reviews: 430,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      description: 'Expansive 14.6" Dynamic AMOLED 2X display, IP68 water resistance for tablet and included S-Pen, quad stereo speakers tuned by AKG, and Samsung DeX mode.',
      specs: ['14.6" Dynamic AMOLED', 'Snapdragon 8 Gen 2', 'IP68 Certified', 'Included S-Pen', 'Samsung DeX Desktop']
    },
    {
      id: 'canon-eos-r6',
      name: 'Canon EOS R6 Mark II Mirrorless Body',
      category: 'Cameras',
      price: 2299.0,
      oldPrice: 2499.0,
      discount: 8,
      rating: 4.9,
      reviews: 320,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      description: 'Full-frame 24.2MP CMOS sensor, 40 fps electronic shutter, 4K60p 10-bit internal video recording, Dual Pixel CMOS AF II with Deep Learning tracking.',
      specs: ['24.2MP Full-Frame', '40 fps Continuous', '4K 60p Uncropped', '8-Stop In-Body IS', 'Dual SD Card Slots']
    },
    {
      id: 'sony-alpha-a7iv',
      name: 'Sony Alpha A7 IV Full-Frame Hybrid',
      category: 'Cameras',
      price: 2399.0,
      oldPrice: 2599.0,
      discount: 8,
      rating: 4.8,
      reviews: 480,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      description: '33MP Exmor R back-illuminated sensor, BIONZ XR engine, Real-time Eye AF for humans/animals/birds, 4K 60p 10-bit 4:2:2 recording, and S-Cinetone colors.',
      specs: ['33MP Exmor R CMOS', 'BIONZ XR Processor', '4K 60p 10-Bit', '759 AF Phase Points', 'Vari-Angle LCD Screen']
    },
    {
      id: 'ps5-pro',
      name: 'PlayStation 5 Pro Console 2TB',
      category: 'Gaming',
      price: 699.0,
      oldPrice: 799.0,
      discount: 13,
      rating: 4.9,
      reviews: 2800,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      description: 'PlayStation Spectral Super Resolution (PSSR) AI upscaling, upgraded ray tracing architecture, 2TB SSD, and 60fps high fidelity gaming at 4K resolution.',
      specs: ['2TB High-Speed SSD', 'PSSR AI Upscaling', 'Advanced Ray Tracing', 'DualSense Haptics', 'Wi-Fi 7 Connectivity']
    },
    {
      id: 'logitech-superlight-2',
      name: 'Logitech G Pro X Superlight 2 Mouse',
      category: 'Gaming',
      price: 149.0,
      oldPrice: 169.0,
      discount: 12,
      rating: 4.8,
      reviews: 1640,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
      description: 'Sub-60g ultra lightweight esports mouse equipped with HERO 2 sensor (32,000 DPI), LIGHTFORCE optical-mechanical hybrid switches, and 95h battery life.',
      specs: ['60g Ultra-Lightweight', 'HERO 2 32K Sensor', 'LIGHTFORCE Switches', 'LIGHTSPEED Wireless', '95h Battery Life']
    },
    {
      id: 'keychron-q1-pro',
      name: 'Keychron Q1 Pro Wireless Custom Keyboard',
      category: 'Accessories',
      price: 199.0,
      oldPrice: 229.0,
      discount: 13,
      rating: 4.8,
      reviews: 920,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      description: 'Fully aluminum CNC body with gasket mount design, QMK/VIA programmable keys, hot-swappable mechanical switches, and Bluetooth 5.1 multi-pairing.',
      specs: ['CNC Aluminum Chassis', 'Double Gasket Mount', 'QMK/VIA Support', 'Hot-Swappable RGB', 'Mac & Windows Keys']
    },
    {
      id: 'anker-prime-powerbank',
      name: 'Anker Prime 27,650mAh 250W Power Bank',
      category: 'Accessories',
      price: 139.0,
      oldPrice: 179.0,
      discount: 22,
      rating: 4.9,
      reviews: 1510,
      image: 'https://images.unsplash.com/photo-1609592426508-cc02150e41ac?auto=format&fit=crop&w=800&q=80',
      description: 'Massive 27,650mAh capacity with 250W multi-port USB-C fast charging. Smart digital display shows real-time wattage, battery percentage, and recharge speed.',
      specs: ['27,650mAh (99.54Wh)', '250W Max Output', 'Dual USB-C 140W', 'Smart LCD Display', 'Airline Approved']
    }
  ];

  /* Flash Deals Dataset */
  const FLASH_DEALS = [
    {
      id: 'deal-sony-anc',
      productId: 'sony-wh1000xm6',
      badge: 'SAVE 17%',
      title: 'Sony WH-1000XM6 ANC Wireless',
      price: 399.0,
      oldPrice: 479.0,
      claimed: 84,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'deal-ps5-pro',
      productId: 'ps5-pro',
      badge: 'HOT DEAL',
      title: 'Sony PlayStation 5 Pro Console',
      price: 699.0,
      oldPrice: 799.0,
      claimed: 92,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'deal-airpods-pro',
      productId: 'airpods-pro-2',
      badge: 'SAVE 20%',
      title: 'Apple AirPods Pro 2nd Gen USB-C',
      price: 199.0,
      oldPrice: 249.0,
      claimed: 76,
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80'
    }
  ];

  /* --------------------------------------------------------------------------
     3. State Management (Cart, Wishlist, Filter, Coupons)
     -------------------------------------------------------------------------- */
  const STORAGE_KEY_CART = 'electromart_cart_v1';
  const STORAGE_KEY_WISHLIST = 'electromart_wishlist_v1';

  let cart = [];
  let wishlist = [];
  let currentCategory = 'All';
  let currentSearchQuery = '';
  let currentSort = 'featured';
  let activeCoupon = null; // { code: 'TECH10', discountPercent: 10 }

  // Load from LocalStorage
  function loadStoredState() {
    try {
      const storedCart = localStorage.getItem(STORAGE_KEY_CART);
      if (storedCart) cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }

    try {
      const storedWishlist = localStorage.getItem(STORAGE_KEY_WISHLIST);
      if (storedWishlist) wishlist = JSON.parse(storedWishlist);
    } catch (e) {
      wishlist = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    } catch (e) {
      console.warn('Unable to write cart to localStorage', e);
    }
    updateCartUI();
  }

  function saveWishlist() {
    try {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Unable to write wishlist to localStorage', e);
    }
    updateWishlistUI();
    renderProducts(); // Re-render product cards so heart buttons sync
  }

  /* --------------------------------------------------------------------------
     4. Toast Notification Engine
     -------------------------------------------------------------------------- */
  function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `
      <div class="toast-icon"><i class="${iconClass}"></i></div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-desc">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-leave');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3200);
  }

  /* --------------------------------------------------------------------------
     5. Shopping Cart Operations
     -------------------------------------------------------------------------- */
  function addToCart(productId, quantity = 1, showFeedback = true) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex((item) => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    saveCart();

    if (showFeedback) {
      showToast('Added to Cart', `${product.name} (${quantity}) added to your bag.`, 'success');
      openCartDrawer();
    }
  }

  function updateCartQuantity(productId, newQty) {
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex === -1) return;

    if (newQty <= 0) {
      const removedItem = cart[itemIndex];
      cart.splice(itemIndex, 1);
      showToast('Item Removed', `${removedItem.name} was removed from cart.`, 'info');
    } else {
      cart[itemIndex].quantity = newQty;
    }
    saveCart();
  }

  function removeFromCart(productId) {
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex > -1) {
      const removedItem = cart[itemIndex];
      cart.splice(itemIndex, 1);
      saveCart();
      showToast('Item Removed', `${removedItem.name} removed from your bag.`, 'info');
    }
  }

  function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    activeCoupon = null;
    const codeInput = document.getElementById('couponCodeInput');
    if (codeInput) codeInput.value = '';
    const feedback = document.getElementById('couponFeedback');
    if (feedback) feedback.textContent = '';
    saveCart();
    showToast('Cart Cleared', 'All items were removed from your shopping bag.', 'info');
  }

  function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const drawerCount = document.getElementById('cartDrawerCount');
    const itemsList = document.getElementById('cartItemsList');
    const emptyView = document.getElementById('cartEmptyView');
    const footerView = document.getElementById('cartDrawerFooter');
    const shippingBar = document.getElementById('cartShippingNotice');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountLine = document.getElementById('discountSummaryLine');
    const discountEl = document.getElementById('cartDiscount');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');
    const progressFill = document.getElementById('shippingProgressFill');
    const shippingText = document.getElementById('shippingBarText');

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
    if (drawerCount) drawerCount.textContent = `${totalCount} ${totalCount === 1 ? 'Item' : 'Items'}`;

    if (cart.length === 0) {
      if (emptyView) emptyView.style.display = 'flex';
      if (itemsList) itemsList.style.display = 'none';
      if (footerView) footerView.style.display = 'none';
      if (shippingBar) shippingBar.style.display = 'none';
      return;
    }

    if (emptyView) emptyView.style.display = 'none';
    if (itemsList) itemsList.style.display = 'flex';
    if (footerView) footerView.style.display = 'block';
    if (shippingBar) shippingBar.style.display = 'block';

    // Render Items
    if (itemsList) {
      itemsList.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
          </div>
          <div class="cart-item-details">
            <h5 class="cart-item-title" title="${item.name}">${item.name}</h5>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="qty-control">
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', ${item.quantity - 1})" aria-label="Decrease quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', ${item.quantity + 1})" aria-label="Increase quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.removeCartItem('${item.id}')" title="Remove item" aria-label="Remove ${item.name}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `
        )
        .join('');
    }

    // Calculate Financials
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const freeShippingThreshold = 99.0;
    const isFreeShipping = subtotal >= freeShippingThreshold;

    if (progressFill && shippingText) {
      if (isFreeShipping) {
        progressFill.style.width = '100%';
        shippingText.innerHTML = '<i class="fa-solid fa-circle-check text-accent"></i> Congratulations! You unlocked <strong>FREE Express Shipping</strong>!';
      } else {
        const remaining = (freeShippingThreshold - subtotal).toFixed(2);
        const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        progressFill.style.width = `${progressPercent}%`;
        shippingText.innerHTML = `Add <strong>$${remaining}</strong> more to unlock <strong>FREE Express Shipping</strong>!`;
      }
    }

    let discountAmount = 0;
    if (activeCoupon) {
      discountAmount = (subtotal * activeCoupon.discountPercent) / 100;
      if (discountLine) discountLine.style.display = 'flex';
      if (discountEl) discountEl.textContent = `- $${discountAmount.toFixed(2)}`;
    } else {
      if (discountLine) discountLine.style.display = 'none';
    }

    const shippingCost = isFreeShipping ? 0 : 15.0;
    if (shippingEl) {
      shippingEl.textContent = isFreeShipping ? 'FREE ($0.00)' : '$15.00';
    }

    const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
  }

  /* Coupon Code Handler */
  function applyCouponCode() {
    const input = document.getElementById('couponCodeInput');
    const feedback = document.getElementById('couponFeedback');
    if (!input || !feedback) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
      feedback.className = 'coupon-feedback error';
      feedback.textContent = 'Please enter a coupon code.';
      return;
    }

    if (code === 'TECH10') {
      activeCoupon = { code: 'TECH10', discountPercent: 10 };
      feedback.className = 'coupon-feedback success';
      feedback.textContent = 'Coupon applied! 10% discount subtracted.';
      showToast('Promo Code Applied', '10% promotional discount applied.', 'success');
      saveCart();
    } else if (code === 'VIP20') {
      activeCoupon = { code: 'VIP20', discountPercent: 20 };
      feedback.className = 'coupon-feedback success';
      feedback.textContent = 'VIP Coupon applied! 20% discount subtracted.';
      showToast('VIP Code Applied', '20% VIP tech discount applied.', 'success');
      saveCart();
    } else {
      feedback.className = 'coupon-feedback error';
      feedback.textContent = 'Invalid promo code. Try "TECH10" for 10% off.';
    }
  }

  /* --------------------------------------------------------------------------
     6. Wishlist Operations
     -------------------------------------------------------------------------- */
  function toggleWishlist(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast('Removed from Wishlist', `${product.name} removed from your wishlist.`, 'info');
    } else {
      wishlist.push(productId);
      showToast('Saved to Wishlist', `${product.name} added to your wishlist.`, 'success');
    }

    saveWishlist();
  }

  function updateWishlistUI() {
    const wishlistBadge = document.getElementById('wishlistBadge');
    const drawerCount = document.getElementById('wishlistDrawerCount');
    const itemsList = document.getElementById('wishlistItemsList');
    const emptyView = document.getElementById('wishlistEmptyView');

    if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
    if (drawerCount) drawerCount.textContent = `${wishlist.length} ${wishlist.length === 1 ? 'Item' : 'Items'}`;

    if (wishlist.length === 0) {
      if (emptyView) emptyView.style.display = 'flex';
      if (itemsList) itemsList.style.display = 'none';
      return;
    }

    if (emptyView) emptyView.style.display = 'none';
    if (itemsList) itemsList.style.display = 'flex';

    const favoritedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

    if (itemsList) {
      itemsList.innerHTML = favoritedProducts
        .map(
          (prod) => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${prod.image}" alt="${prod.name}" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
          </div>
          <div class="cart-item-details">
            <h5 class="cart-item-title">${prod.name}</h5>
            <div class="cart-item-price">$${prod.price.toFixed(2)}</div>
            <button class="btn btn-primary btn-sm" onclick="window.moveWishlistToCart('${prod.id}')" style="margin-top: 4px;">
              <i class="fa-solid fa-cart-plus"></i> Move to Cart
            </button>
          </div>
          <button class="cart-item-remove" onclick="window.toggleWishlist('${prod.id}')" title="Remove from wishlist" aria-label="Remove ${prod.name}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `
        )
        .join('');
    }
  }

  function moveWishlistToCart(productId) {
    addToCart(productId, 1, true);
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      saveWishlist();
    }
  }

  /* --------------------------------------------------------------------------
     7. Render Featured Products Catalog
     -------------------------------------------------------------------------- */
  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const emptyState = document.getElementById('emptyState');
    const activeBadge = document.getElementById('activeFilterBadge');
    const activeFilterName = document.getElementById('activeFilterName');

    if (!grid) return;

    // Filter by Category & Search Keyword
    let filtered = PRODUCTS.filter((item) => {
      const matchesCategory = currentCategory === 'All' || item.category === currentCategory;
      const matchesSearch =
        currentSearchQuery === '' ||
        item.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(currentSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'discount') {
      filtered.sort((a, b) => b.discount - a.discount);
    }

    // Results info
    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'device' : 'devices'}`;
    }

    if (activeBadge && activeFilterName) {
      if (currentCategory !== 'All') {
        activeBadge.style.display = 'flex';
        activeFilterName.textContent = currentCategory;
      } else {
        activeBadge.style.display = 'none';
      }
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered
      .map((p) => {
        const isFavorited = wishlist.includes(p.id);
        const starFullCount = Math.floor(p.rating);
        const hasHalfStar = p.rating % 1 >= 0.5;
        let starsHtml = '';
        for (let i = 0; i < starFullCount; i++) starsHtml += '<i class="fa-solid fa-star"></i>';
        if (hasHalfStar) starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';

        return `
        <article class="product-card" data-id="${p.id}">
          <div class="product-thumb-wrap">
            <span class="card-badge-discount">-${p.discount}%</span>
            <div class="card-actions-overlay">
              <button class="card-action-btn ${isFavorited ? 'active' : ''}" 
                      onclick="window.toggleWishlist('${p.id}')" 
                      title="${isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}"
                      aria-label="Wishlist ${p.name}">
                <i class="${isFavorited ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
              <button class="card-action-btn" 
                      onclick="window.openQuickView('${p.id}')" 
                      title="Quick View"
                      aria-label="Quick view ${p.name}">
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
            <img src="${p.image}" alt="${p.name}" class="product-thumb" loading="lazy" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
          </div>

          <div class="product-content">
            <span class="product-cat-tag">${p.category}</span>
            <h3 class="product-title" onclick="window.openQuickView('${p.id}')" role="button" tabindex="0">${p.name}</h3>

            <div class="product-rating">
              <div class="rating-stars">${starsHtml}</div>
              <span class="rating-score">${p.rating.toFixed(1)}</span>
              <span class="rating-count">(${p.reviews})</span>
            </div>

            <div class="product-price-row">
              <span class="product-cur-price">$${p.price.toFixed(2)}</span>
              <span class="product-old-price">$${p.oldPrice.toFixed(2)}</span>
            </div>

            <button class="btn-add-cart" onclick="window.addToCart('${p.id}', 1, true)">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </article>
      `;
      })
      .join('');
  }

  /* --------------------------------------------------------------------------
     8. Render Flash Deals
     -------------------------------------------------------------------------- */
  function renderDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;

    dealsGrid.innerHTML = FLASH_DEALS.map((deal) => {
      return `
        <div class="deal-card">
          <span class="deal-badge-save">${deal.badge}</span>
          <div class="deal-img-box">
            <img src="${deal.image}" alt="${deal.title}" loading="lazy" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
          </div>
          <div class="deal-info">
            <h4>${deal.title}</h4>
            <div class="deal-prices">
              <span class="deal-price-cur">$${deal.price.toFixed(2)}</span>
              <span class="deal-price-old">$${deal.oldPrice.toFixed(2)}</span>
            </div>
            <div class="deal-stock-meta">
              <div class="stock-text">
                <span>Sold: ${deal.claimed}%</span>
                <span>Limited Stock</span>
              </div>
              <div class="stock-bar">
                <div class="stock-bar-fill" style="width: ${deal.claimed}%;"></div>
              </div>
            </div>
            <button class="btn btn-deal-buy" onclick="window.addToCart('${deal.productId}', 1, true)">
              <i class="fa-solid fa-bolt"></i> Claim Deal Now
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  /* --------------------------------------------------------------------------
     9. Live Deals Countdown Timer (Ticking Every Second)
     -------------------------------------------------------------------------- */
  function initCountdownTimer() {
    const hoursEl = document.getElementById('countdownHours');
    const minutesEl = document.getElementById('countdownMinutes');
    const secondsEl = document.getElementById('countdownSeconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    // Set end of today or rolling window
    let totalSeconds = 8 * 3600 + 45 * 60 + 20; // 8h 45m 20s

    function tick() {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600; // Reset to 24h
      } else {
        totalSeconds--;
      }

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
  }

  /* --------------------------------------------------------------------------
     10. Quick View Modal Engine
     -------------------------------------------------------------------------- */
  let currentModalQty = 1;
  let activeModalProductId = null;

  function openQuickView(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    activeModalProductId = product.id;
    currentModalQty = 1;

    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!modal || !content) return;

    const starFullCount = Math.floor(product.rating);
    let starsHtml = '';
    for (let i = 0; i < starFullCount; i++) starsHtml += '<i class="fa-solid fa-star"></i>';
    if (product.rating % 1 >= 0.5) starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';

    const isFav = wishlist.includes(product.id);

    const specsChips = product.specs
      .map((spec) => `<span class="spec-chip"><i class="fa-solid fa-check text-accent"></i> ${spec}</span>`)
      .join('');

    content.innerHTML = `
      <div class="qv-img-column">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
      </div>
      <div class="qv-details">
        <span class="qv-category">${product.category}</span>
        <h2 class="qv-title" id="modalProductName">${product.name}</h2>

        <div class="qv-rating-row">
          <div class="rating-stars">${starsHtml}</div>
          <span class="rating-score">${product.rating.toFixed(1)} / 5.0</span>
          <span class="rating-count">(${product.reviews} customer reviews)</span>
        </div>

        <div class="qv-price-row">
          <span class="qv-cur-price">$${product.price.toFixed(2)}</span>
          <span class="qv-old-price">$${product.oldPrice.toFixed(2)}</span>
          <span class="qv-discount-pill">Save ${product.discount}%</span>
        </div>

        <p class="qv-desc">${product.description}</p>

        <div class="qv-specs-chips">
          ${specsChips}
        </div>

        <div class="qv-actions-row">
          <div class="qv-qty-box">
            <button onclick="window.changeModalQty(-1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
            <span id="qvQtyDisplay">1</span>
            <button onclick="window.changeModalQty(1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
          </div>

          <button class="btn btn-primary qv-btn-cart" onclick="window.addModalProductToCart()">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>

          <button class="icon-btn ${isFav ? 'active' : ''}" onclick="window.toggleWishlist('${product.id}')" title="Wishlist" aria-label="Wishlist">
            <i class="${isFav ? 'fa-solid text-rose' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      activeModalProductId = null;
    }
  }

  function changeModalQty(delta) {
    currentModalQty = Math.max(1, currentModalQty + delta);
    const display = document.getElementById('qvQtyDisplay');
    if (display) display.textContent = currentModalQty;
  }

  function addModalProductToCart() {
    if (!activeModalProductId) return;
    addToCart(activeModalProductId, currentModalQty, true);
    closeQuickView();
  }

  /* --------------------------------------------------------------------------
     11. Checkout Simulated Flow
     -------------------------------------------------------------------------- */
  function proceedToCheckout() {
    if (cart.length === 0) {
      showToast('Cart is Empty', 'Please add products before checking out.', 'error');
      return;
    }

    const totalEl = document.getElementById('cartTotal');
    const orderSum = totalEl ? totalEl.textContent : '$0.00';

    closeCartDrawer();

    const checkoutModal = document.getElementById('checkoutModal');
    const orderNum = document.getElementById('checkoutOrderNumber');
    const summaryBox = document.getElementById('checkoutOrderSummary');

    if (orderNum) {
      orderNum.textContent = `EM-${Math.floor(10000 + Math.random() * 90000)}`;
    }

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span>Items Ordered:</span> <strong>${cart.reduce((a, b) => a + b.quantity, 0)} units</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span>Delivery Method:</span> <strong>Express Priority Courier</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.05rem; font-weight:800; color:var(--cyan-primary);">
          <span>Total Paid:</span> <strong>${orderSum}</strong>
        </div>
      `;
    }

    if (checkoutModal) {
      checkoutModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    // Clear cart after checkout
    cart = [];
    activeCoupon = null;
    saveCart();
  }

  function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
      checkoutModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* --------------------------------------------------------------------------
     12. Drawers and Modal Controls
     -------------------------------------------------------------------------- */
  function openCartDrawer() {
    closeWishlistDrawer();
    closeMobileNav();
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function openWishlistDrawer() {
    closeCartDrawer();
    closeMobileNav();
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function openMobileNav() {
    closeCartDrawer();
    closeWishlistDrawer();
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeMobileNav() {
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function closeAllOverlays() {
    closeCartDrawer();
    closeWishlistDrawer();
    closeMobileNav();
    closeQuickView();
    closeCheckoutModal();
  }

  /* --------------------------------------------------------------------------
     13. Quick Search Autocomplete & Filtering
     -------------------------------------------------------------------------- */
  function initHeaderSearch() {
    const toggleBtn = document.getElementById('searchToggleBtn');
    const dropdown = document.getElementById('searchDropdown');
    const input = document.getElementById('quickSearchInput');
    const clearBtn = document.getElementById('searchClearBtn');
    const resultsContainer = document.getElementById('searchPreviewResults');

    if (!toggleBtn || !dropdown || !input) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
      if (dropdown.classList.contains('active')) {
        input.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

      if (!q) {
        if (resultsContainer) resultsContainer.innerHTML = '';
        return;
      }

      const matches = PRODUCTS.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      ).slice(0, 5);

      if (resultsContainer) {
        if (matches.length === 0) {
          resultsContainer.innerHTML = '<div style="padding: 10px; font-size: 0.85rem; color: var(--text-dim);">No devices found</div>';
        } else {
          resultsContainer.innerHTML = matches
            .map(
              (p) => `
            <div class="preview-item" onclick="window.selectPreviewProduct('${p.id}')">
              <img src="${p.image}" alt="${p.name}" onerror="this.src='${SVG_FALLBACK_PLACEHOLDER}'">
              <div class="preview-item-info">
                <div class="preview-title">${p.name}</div>
                <div class="preview-price">$${p.price.toFixed(2)}</div>
              </div>
            </div>
          `
            )
            .join('');
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        if (resultsContainer) resultsContainer.innerHTML = '';
        input.focus();
      });
    }
  }

  function selectPreviewProduct(productId) {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) dropdown.classList.remove('active');
    openQuickView(productId);
  }

  /* --------------------------------------------------------------------------
     14. Catalog Filter, Search and Sorting Listeners
     -------------------------------------------------------------------------- */
  function initCatalogControls() {
    // Filter tabs
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'All';
        renderProducts();
      });
    });

    // Catalog search input
    const searchInput = document.getElementById('catalogSearchInput');
    const searchReset = document.getElementById('catalogSearchReset');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentSearchQuery = searchInput.value.trim();
        if (searchReset) searchReset.style.display = currentSearchQuery ? 'block' : 'none';
        renderProducts();
      });
    }

    if (searchReset) {
      searchReset.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        currentSearchQuery = '';
        searchReset.style.display = 'none';
        renderProducts();
      });
    }

    // Catalog sort dropdown
    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        renderProducts();
      });
    }

    // Reset filters empty state button
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetAllCatalogFilters();
      });
    }

    // Clear active filter badge
    const clearBadgeBtn = document.getElementById('clearActiveFilter');
    if (clearBadgeBtn) {
      clearBadgeBtn.addEventListener('click', () => {
        resetAllCatalogFilters();
      });
    }

    // Category Card click handler (Scroll to catalog & set filter)
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card) => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        if (cat) filterByCategory(cat);
      });
    });
  }

  function filterByCategory(categoryName) {
    currentCategory = categoryName;

    // Update filter pill UI
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((b) => {
      if (b.getAttribute('data-filter') === categoryName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    renderProducts();

    // Smooth scroll to shop section
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function resetAllCatalogFilters() {
    currentCategory = 'All';
    currentSearchQuery = '';
    currentSort = 'featured';

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((b) => {
      if (b.getAttribute('data-filter') === 'All') b.classList.add('active');
      else b.classList.remove('active');
    });

    const searchInput = document.getElementById('catalogSearchInput');
    const searchReset = document.getElementById('catalogSearchReset');
    const sortSelect = document.getElementById('catalogSortSelect');

    if (searchInput) searchInput.value = '';
    if (searchReset) searchReset.style.display = 'none';
    if (sortSelect) sortSelect.value = 'featured';

    renderProducts();
  }

  /* --------------------------------------------------------------------------
     15. Newsletter Subscription Handling
     -------------------------------------------------------------------------- */
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const messageEl = document.getElementById('newsletterMessage');
    const submitBtn = document.getElementById('newsletterSubmitBtn');

    if (!form || !emailInput || !messageEl) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        messageEl.className = 'newsletter-message error';
        messageEl.textContent = 'Please provide an email address.';
        return;
      }

      if (!emailPattern.test(email)) {
        messageEl.className = 'newsletter-message error';
        messageEl.textContent = 'Please provide a valid email format (e.g., name@domain.com).';
        return;
      }

      // Successful subscription
      if (submitBtn) submitBtn.disabled = true;
      messageEl.className = 'newsletter-message success';
      messageEl.textContent = '🎉 Subscribed successfully! Check your inbox for 15% VIP discount code.';
      showToast('Welcome to ElectroMart', 'Your 15% VIP welcome coupon is on the way!', 'success');

      emailInput.value = '';
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        messageEl.textContent = '';
      }, 6000);
    });
  }

  /* --------------------------------------------------------------------------
     16. Scroll Events: Sticky Header, Back to Top & Active Navigation
     -------------------------------------------------------------------------- */
  function initScrollBehavior() {
    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTopBtn');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      // Sticky header styling
      if (header) {
        if (scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }

      // Back to top button
      if (backToTop) {
        if (scrollY > 380) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
      }

      // Active Section Navigation Link Highlight
      let currentSectionId = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* --------------------------------------------------------------------------
     17. Hero Showcase Quick Add Flagship Device
     -------------------------------------------------------------------------- */
  function quickAddHeroProduct() {
    addToCart('iphone-17-pro', 1, true);
  }

  /* --------------------------------------------------------------------------
     18. Global Window Interface & Event Attachments
     -------------------------------------------------------------------------- */
  window.addToCart = addToCart;
  window.updateCartQty = updateCartQuantity;
  window.removeCartItem = removeFromCart;
  window.clearCart = clearCart;
  window.openCartDrawer = openCartDrawer;
  window.closeCartDrawer = closeCartDrawer;

  window.toggleWishlist = toggleWishlist;
  window.openWishlistDrawer = openWishlistDrawer;
  window.closeWishlistDrawer = closeWishlistDrawer;
  window.moveWishlistToCart = moveWishlistToCart;

  window.openQuickView = openQuickView;
  window.closeQuickView = closeQuickView;
  window.changeModalQty = changeModalQty;
  window.addModalProductToCart = addModalProductToCart;

  window.selectPreviewProduct = selectPreviewProduct;
  window.filterByCategory = filterByCategory;
  window.quickAddHeroProduct = quickAddHeroProduct;

  // Initialize Application on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    loadStoredState();
    renderDeals();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    initCountdownTimer();
    initHeaderSearch();
    initCatalogControls();
    initNewsletter();
    initScrollBehavior();

    // Set Copyright Year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Header Action Triggers
    const cartToggle = document.getElementById('cartToggleBtn');
    if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);

    const cartClose = document.getElementById('cartCloseBtn');
    if (cartClose) cartClose.addEventListener('click', closeCartDrawer);

    const wishlistToggle = document.getElementById('wishlistToggleBtn');
    if (wishlistToggle) wishlistToggle.addEventListener('click', openWishlistDrawer);

    const wishlistClose = document.getElementById('wishlistCloseBtn');
    if (wishlistClose) wishlistClose.addEventListener('click', closeWishlistDrawer);

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);

    const mobileNavClose = document.getElementById('mobileNavCloseBtn');
    if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);

    const backdrop = document.getElementById('drawerBackdrop');
    if (backdrop) backdrop.addEventListener('click', closeAllOverlays);

    // Modal Close Triggers
    const qvClose = document.getElementById('quickViewCloseBtn');
    if (qvClose) qvClose.addEventListener('click', closeQuickView);

    const qvModal = document.getElementById('quickViewModal');
    if (qvModal) {
      qvModal.addEventListener('click', (e) => {
        if (e.target === qvModal) closeQuickView();
      });
    }

    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
      checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckoutModal();
      });
    }

    const continueBtn = document.getElementById('continueShoppingBtn');
    if (continueBtn) continueBtn.addEventListener('click', closeCheckoutModal);

    // Cart Buttons
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', proceedToCheckout);

    const applyCouponBtn = document.getElementById('applyCouponBtn');
    if (applyCouponBtn) applyCouponBtn.addEventListener('click', applyCouponCode);

    const couponInput = document.getElementById('couponCodeInput');
    if (couponInput) {
      couponInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyCouponCode();
        }
      });
    }

    // Keyboard Shortcuts (Esc to close all modals/drawers)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllOverlays();
    });

    // Mobile nav drawer links close on click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    // Mobile Search input
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', () => {
        currentSearchQuery = mobileSearchInput.value.trim();
        const catalogSearchInput = document.getElementById('catalogSearchInput');
        if (catalogSearchInput) catalogSearchInput.value = currentSearchQuery;
        renderProducts();
      });
    }
  });
})();

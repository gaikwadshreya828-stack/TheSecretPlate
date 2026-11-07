// ============================================
// THE SECRET PLATE — Main Interactions
// ============================================

(function () {
  'use strict';

  // ---- LOADING SCREEN ----
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
      setTimeout(() => loader.classList.add('hidden'), 600);
    }
  });

  // ---- NAVIGATION SCROLL ----
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 60);
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ---- MOBILE MENU ----
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- CUSTOM CURSOR (desktop only) ----
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .dish-card, .gallery-item, .exp-card, .flavour-stage, .menu-item, .review-dot, .time-slot, .seating-option, .payment-method').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  // ---- HERO PARALLAX ----
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');

  if (heroBg && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroBg.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ---- HERO STEAM PARTICLES ----
  const steamContainer = document.querySelector('.hero-steam');
  if (steamContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'steam-particle';
      particle.style.left = (10 + Math.random() * 80) + '%';
      particle.style.animationDuration = (8 + Math.random() * 6) + 's';
      particle.style.animationDelay = (Math.random() * 8) + 's';
      steamContainer.appendChild(particle);
    }
  }

  // ---- SCROLL REVEAL ----
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- ANIMATED COUNTERS ----
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  // ---- MAGNETIC BUTTONS ----
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ---- SIGNATURE DISHES (home page) ----
  const dishesGrid = document.querySelector('.dishes-grid');
  if (dishesGrid && window.TSP) {
    const { SIGNATURE_DISHES, formatPrice, spiceDots, dietBadge, addToCart } = window.TSP;

    SIGNATURE_DISHES.forEach((dish, i) => {
      const card = document.createElement('div');
      card.className = 'dish-card reveal';
      card.style.transitionDelay = (i * 0.08) + 's';
      card.innerHTML = `
        <div class="dish-image">
          <div class="dish-badges">
            ${dietBadge(dish.diet)}
            ${dish.spice > 0 ? `<span class="dish-badge spice">${'🌶'.repeat(dish.spice)}</span>` : ''}
          </div>
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
        </div>
        <div class="dish-body">
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-desc">${dish.desc}</p>
          <div class="dish-footer">
            <span class="dish-price">${formatPrice(dish.price)}</span>
            <button class="dish-add" data-item="${dish.id}" aria-label="Add ${dish.name} to order">+</button>
          </div>
        </div>
      `;
      dishesGrid.appendChild(card);
      revealObserver.observe(card);
    });

    dishesGrid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.dish-add');
      if (addBtn) {
        addToCart(addBtn.dataset.item);
        // quick pulse animation
        addBtn.style.transform = 'scale(0.85)';
        setTimeout(() => addBtn.style.transform = '', 200);
      }
    });
  }

  // ---- FLAVOUR JOURNEY (home page) ----
  const flavourTrack = document.querySelector('.flavour-track');
  if (flavourTrack && window.TSP) {
    const { FLAVOUR_STAGES } = window.TSP;
    FLAVOUR_STAGES.forEach((stage, i) => {
      const el = document.createElement('div');
      el.className = 'flavour-stage reveal';
      el.style.transitionDelay = (i * 0.1) + 's';
      el.innerHTML = `
        <img src="${stage.image}" alt="${stage.title}" loading="lazy" />
        <div class="flavour-stage-overlay">
          <span class="flavour-stage-num">${stage.num}</span>
          <h3 class="flavour-stage-title">${stage.title}</h3>
          <p class="flavour-stage-desc">${stage.desc}</p>
        </div>
      `;
      flavourTrack.appendChild(el);
      revealObserver.observe(el);
    });
  }

  // ---- REVIEWS CAROUSEL ----
  const reviewsTrack = document.querySelector('.reviews-track');
  const reviewDotsContainer = document.querySelector('.review-dots');
  const reviewPrev = document.querySelector('.review-arrow-prev');
  const reviewNext = document.querySelector('.review-arrow-next');

  if (reviewsTrack && window.TSP) {
    const { REVIEWS } = window.TSP;
    let currentReview = 0;
    let autoplayTimer = null;

    REVIEWS.forEach((review, i) => {
      const card = document.createElement('div');
      card.className = 'review-card';
      const stars = '★'.repeat(review.stars) + '☆'.repeat(5 - review.stars);
      card.innerHTML = `
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${review.text}"</p>
        <p class="review-author">— ${review.author}</p>
      `;
      reviewsTrack.appendChild(card);

      if (reviewDotsContainer) {
        const dot = document.createElement('button');
        dot.className = 'review-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => goToReview(i));
        reviewDotsContainer.appendChild(dot);
      }
    });

    function goToReview(index) {
      currentReview = (index + REVIEWS.length) % REVIEWS.length;
      reviewsTrack.style.transform = `translateX(-${currentReview * 100}%)`;
      document.querySelectorAll('.review-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentReview);
      });
    }

    if (reviewPrev) reviewPrev.addEventListener('click', () => { goToReview(currentReview - 1); resetAutoplay(); });
    if (reviewNext) reviewNext.addEventListener('click', () => { goToReview(currentReview + 1); resetAutoplay(); });

    function startAutoplay() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      autoplayTimer = setInterval(() => goToReview(currentReview + 1), 5000);
    }
    function stopAutoplay() { if (autoplayTimer) clearInterval(autoplayTimer); }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    const reviewsSection = document.querySelector('.reviews-carousel');
    if (reviewsSection) {
      reviewsSection.addEventListener('mouseenter', stopAutoplay);
      reviewsSection.addEventListener('mouseleave', startAutoplay);
    }

    // Touch/swipe support
    let touchStartX = 0;
    reviewsTrack.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    reviewsTrack.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToReview(currentReview + (diff > 0 ? 1 : -1));
        resetAutoplay();
      }
    }, { passive: true });

    startAutoplay();
  }

  // ---- EXPERIENCE CARDS (home page) ----
  const expCards = document.querySelectorAll('.exp-card');
  expCards.forEach((card, i) => {
    card.classList.add('reveal');
    card.style.transitionDelay = (i * 0.1) + 's';
    revealObserver.observe(card);
  });

  // ---- CART DRAWER ----
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-close');
  const navCarts = document.querySelectorAll('.nav-cart');

  function openCart() {
    if (!cartDrawer || !cartOverlay) return;
    renderCart();
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  navCarts.forEach(c => c.addEventListener('click', (e) => { e.preventDefault(); openCart(); }));

  function renderCart() {
    const cartItemsEl = document.querySelector('.cart-items');
    const cartFooter = document.querySelector('.cart-footer');
    if (!cartItemsEl || !cartFooter) return;

    const cart = window.TSP.getCart();
    const totals = window.TSP.getCartTotals();

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <p>Your order is empty.<br>Browse the menu to begin.</p>
        </div>
      `;
      cartFooter.style.display = 'none';
      return;
    }

    cartFooter.style.display = '';
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" /></div>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${window.TSP.formatPrice(item.price)}</span>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
            <button class="cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Remove item">Remove</button>
          </div>
        </div>
        <span class="cart-item-price">${window.TSP.formatPrice(item.price * item.qty)}</span>
      </div>
    `).join('');

    // Update totals
    const subtotalEl = cartFooter.querySelector('.cart-subtotal-value');
    const taxesEl = cartFooter.querySelector('.cart-taxes-value');
    const totalEl = cartFooter.querySelector('.cart-total-value');
    if (subtotalEl) subtotalEl.textContent = window.TSP.formatPrice(totals.subtotal);
    if (taxesEl) taxesEl.textContent = window.TSP.formatPrice(totals.taxes);
    if (totalEl) totalEl.textContent = window.TSP.formatPrice(totals.total);
  }

  // Cart item interactions
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn || !btn.dataset.id) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === 'increase') window.TSP.updateQty(id, 1);
    else if (action === 'decrease') window.TSP.updateQty(id, -1);
    else if (action === 'remove') window.TSP.removeFromCart(id);

    if (cartDrawer && cartDrawer.classList.contains('open')) renderCart();
  });

  // Checkout button in cart
  const cartCheckout = document.querySelector('.cart-checkout');
  if (cartCheckout) {
    cartCheckout.addEventListener('click', () => {
      const totals = window.TSP.getCartTotals();
      if (totals.count === 0) return;
      closeCart();
      window.location.href = 'order.html';
    });
  }

  // ---- RESERVATION MODAL (triggered from nav buttons) ----
  const reserveButtons = document.querySelectorAll('[data-action="reserve"]');
  reserveButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'reservation.html';
    });
  });

  // ---- SHARE RESTAURANT ----
  const shareButtons = document.querySelectorAll('[data-action="share"]');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.share) {
        navigator.share({
          title: 'The Secret Plate',
          text: 'Some flavours are meant to be discovered.',
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard?.writeText(window.location.href);
        window.TSP.showToast('Link copied to clipboard');
      }
    });
  });

  // ---- WHATSAPP ----
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp"]');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = window.TSP.RESTAURANT_INFO.whatsapp;
      const msg = encodeURIComponent("Hello The Secret Plate, I'd like to know more.");
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    });
  });

  // ---- CALL ----
  const callButtons = document.querySelectorAll('[data-action="call"]');
  callButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `tel:${window.TSP.RESTAURANT_INFO.phone.replace(/\s/g, '')}`;
    });
  });

  // ---- DIRECTIONS ----
  const directionsButtons = document.querySelectorAll('[data-action="directions"]');
  directionsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(window.TSP.RESTAURANT_INFO.mapsUrl, '_blank');
    });
  });

  // ---- INIT ----
  window.TSP.updateCartCount();

  // Expose openCart for other scripts
  window.TSP.openCart = openCart;
  window.TSP.closeCart = closeCart;
  window.TSP.renderCart = renderCart;
})();
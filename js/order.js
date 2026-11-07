// ============================================
// THE SECRET PLATE — Order Page
// ============================================

(function () {
  'use strict';
  if (!window.TSP) return;

  const { MENU_ITEMS, MENU_CATEGORIES, getCart, getCartTotals, saveCart, updateQty, removeFromCart, formatPrice, dietBadge, spiceDots, addToCart, generateOrderId, showToast } = window.TSP;

  // ---- MENU SECTION ----
  const menuGrid = document.querySelector('.order-menu-grid');
  const filtersContainer = document.querySelector('.order-filters');

  if (filtersContainer) {
    MENU_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'menu-filter' + (cat.id === 'all' ? ' active' : '');
      btn.textContent = cat.label;
      btn.dataset.category = cat.id;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.order-filters .menu-filter').forEach(f => f.classList.toggle('active', f.dataset.category === cat.id));
        renderMenu(cat.id);
      });
      filtersContainer.appendChild(btn);
    });
  }

  function renderMenu(category = 'all') {
    if (!menuGrid) return;
    const items = category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(m => m.category === category);
    menuGrid.innerHTML = items.map(item => `
      <div class="menu-item">
        <div class="menu-item-image"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>
        <div class="menu-item-body">
          <div class="menu-item-header">
            <h3 class="menu-item-name">${item.name}</h3>
            <span class="menu-item-price">${formatPrice(item.price)}</span>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-meta">${dietBadge(item.diet)} ${item.spice > 0 ? spiceDots(item.spice) : ''}</div>
          <button class="menu-item-add" data-item="${item.id}">Add to Order</button>
        </div>
      </div>
    `).join('');
  }

  if (menuGrid) {
    menuGrid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.menu-item-add');
      if (addBtn) {
        addToCart(addBtn.dataset.item);
        renderSummary();
      }
    });
    renderMenu();
  }

  // ---- ORDER SUMMARY ----
  const summaryContent = document.querySelector('.order-summary-content');
  const orderTypeBtns = document.querySelectorAll('.order-type-btn');
  let orderType = 'delivery';

  orderTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderType = btn.dataset.type;
      orderTypeBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderSummary();
    });
  });

  // Payment method selection
  const paymentMethods = document.querySelectorAll('.payment-method');
  let selectedPayment = 'cod';
  paymentMethods.forEach(pm => {
    pm.addEventListener('click', () => {
      selectedPayment = pm.dataset.method;
      paymentMethods.forEach(p => p.classList.toggle('selected', p === pm));
    });
  });

  function renderSummary() {
    if (!summaryContent) return;
    const cart = getCart();
    const totals = getCartTotals();

    if (cart.length === 0) {
      summaryContent.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <p>Your order is empty.<br>Add dishes from the menu to begin.</p>
        </div>
      `;
      return;
    }

    const deliveryCharge = orderType === 'delivery' ? totals.delivery : 0;
    const total = totals.subtotal + totals.taxes + totals.packing + deliveryCharge;

    summaryContent.innerHTML = `
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" /></div>
            <div class="cart-item-info">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">${formatPrice(item.price)}</span>
              <div class="cart-item-controls">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                <button class="cart-item-remove" data-action="remove" data-id="${item.id}">Remove</button>
              </div>
            </div>
            <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
          </div>
        `).join('')}
      </div>
      <div class="cart-footer">
        <div class="cart-line"><span class="cart-line-label">Subtotal</span><span class="cart-line-value">${formatPrice(totals.subtotal)}</span></div>
        <div class="cart-line"><span class="cart-line-label">Taxes (5% GST)</span><span class="cart-line-value">${formatPrice(totals.taxes)}</span></div>
        <div class="cart-line"><span class="cart-line-label">Packing</span><span class="cart-line-value">${formatPrice(totals.packing)}</span></div>
        ${orderType === 'delivery' ? `<div class="cart-line"><span class="cart-line-label">Delivery</span><span class="cart-line-value">${formatPrice(totals.delivery)}</span></div>` : ''}
        <div class="cart-total"><span class="cart-total-label">Total</span><span class="cart-total-value">${formatPrice(total)}</span></div>
      </div>
      <div id="checkout-section" style="margin-top:1.5rem;"></div>
    `;

    renderCheckoutForm(total);
  }

  function renderCheckoutForm(total) {
    const checkoutSection = document.getElementById('checkout-section');
    if (!checkoutSection) return;

    checkoutSection.innerHTML = `
      <form id="checkout-form">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-input" name="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input type="tel" class="form-input" name="phone" placeholder="+91 98765 43210" required />
        </div>
        ${orderType === 'delivery' ? `
          <div class="form-group">
            <label class="form-label">Delivery Address</label>
            <textarea class="form-textarea" name="address" placeholder="Full delivery address" required></textarea>
          </div>
        ` : ''}
        <div class="form-group">
          <label class="form-label">Payment Method</label>
          <div class="payment-methods">
            <div class="payment-method selected" data-method="cod">
              <span class="payment-method-radio"></span>
              <span class="payment-method-label">Cash on Delivery</span>
              <span class="payment-method-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg></span>
            </div>
            <div class="payment-method" data-method="upi">
              <span class="payment-method-radio"></span>
              <span class="payment-method-label">UPI</span>
              <span class="payment-method-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
            <div class="payment-method" data-method="card">
              <span class="payment-method-radio"></span>
              <span class="payment-method-label">Card</span>
              <span class="payment-method-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></span>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-lg">Place Order — ${formatPrice(total)}</button>
      </form>
    `;

    // Re-bind payment methods
    const pms = checkoutSection.querySelectorAll('.payment-method');
    pms.forEach(pm => {
      pm.addEventListener('click', () => {
        selectedPayment = pm.dataset.method;
        pms.forEach(p => p.classList.toggle('selected', p === pm));
      });
    });

    // Handle form submit
    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const orderId = generateOrderId();
      const data = {
        orderId,
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address') || 'Takeaway',
        orderType,
        payment: selectedPayment,
        items: getCart(),
        total,
      };

      // Save order to localStorage (frontend only)
      localStorage.setItem('tsp_last_order', JSON.stringify(data));

      // Clear cart
      saveCart([]);

      // Show confirmation
      showOrderConfirmation(data);
    });
  }

  function showOrderConfirmation(order) {
    const mainContent = document.querySelector('.order-page-content');
    if (!mainContent) return;

    mainContent.innerHTML = `
      <div class="confirmation">
        <div class="confirmation-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2>Order Confirmed</h2>
        <p>"Your plate is being prepared."</p>
        <div class="confirmation-id">Order No: ${order.orderId}</div>
        <div style="text-align:left;max-width:400px;margin:0 auto 2rem;background:var(--charcoal);padding:1.5rem;border-radius:4px;border:1px solid rgba(201,165,92,0.1);">
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.5rem;"><strong style="color:var(--ivory);">Name:</strong> ${order.name}</p>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.5rem;"><strong style="color:var(--ivory);">Type:</strong> ${order.orderType === 'delivery' ? 'Delivery' : 'Takeaway'}</p>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.5rem;"><strong style="color:var(--ivory);">Payment:</strong> ${order.payment === 'cod' ? 'Cash on Delivery' : order.payment.toUpperCase()}</p>
          <p style="font-size:0.85rem;color:var(--text-muted);"><strong style="color:var(--ivory);">Total:</strong> <span style="color:var(--gold);">${formatPrice(order.total)}</span></p>
        </div>
        <div class="confirmation-actions">
          <a href="index.html" class="btn btn-outline">Back to Home</a>
          <a href="menu.html" class="btn btn-primary">Browse Menu</a>
        </div>
      </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Order ${order.orderId} confirmed!`);
  }

  // Handle cart item interactions in summary
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn || !btn.dataset.id) return;
    if (!summaryContent?.contains(btn)) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;
    if (action === 'increase') updateQty(id, 1);
    else if (action === 'decrease') updateQty(id, -1);
    else if (action === 'remove') removeFromCart(id);
    renderSummary();
  });

  renderSummary();
})();
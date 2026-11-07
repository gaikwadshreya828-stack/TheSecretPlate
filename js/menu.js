// ============================================
// THE SECRET PLATE — Menu Page
// ============================================

(function () {
  'use strict';

  const menuGrid = document.querySelector('.menu-grid');
  const filtersContainer = document.querySelector('.menu-filters');
  if (!menuGrid || !window.TSP) return;

  const { MENU_ITEMS, MENU_CATEGORIES, formatPrice, dietBadge, spiceDots, addToCart } = window.TSP;
  let activeCategory = 'all';

  // Render filter buttons
  if (filtersContainer) {
    MENU_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'menu-filter' + (cat.id === 'all' ? ' active' : '');
      btn.textContent = cat.label;
      btn.dataset.category = cat.id;
      btn.addEventListener('click', () => {
        activeCategory = cat.id;
        document.querySelectorAll('.menu-filter').forEach(f => f.classList.toggle('active', f.dataset.category === cat.id));
        renderMenu();
      });
      filtersContainer.appendChild(btn);
    });
  }

  function renderMenu() {
    const items = activeCategory === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(m => m.category === activeCategory);

    menuGrid.style.opacity = '0';
    menuGrid.style.transform = 'translateY(10px)';

    setTimeout(() => {
      menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
          <div class="menu-item-image"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>
          <div class="menu-item-body">
            <div class="menu-item-header">
              <h3 class="menu-item-name">${item.name}</h3>
              <span class="menu-item-price">${formatPrice(item.price)}</span>
            </div>
            <p class="menu-item-desc">${item.desc}</p>
            <div class="menu-item-meta">
              ${dietBadge(item.diet)}
              ${item.spice > 0 ? spiceDots(item.spice) : ''}
            </div>
            <button class="menu-item-add" data-item="${item.id}">Add to Order</button>
          </div>
        </div>
      `).join('');

      menuGrid.style.opacity = '1';
      menuGrid.style.transform = 'translateY(0)';
    }, 200);
  }

  menuGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // Handle add to cart
  menuGrid.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.menu-item-add');
    if (addBtn) {
      addToCart(addBtn.dataset.item);
    }
  });

  renderMenu();
})();
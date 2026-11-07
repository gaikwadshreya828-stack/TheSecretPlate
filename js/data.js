// ============================================
// THE SECRET PLATE — Shared Data
// ============================================

const IMG = {
  heroGrill: 'https://images.pexels.com/photos/4316005/pexels-photo-4316005.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroPlating: 'https://images.pexels.com/photos/9958627/pexels-photo-9958627.jpeg?auto=compress&cs=tinysrgb&w=1920',
  chefPlating: 'https://images.pexels.com/photos/34973509/pexels-photo-34973509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chefKitchen: 'https://images.pexels.com/photos/17205222/pexels-photo-17205222.jpeg?auto=compress&cs=tinysrgb&w=1200',
  grilledSeafood: 'https://images.pexels.com/photos/28559509/pexels-photo-28559509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  seafoodPlatter: 'https://images.pexels.com/photos/5041489/pexels-photo-5041489.jpeg?auto=compress&cs=tinysrgb&w=1200',
  spicyShrimp: 'https://images.pexels.com/photos/36009124/pexels-photo-36009124.jpeg?auto=compress&cs=tinysrgb&w=1200',
  garlicShrimp: 'https://images.pexels.com/photos/8697543/pexels-photo-8697543.jpeg?auto=compress&cs=tinysrgb&w=800',
  prawnsPan: 'https://images.pexels.com/photos/8250361/pexels-photo-8250361.jpeg?auto=compress&cs=tinysrgb&w=800',
  shrimpSkewers: 'https://images.pexels.com/photos/8250728/pexels-photo-8250728.jpeg?auto=compress&cs=tinysrgb&w=800',
  grillFlames: 'https://images.pexels.com/photos/9222008/pexels-photo-9222008.jpeg?auto=compress&cs=tinysrgb&w=1200',
  grillFire: 'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chefFire: 'https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fireGrill: 'https://images.pexels.com/photos/37164095/pexels-photo-37164095.jpeg?auto=compress&cs=tinysrgb&w=1200',
  flamesGrill: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1200',
  kitchenFire: 'https://images.pexels.com/photos/16547110/pexels-photo-16547110.jpeg?auto=compress&cs=tinysrgb&w=1200',
  freshCatch: 'https://images.pexels.com/photos/33654620/pexels-photo-33654620.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fishMarket: 'https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fishIce: 'https://images.pexels.com/photos/8352394/pexels-photo-8352394.jpeg?auto=compress&cs=tinysrgb&w=800',
  grilledSalmon: 'https://images.pexels.com/photos/29748127/pexels-photo-29748127.jpeg?auto=compress&cs=tinysrgb&w=800',
  salmonPlate: 'https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&w=800',
  grilledFish: 'https://images.pexels.com/photos/6046747/pexels-photo-6046747.jpeg?auto=compress&cs=tinysrgb&w=800',
  wholeFish: 'https://images.pexels.com/photos/19239122/pexels-photo-19239122.jpeg?auto=compress&cs=tinysrgb&w=800',
  fishPlate: 'https://images.pexels.com/photos/19239119/pexels-photo-19239119.jpeg?auto=compress&cs=tinysrgb&w=800',
  fishRice: 'https://images.pexels.com/photos/17649371/pexels-photo-17649371.jpeg?auto=compress&cs=tinysrgb&w=800',
  calamari1: 'https://images.pexels.com/photos/15801007/pexels-photo-15801007.jpeg?auto=compress&cs=tinysrgb&w=800',
  calamari2: 'https://images.pexels.com/photos/17321492/pexels-photo-17321492.jpeg?auto=compress&cs=tinysrgb&w=800',
  butterChicken: 'https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryBrass: 'https://images.pexels.com/photos/29685056/pexels-photo-29685056.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryKadai: 'https://images.pexels.com/photos/29684985/pexels-photo-29684985.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryHandi: 'https://images.pexels.com/photos/29684980/pexels-photo-29684980.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryBowl: 'https://images.pexels.com/photos/32986463/pexels-photo-32986463.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryRice: 'https://images.pexels.com/photos/27287005/pexels-photo-27287005.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryCilantro: 'https://images.pexels.com/photos/29684993/pexels-photo-29684993.jpeg?auto=compress&cs=tinysrgb&w=800',
  curryPan: 'https://images.pexels.com/photos/29684988/pexels-photo-29684988.jpeg?auto=compress&cs=tinysrgb&w=800',
  tandooriChicken: 'https://images.pexels.com/photos/29699526/pexels-photo-29699526.jpeg?auto=compress&cs=tinysrgb&w=800',
  chickenSkewers: 'https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg?auto=compress&cs=tinysrgb&w=800',
  chickenPlatter: 'https://images.pexels.com/photos/18698233/pexels-photo-18698233.jpeg?auto=compress&cs=tinysrgb&w=800',
  indianSweets: 'https://images.pexels.com/photos/9951856/pexels-photo-9951856.jpeg?auto=compress&cs=tinysrgb&w=800',
  indianFoodSpread: 'https://images.pexels.com/photos/29253305/pexels-photo-29253305.jpeg?auto=compress&cs=tinysrgb&w=800',
  cocktail: 'https://images.pexels.com/photos/33030217/pexels-photo-33030217.jpeg?auto=compress&cs=tinysrgb&w=800',
  lemonCocktail: 'https://images.pexels.com/photos/9584962/pexels-photo-9584962.jpeg?auto=compress&cs=tinysrgb&w=800',
  spices: 'https://images.pexels.com/photos/7829483/pexels-photo-7829483.jpeg?auto=compress&cs=tinysrgb&w=1200',
  spicesBox: 'https://images.pexels.com/photos/32038446/pexels-photo-32038446.jpeg?auto=compress&cs=tinysrgb&w=800',
  biryani: 'https://images.pexels.com/photos/24206918/pexels-photo-24206918.jpeg?auto=compress&cs=tinysrgb&w=800',
  biryaniSpices: 'https://images.pexels.com/photos/24206919/pexels-photo-24206919.jpeg?auto=compress&cs=tinysrgb&w=800',
  ricePlate: 'https://images.pexels.com/photos/24206915/pexels-photo-24206915.jpeg?auto=compress&cs=tinysrgb&w=800',
  naan: 'https://images.pexels.com/photos/30203311/pexels-photo-30203311.jpeg?auto=compress&cs=tinysrgb&w=800',
  flatbread: 'https://images.pexels.com/photos/32986478/pexels-photo-32986478.jpeg?auto=compress&cs=tinysrgb&w=800',
  paneer: 'https://images.pexels.com/photos/29631468/pexels-photo-29631468.jpeg?auto=compress&cs=tinysrgb&w=800',
  paneerBowl: 'https://images.pexels.com/photos/29631461/pexels-photo-29631461.jpeg?auto=compress&cs=tinysrgb&w=800',
  restaurantInterior: 'https://images.pexels.com/photos/19456977/pexels-photo-19456977.jpeg?auto=compress&cs=tinysrgb&w=1200',
  restaurantTable: 'https://images.pexels.com/photos/30420679/pexels-photo-30420679.jpeg?auto=compress&cs=tinysrgb&w=1200',
  restaurantWindow: 'https://images.pexels.com/photos/33410291/pexels-photo-33410291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  restaurantModern: 'https://images.pexels.com/photos/12688961/pexels-photo-12688961.jpeg?auto=compress&cs=tinysrgb&w=1200',
  wineSetting: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&w=1200',
  restaurantExterior: 'https://images.pexels.com/photos/14295998/pexels-photo-14295998.jpeg?auto=compress&cs=tinysrgb&w=1200',
  oceanSunset: 'https://images.pexels.com/photos/4531858/pexels-photo-4531858.jpeg?auto=compress&cs=tinysrgb&w=1920',
  coastSunset: 'https://images.pexels.com/photos/17306837/pexels-photo-17306837.jpeg?auto=compress&cs=tinysrgb&w=1200',
  elegantShrimp: 'https://images.pexels.com/photos/6783460/pexels-photo-6783460.jpeg?auto=compress&cs=tinysrgb&w=800',
  gourmetSalmon: 'https://images.pexels.com/photos/6297198/pexels-photo-6297198.jpeg?auto=compress&cs=tinysrgb&w=800',
  seafoodPlate: 'https://images.pexels.com/photos/39444304/pexels-photo-39444304.jpeg?auto=compress&cs=tinysrgb&w=800',
  shrimpTartare: 'https://images.pexels.com/photos/29962496/pexels-photo-29962496.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ============================================
// MENU DATA
// ============================================
const MENU_ITEMS = [
  // Chef's Specials
  { id: 'cs1', name: "Chef's Special Catch", desc: "Today's freshest catch, prepared with the chef's signature spice blend and coastal aromatics.", price: 680, category: 'specials', diet: 'nonveg', spice: 3, image: IMG.seafoodPlate, featured: true },
  { id: 'cs2', name: "Seafood Platter", desc: "A generous spread of prawns, fish, calamari and crab — grilled, fried and sauced to perfection.", price: 1250, category: 'specials', diet: 'nonveg', spice: 2, image: IMG.seafoodPlatter, featured: true },
  { id: 'cs3', name: "Prawn Ghee Roast", desc: "Succulent prawns tossed in roasted spices, ghee and coastal aromatics. A Mangalorean classic.", price: 520, category: 'specials', diet: 'nonveg', spice: 3, image: IMG.spicyShrimp, featured: true },

  // Starters
  { id: 'st1', name: "Crispy Calamari", desc: "Golden fried calamari rings with a crisp coating, served with zesty tartare dip.", price: 380, category: 'starters', diet: 'nonveg', spice: 1, image: IMG.calamari1, featured: true },
  { id: 'st2', name: "Tandoori Chicken Tikka", desc: "Char-grilled chicken marinated in yogurt, ginger-garlic and warming spices.", price: 340, category: 'starters', diet: 'nonveg', spice: 2, image: IMG.tandooriChicken },
  { id: 'st3', name: "Paneer Tikka", desc: "Cubes of cottage cheese marinated in spiced yogurt, grilled in the tandoor.", price: 290, category: 'starters', diet: 'veg', spice: 2, image: IMG.paneer },
  { id: 'st4', name: "Fish Amritsari", desc: "Batter-fried fish strips with ajwain, carom and a squeeze of lime.", price: 420, category: 'starters', diet: 'nonveg', spice: 2, image: IMG.fishPlate },

  // Prawns
  { id: 'pr1', name: "Butter Garlic Prawns", desc: "Plump prawns sautéed in butter, garlic and a hint of white pepper.", price: 480, category: 'prawns', diet: 'nonveg', spice: 1, image: IMG.garlicShrimp, featured: true },
  { id: 'pr2', name: "Chilli Prawns", desc: "Prawns tossed in a fiery Indo-Chinese sauce with bell peppers and spring onion.", price: 460, category: 'prawns', diet: 'nonveg', spice: 3, image: IMG.prawnsPan },
  { id: 'pr3', name: "Prawn Koliwada", desc: "A Mumbai favourite — prawns marinated, coated and deep-fried with curry leaves.", price: 440, category: 'prawns', diet: 'nonveg', spice: 2, image: IMG.shrimpSkewers },

  // Fish
  { id: 'fi1', name: "Tawa Surmai", desc: "Seer fish pan-seared on the tava with green masala and a squeeze of lime.", price: 560, category: 'fish', diet: 'nonveg', spice: 2, image: IMG.wholeFish, featured: true },
  { id: 'fi2', name: "Grilled Salmon", desc: "Salmon fillet grilled to perfection, served with roasted vegetables.", price: 720, category: 'fish', diet: 'nonveg', spice: 1, image: IMG.grilledSalmon },
  { id: 'fi3', name: "Fish Tikka", desc: "Fish cubes marinated in tandoori spices and grilled in the clay oven.", price: 480, category: 'fish', diet: 'nonveg', spice: 2, image: IMG.grilledFish },
  { id: 'fi4', name: "Coastal Fish Curry", desc: "Fresh fish simmered in a coconut, kokum and spice gravy — a coastal staple.", price: 520, category: 'fish', diet: 'nonveg', spice: 3, image: IMG.curryPan, featured: true },

  // Chicken
  { id: 'ch1', name: "Butter Chicken", desc: "Tandoori chicken in a rich, creamy tomato gravy with a hint of fenugreek.", price: 380, category: 'chicken', diet: 'nonveg', spice: 2, image: IMG.butterChicken },
  { id: 'ch2', name: "Chicken Chettinad", desc: "A fiery South Indian chicken curry with roasted spices and coconut.", price: 360, category: 'chicken', diet: 'nonveg', spice: 3, image: IMG.curryKadai },
  { id: 'ch3', name: "Chicken 65", desc: "Crispy fried chicken tossed with curry leaves, red chillies and garlic.", price: 320, category: 'chicken', diet: 'nonveg', spice: 3, image: IMG.chickenSkewers },

  // Vegetarian
  { id: 've1', name: "Paneer Butter Masala", desc: "Cottage cheese in a velvety tomato and cashew gravy.", price: 280, category: 'veg', diet: 'veg', spice: 1, image: IMG.paneerBowl },
  { id: 've2', name: "Veg Kofta Curry", desc: "Mixed vegetable dumplings in a rich, spiced onion-tomato gravy.", price: 260, category: 'veg', diet: 'veg', spice: 2, image: IMG.curryHandi },
  { id: 've3', name: "Dal Tadka", desc: "Yellow lentils tempered with cumin, garlic and dried red chilli.", price: 180, category: 'veg', diet: 'veg', spice: 1, image: IMG.curryBowl },

  // Rice & Breads
  { id: 'rb1', name: "Seafood Biryani", desc: "Fragrant basmati rice layered with prawns, fish and aromatic spices.", price: 480, category: 'rice', diet: 'nonveg', spice: 2, image: IMG.biryani },
  { id: 'rb2', name: "Steamed Rice", desc: "Fluffy, perfectly steamed basmati rice.", price: 90, category: 'rice', diet: 'veg', spice: 0, image: IMG.ricePlate },
  { id: 'rb3', name: "Garlic Naan", desc: "Soft tandoor-baked bread brushed with garlic and butter.", price: 60, category: 'rice', diet: 'veg', spice: 0, image: IMG.naan },
  { id: 'rb4', name: "Tandoori Roti", desc: "Whole wheat flatbread baked in the tandoor.", price: 40, category: 'rice', diet: 'veg', spice: 0, image: IMG.flatbread },

  // Curries
  { id: 'cu1', name: "Coastal Fish Curry", desc: "Fresh fish simmered in a coconut, kokum and spice gravy — a coastal staple.", price: 520, category: 'curries', diet: 'nonveg', spice: 3, image: IMG.curryPan },
  { id: 'cu2', name: "Prawn Curry", desc: "Prawns in a tangy coconut gravy with curry leaves and coastal spices.", price: 480, category: 'curries', diet: 'nonveg', spice: 3, image: IMG.curryCilantro },
  { id: 'cu3', name: "Chicken Curry", desc: "Chicken simmered in a traditional Maharashtrian onion-coconut masala.", price: 340, category: 'curries', diet: 'nonveg', spice: 2, image: IMG.curryBrass },

  // Desserts
  { id: 'de1', name: "Gulab Jamun", desc: "Warm, soft dumplings soaked in saffron-cardamom syrup.", price: 140, category: 'desserts', diet: 'veg', spice: 0, image: IMG.indianSweets },
  { id: 'de2', name: "Coconut Kheer", desc: "Slow-cooked rice pudding with coconut, cardamom and toasted nuts.", price: 160, category: 'desserts', diet: 'veg', spice: 0, image: IMG.indianFoodSpread },

  // Beverages
  { id: 'be1', name: "Solkadhi", desc: "A refreshing coastal drink of coconut milk and kokum — the perfect palate cleanser.", price: 90, category: 'beverages', diet: 'veg', spice: 0, image: IMG.cocktail },
  { id: 'be2', name: "Masala Buttermilk", desc: "Spiced buttermilk with curry leaves, ginger and roasted cumin.", price: 70, category: 'beverages', diet: 'veg', spice: 1, image: IMG.lemonCocktail },
];

// ============================================
// SIGNATURE DISHES (featured on home page)
// ============================================
const SIGNATURE_DISHES = MENU_ITEMS.filter(item => item.featured);

// ============================================
// MENU CATEGORIES
// ============================================
const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'specials', label: "Chef's Specials" },
  { id: 'starters', label: 'Starters' },
  { id: 'prawns', label: 'Prawns' },
  { id: 'fish', label: 'Fish' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'veg', label: 'Vegetarian' },
  { id: 'rice', label: 'Rice & Breads' },
  { id: 'curries', label: 'Curries' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

// ============================================
// FLAVOUR JOURNEY STAGES
// ============================================
const FLAVOUR_STAGES = [
  { num: '01', title: 'Fresh Catch', desc: 'Every morning starts at the coast. We hand-pick the freshest catch from local fishermen — firm, glistening, still smelling of the sea.', image: IMG.freshCatch },
  { num: '02', title: 'Preparation', desc: 'Each fish and prawn is cleaned, marinated and layered with coastal spices — kokum, coconut, curry leaves, and our secret masala.', image: IMG.spices },
  { num: '03', title: 'Fire', desc: 'The grill roars. Searing locks in flavour, while the flames kiss the surface with smokiness that only live fire can give.', image: IMG.grillFlames },
  { num: '04', title: 'Plating', desc: 'Every plate is composed with intention — colour, texture, and aroma balanced to make the first sight unforgettable.', image: IMG.chefPlating },
  { num: '05', title: 'Your Table', desc: 'Sizzling, aromatic, and served with warmth. The journey ends where yours begins — at your table, tonight.', image: IMG.restaurantTable },
];

// ============================================
// REVIEWS (clearly labelled as demo/placeholder)
// ============================================
const REVIEWS = [
  { stars: 5, text: "Beautiful seafood, generous portions and incredible flavours. The prawn ghee roast is worth travelling for.", author: "Guest Review · Demo" },
  { stars: 5, text: "The prawns were the highlight of our dinner — perfectly cooked, buttery, and full of coastal spice.", author: "Guest Review · Demo" },
  { stars: 4, text: "Loved the ambience and the coastal flavours. The fish curry took me straight back to the Konkan coast.", author: "Guest Review · Demo" },
  { stars: 5, text: "Intimate lighting, warm service, and seafood that tastes like it was caught the same hour. A hidden gem.", author: "Guest Review · Demo" },
  { stars: 5, text: "The seafood platter is a feast. Every element was distinct and beautifully plated. We'll be back.", author: "Guest Review · Demo" },
];

// ============================================
// GALLERY IMAGES
// ============================================
const GALLERY_IMAGES = [
  { src: IMG.garlicShrimp, alt: 'Butter garlic prawns in a ceramic dish', span: 'tall' },
  { src: IMG.chefPlating, alt: 'Chef plating a gourmet seafood dish' },
  { src: IMG.grillFlames, alt: 'Prawns and seafood sizzling on a charcoal grill' },
  { src: IMG.restaurantInterior, alt: 'Elegant restaurant interior with warm lighting', span: 'wide' },
  { src: IMG.calamari2, alt: 'Golden crispy calamari with dipping sauces' },
  { src: IMG.spices, alt: 'Whole spices on a wooden board' },
  { src: IMG.wholeFish, alt: 'Grilled whole fish with lime and vegetables', span: 'tall' },
  { src: IMG.seafoodPlatter, alt: 'Seafood platter with prawns, fish and rice' },
  { src: IMG.restaurantTable, alt: 'Warm restaurant table setting with candles' },
  { src: IMG.grilledSalmon, alt: 'Grilled salmon fillet with roasted vegetables' },
  { src: IMG.wineSetting, alt: 'Wine glasses in warm ambient lighting', span: 'wide' },
  { src: IMG.tandooriChicken, alt: 'Tandoori chicken with mint chutney' },
  { src: IMG.oceanSunset, alt: 'Coastal sunset over gentle waves' },
  { src: IMG.cocktail, alt: 'Refreshing citrus cocktail' },
  { src: IMG.biryani, alt: 'Fragrant seafood biryani with spices' },
  { src: IMG.chefKitchen, alt: 'Chef preparing seafood in the kitchen' },
];

// ============================================
// RESTAURANT INFO
// ============================================
const RESTAURANT_INFO = {
  name: 'The Secret Plate',
  tagline: 'Some flavours are meant to be discovered.',
  rating: 4.6,
  reviewCount: 452,
  location: 'Maharashtra, India',
  address: 'Marine Drive, Nariman Point, Mumbai, Maharashtra 400021',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@thesecretplate.in',
  mapsUrl: 'https://maps.app.goo.gl/vJ3cJafGcL8kcAmY6',
  hours: [
    { day: 'Monday — Thursday', time: '12:00 PM — 11:00 PM' },
    { day: 'Friday — Saturday', time: '12:00 PM — 12:30 AM' },
    { day: 'Sunday', time: '11:00 AM — 11:00 PM' },
  ],
};

// ============================================
// CART STATE (shared across pages via localStorage)
// ============================================
const CART_KEY = 'tsp_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(itemId) {
  const cart = getCart();
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (item) cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: 1 });
  }
  saveCart(cart);
  showToast(`${MENU_ITEMS.find(m => m.id === itemId)?.name || 'Item'} added to order`);
}

function removeFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== itemId);
  saveCart(cart);
}

function updateQty(itemId, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(itemId);
    } else {
      saveCart(cart);
    }
  }
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const packing = cart.length > 0 ? 30 : 0;
  const delivery = cart.length > 0 ? 40 : 0;
  const total = subtotal + taxes + packing + delivery;
  return { subtotal, taxes, packing, delivery, total, count: cart.reduce((s, i) => s + i.qty, 0) };
}

function updateCartCount() {
  const totals = getCartTotals();
  document.querySelectorAll('.nav-cart-count').forEach(el => {
    el.textContent = totals.count;
    el.classList.toggle('visible', totals.count > 0);
  });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
    <span class="toast-text">${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ============================================
// HELPERS
// ============================================
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

function spiceDots(level) {
  let html = '<span class="spice-dots">';
  for (let i = 0; i < 3; i++) {
    html += `<span class="spice-dot ${i < level ? 'active' : ''}"></span>`;
  }
  html += '</span>';
  return html;
}

function dietBadge(diet) {
  if (diet === 'veg') return '<span class="dish-badge veg">Veg</span>';
  return '<span class="dish-badge nonveg">Non-Veg</span>';
}

function generateOrderId() {
  const prefix = 'TSP';
  const num = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${num}`;
}

function generateReservationId() {
  const prefix = 'RSP';
  const num = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${num}`;
}

// Export to window for non-module scripts
window.TSP = {
  IMG, MENU_ITEMS, SIGNATURE_DISHES, MENU_CATEGORIES,
  FLAVOUR_STAGES, REVIEWS, GALLERY_IMAGES, RESTAURANT_INFO,
  getCart, saveCart, addToCart, removeFromCart, updateQty,
  getCartTotals, updateCartCount, showToast,
  formatPrice, spiceDots, dietBadge, generateOrderId, generateReservationId,
};
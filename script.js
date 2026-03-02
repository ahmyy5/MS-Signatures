/* ============================================================
   MS SIGNATURE – script.js
   - Product data (watches)
   - Theme toggle (light / dark, localStorage)
   - Modal with WhatsApp + Instagram ordering
   - Scroll effects (navbar, reveal animations)
   - Cursor glow
   - Mobile hamburger menu
   - Collection page: filter bar
   ============================================================ */

// ============ CONFIGURATION ============
const WA_NUMBER = '923024112681'; // WhatsApp: +92 302 4112681
const INSTAGRAM_URL = 'https://www.instagram.com/ms_signature27/';

// ============ PRODUCT DATA (Watches) ============
const products = [
  {
    id: 1,
    name: 'Noir Classic',
    desc: 'A bold, minimalist black-dial timepiece with sapphire crystal glass. Ideal for formal occasions.',
    price: 'Contact for price',
    numericPrice: 4500,
    image: 'WhatsApp Image 2026-02-09 at 4.45.39 PM.jpeg',
    badge: 'Bestseller',
    category: 'Bestseller',
  },
  {
    id: 2,
    name: 'Golden Hour',
    desc: 'A warm champagne dial with rose-gold case and genuine leather strap. Timeless luxury.',
    price: 'Contact for price',
    numericPrice: 5200,
    image: 'WhatsApp Image 2026-02-09 at 4.45.39 PM (1).jpeg',
    badge: 'New',
    category: 'New',
  },
  {
    id: 3,
    name: 'Silver Royale',
    desc: 'Stainless steel case with a refined silver dial and deployant clasp bracelet. Pure elegance.',
    price: 'Contact for price',
    numericPrice: 4800,
    image: 'WhatsApp Image 2026-02-09 at 4.45.40 PM.jpeg',
    badge: null,
    category: null,
  },
  {
    id: 4,
    name: 'Velvet Edition',
    desc: 'Deep navy blue dial with luminous hands and suede strap. A statement in every light.',
    price: 'Contact for price',
    numericPrice: 6200,
    image: 'WhatsApp Image 2026-02-09 at 4.45.40 PM (1).jpeg',
    badge: 'Premium',
    category: 'Premium',
  },
  {
    id: 5,
    name: 'Ivory Sport',
    desc: 'Light, sporty design featuring white dial and stainless mesh band. Your everyday signature.',
    price: 'Contact for price',
    numericPrice: 3800,
    image: 'WhatsApp Image 2026-02-09 at 4.45.41 PM.jpeg',
    badge: null,
    category: null,
  },
  {
    id: 6,
    name: 'Midnight Steel',
    desc: 'All-black stainless case with tachymetre bezel. Confident, bold, and unforgettable.',
    price: 'Contact for price',
    numericPrice: 5600,
    image: 'WhatsApp Image 2026-02-09 at 4.45.41 PM (1).jpeg',
    badge: null,
    category: null,
  },
  {
    id: 7,
    name: 'Pearl Élite',
    desc: 'Mother-of-pearl dial in rose gold case with a crystal-set bezel. Feminine sophistication.',
    price: 'Contact for price',
    numericPrice: 5000,
    image: 'WhatsApp Image 2026-02-09 at 4.45.41 PM (2).jpeg',
    badge: null,
    category: null,
  },
  {
    id: 8,
    name: 'Heritage Reserve',
    desc: 'Skeleton dial with open-heart mechanism. Hand-stitched strap. Only 50 pieces available.',
    price: 'Contact for price',
    numericPrice: 7500,
    image: 'WhatsApp Image 2026-02-09 at 4.45.42 PM.jpeg',
    badge: 'Limited',
    category: 'Limited',
  },
  {
    id: 9,
    name: 'Urban Chrome',
    desc: 'Polished chrome case with chronograph sub-dials. A versatile choice for city life.',
    price: 'Contact for price',
    numericPrice: 4200,
    image: 'WhatsApp Image 2026-02-22 at 11.23.42 PM.jpeg',
    badge: 'New',
    category: 'New',
  },
  {
    id: 10,
    name: 'Amber Prestige',
    desc: 'Warm amber-tone dial with meshed gold bracelet. Prestigious and conversation-worthy.',
    price: 'Contact for price',
    numericPrice: 6800,
    image: 'WhatsApp Image 2026-02-22 at 11.23.42 PM (1).jpeg',
    badge: 'Premium',
    category: 'Premium',
  },
];

// ============ THEME TOGGLE ============
const THEME_KEY = 'ms-signature-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);

  const isDark = theme === 'dark';
  const icon = isDark ? '🌙' : '☀️';
  const label = isDark ? 'Dark Mode' : 'Light Mode';

  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  const mobileThemeLabel = document.getElementById('mobileThemeLabel');

  if (themeIcon) themeIcon.textContent = icon;
  if (mobileThemeIcon) mobileThemeIcon.textContent = icon;
  if (mobileThemeLabel) mobileThemeLabel.textContent = label;
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = saved || 'dark';
  applyTheme(preferred);
}

function bindThemeToggles() {
  const mainToggle = document.getElementById('themeToggle');
  const mobileToggle = document.getElementById('mobileThemeToggle');

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  if (mainToggle) mainToggle.addEventListener('click', toggle);
  if (mobileToggle) mobileToggle.addEventListener('click', toggle);
}

// ============ HELPERS ============
function buildWAUrl(product, qty) {
  const msg = `Hi MS Signature! 👋\n\nI'd like to order:\n⌚ *${product.name}*\n📦 Quantity: ${qty}\n\nPlease confirm availability and share the price. Thank you!`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function waIconSVG(size = 14) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" width="${size}" height="${size}" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
}

function instaIconSVG(size = 14) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" width="${size}" height="${size}" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
}

// ============ RENDER PRODUCTS ============
let currentFilter = 'all';

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const isHomePage = !document.querySelector('.collection-page');
  const toRender = isHomePage
    ? products.slice(0, 4)  // Show only first 4 on homepage
    : (filter === 'all' ? products : products.filter((p) => p.category === filter));

  grid.innerHTML = toRender.map((p) => `
    <article class="product-card reveal" data-id="${p.id}"
             aria-label="View ${escapeHtml(p.name)}"
             tabindex="0" role="button">
      ${p.badge ? `<div class="card-badge">${escapeHtml(p.badge)}</div>` : ''}
      <div class="card-img">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(p.name)}</h3>
        <p class="card-desc">${escapeHtml(p.desc)}</p>
        <div class="card-footer">
          <span class="card-price">${escapeHtml(p.price)}</span>
          <div class="card-btns">
            <button class="card-btn wa" data-id="${p.id}" aria-label="Order ${escapeHtml(p.name)} via WhatsApp">
              ${waIconSVG(13)} WA
            </button>
            <button class="card-btn insta" data-id="${p.id}" data-channel="insta" aria-label="Order ${escapeHtml(p.name)} via Instagram">
              ${instaIconSVG(13)} IG
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Card click → open modal
  grid.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-btn')) return;
      openModal(parseInt(card.dataset.id));
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(parseInt(card.dataset.id));
    });
  });

  // WhatsApp button → open modal + select WA
  grid.querySelectorAll('.card-btn.wa').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id), 'wa');
    });
  });

  // Instagram button → open modal + select IG
  grid.querySelectorAll('.card-btn.insta').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id), 'insta');
    });
  });

  // Re-observe new cards for reveal
  observeRevealElements();

  // Staggered delays
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
  });
}

// ============ FILTER BAR ============
function initFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  bar.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter);
    });
  });
}

// ============ MODAL ============
let currentProduct = null;
let currentQty = 1;

function openModal(id, preferredChannel) {
  currentProduct = products.find((p) => p.id === id);
  if (!currentProduct) return;
  currentQty = 1;

  document.getElementById('modalImg').src = currentProduct.image;
  document.getElementById('modalImg').alt = currentProduct.name;
  document.getElementById('modalName').textContent = currentProduct.name;
  document.getElementById('modalDesc').textContent = currentProduct.desc;
  document.getElementById('modalPrice').textContent = currentProduct.price;
  document.getElementById('qtyVal').textContent = currentQty;
  updateModalLinks();

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  currentProduct = null;
  currentQty = 1;
}

function updateModalLinks() {
  if (!currentProduct) return;
  const waBtn = document.getElementById('modalWaBtn');
  if (waBtn) waBtn.href = buildWAUrl(currentProduct, currentQty);
  // Instagram link stays the same (customer DMs with product name)
}

// Modal events
const modalClose = document.getElementById('modalClose');
if (modalClose) modalClose.addEventListener('click', closeModal);

const modalOverlay = document.getElementById('modalOverlay');
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
if (qtyMinus) qtyMinus.addEventListener('click', () => {
  if (currentQty > 1) { currentQty--; document.getElementById('qtyVal').textContent = currentQty; updateModalLinks(); }
});
if (qtyPlus) qtyPlus.addEventListener('click', () => {
  if (currentQty < 20) { currentQty++; document.getElementById('qtyVal').textContent = currentQty; updateModalLinks(); }
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
if (navbar) {
  // On collection page navbar is always scrolled
  if (!navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
}

// ============ REVEAL ANIMATION (Intersection Observer) ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeRevealElements() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObserver.observe(el));
}

// ============ CURSOR GLOW ============
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
  function animateCursor() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

// ============ MOBILE HAMBURGER ============
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ============ INIT ============
initTheme();
bindThemeToggles();
renderProducts(currentFilter);
initFilterBar();
observeRevealElements();

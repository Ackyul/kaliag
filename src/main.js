import { categories, products, regions } from './data/products.js';

// Application State
const state = {
  activeCategory: 'all',
  searchQuery: '',
  cart: [],
  selectedProduct: null,
  currentSlide: 0,
  slideInterval: null
};

// DOM Elements
const categoryPillsEl = document.getElementById('category-pills');
const productsGridEl = document.getElementById('products-grid');
const resultsCountEl = document.getElementById('results-count');
const searchInputEl = document.getElementById('search-input');
const searchClearEl = document.getElementById('search-clear');

const cartCountEl = document.getElementById('cart-count');
const cartDrawerEl = document.getElementById('cart-drawer');
const btnQuoteCart = document.getElementById('btn-quote-cart');
const closeCartDrawer = document.getElementById('close-cart-drawer');
const cartEmptyMsg = document.getElementById('cart-empty-msg');
const cartItemsList = document.getElementById('cart-items-list');
const drawerSummary = document.getElementById('drawer-summary');
const summaryItemsCount = document.getElementById('summary-items-count');
const btnSendCartWhatsapp = document.getElementById('btn-send-cart-whatsapp');
const btnSendCartForm = document.getElementById('btn-send-cart-form');
const btnBrowseFromCart = document.getElementById('btn-browse-from-cart');

const productModalEl = document.getElementById('product-modal');
const closeProductModal = document.getElementById('close-product-modal');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductCode = document.getElementById('modal-product-code');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductSpecs = document.getElementById('modal-product-specs');
const modalProductTags = document.getElementById('modal-product-tags');
const modalBtnAddCart = document.getElementById('modal-btn-add-cart');
const modalBtnWhatsapp = document.getElementById('modal-btn-whatsapp');

const contactForm = document.getElementById('contact-form');
const contactRegionSelect = document.getElementById('contact-region');
const formStatusMsg = document.getElementById('form-status-msg');
const btnSubmitForm = document.getElementById('btn-submit-form');

const successModalEl = document.getElementById('success-modal');
const closeSuccessModal = document.getElementById('close-success-modal');
const btnCloseSuccess = document.getElementById('btn-close-success');
const successSummaryBox = document.getElementById('success-summary-box');

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
const mobileMenuClose = document.getElementById('mobile-menu-close');

// Global Helper for inline category selection
window.selectCategory = function(catId) {
  state.activeCategory = catId;
  renderCategories();
  renderProducts();
  const catalogSec = document.getElementById('catalogo');
  if (catalogSec) {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }
};

// Initialize Application
function init() {
  renderCategories();
  renderProducts();
  populateRegions();
  initSlider();
  setupEventListeners();
  updateCartUI();
}

// Populate Region Options in Contact Form
function populateRegions() {
  if (!contactRegionSelect) return;
  contactRegionSelect.innerHTML = '<option value="">Selecciona tu provincia / región de despacho...</option>';
  regions.forEach(reg => {
    const opt = document.createElement('option');
    opt.value = reg;
    opt.textContent = reg;
    contactRegionSelect.appendChild(opt);
  });
}

// Render Categories Pills
function renderCategories() {
  if (!categoryPillsEl) return;
  categoryPillsEl.innerHTML = categories.map(cat => `
    <button class="pill-btn ${state.activeCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
      <i class="fa-solid ${cat.icon}"></i> ${cat.name}
    </button>
  `).join('');

  categoryPillsEl.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.id;
      renderCategories();
      renderProducts();
    });
  });
}

// Filter Products
function getFilteredProducts() {
  return products.filter(prod => {
    const matchesCategory = state.activeCategory === 'all' || prod.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      prod.name.toLowerCase().includes(q) || 
      prod.description.toLowerCase().includes(q) || 
      prod.code.toLowerCase().includes(q) ||
      prod.tag.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
}

// Render Products Grid
function renderProducts() {
  if (!productsGridEl) return;
  const filtered = getFilteredProducts();
  
  if (filtered.length === 0) {
    productsGridEl.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px solid #E2E8F0;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: #CBD5E1; margin-bottom: 15px;"></i>
        <h3 style="margin-bottom: 8px;">No se encontraron productos KALIAG</h3>
        <p style="color: #64748B;">Intenta buscar con otros términos como "generador KALIAG", "bomba", "peke peke" o "fumigadora".</p>
      </div>
    `;
    if (resultsCountEl) resultsCountEl.textContent = '0 productos encontrados';
    return;
  }

  if (resultsCountEl) {
    resultsCountEl.textContent = `Mostrando ${filtered.length} de ${products.length} productos KALIAG European Industry`;
  }

  productsGridEl.innerHTML = filtered.map(prod => {
    const specKeys = Object.keys(prod.specs).slice(0, 2);
    const specsHtml = specKeys.map(k => `
      <div class="spec-line">
        <span>${k}:</span>
        <strong>${prod.specs[k]}</strong>
      </div>
    `).join('');

    const isAdded = state.cart.some(item => item.id === prod.id);

    return `
      <div class="product-card">
        <div class="product-image-box">
          <span class="badge-tag ${prod.badge ? 'highlight' : ''}">${prod.badge || prod.tag}</span>
          <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy" />
          <div class="product-rating">
            <i class="fa-solid fa-star"></i> ${prod.rating} (${prod.reviews})
          </div>
        </div>
        <div class="product-body">
          <span class="product-code">${prod.code}</span>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-desc">${prod.description}</p>
          <div class="product-specs-mini">
            ${specsHtml}
          </div>
          <div class="product-footer">
            <button class="btn btn-outline btn-sm btn-view-specs" data-id="${prod.id}">
              <i class="fa-solid fa-file-lines"></i> Ficha Técnica
            </button>
            <button class="btn ${isAdded ? 'btn-secondary' : 'btn-primary'} btn-sm btn-add-quote" data-id="${prod.id}">
              <i class="fa-solid ${isAdded ? 'fa-check' : 'fa-plus'}"></i> ${isAdded ? 'En Lista' : 'Cotizar'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach button events
  productsGridEl.querySelectorAll('.btn-view-specs').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.dataset.id));
  });

  productsGridEl.querySelectorAll('.btn-add-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleCartItem(btn.dataset.id);
      renderProducts();
    });
  });
}

// Cart Management & Drawer UI
function toggleCartItem(productId) {
  const existingIndex = state.cart.findIndex(i => i.id === productId);
  if (existingIndex > -1) {
    state.cart.splice(existingIndex, 1);
  } else {
    const prod = products.find(p => p.id === productId);
    if (prod) {
      state.cart.push({ ...prod, quantity: 1 });
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountEl) cartCountEl.textContent = totalCount;

  if (state.cart.length === 0) {
    if (cartEmptyMsg) cartEmptyMsg.classList.remove('hidden');
    if (cartItemsList) cartItemsList.innerHTML = '';
    if (drawerSummary) drawerSummary.style.display = 'none';
    if (btnSendCartWhatsapp) btnSendCartWhatsapp.disabled = true;
    if (btnSendCartForm) {
      btnSendCartForm.disabled = true;
      btnSendCartForm.style.opacity = '0.5';
    }
  } else {
    if (cartEmptyMsg) cartEmptyMsg.classList.add('hidden');
    if (drawerSummary) drawerSummary.style.display = 'block';
    if (summaryItemsCount) summaryItemsCount.textContent = totalCount;
    if (btnSendCartWhatsapp) btnSendCartWhatsapp.disabled = false;
    if (btnSendCartForm) {
      btnSendCartForm.disabled = false;
      btnSendCartForm.style.opacity = '1';
    }

    if (cartItemsList) {
      cartItemsList.innerHTML = state.cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>Cód: ${item.code}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button class="btn btn-outline btn-sm btn-qty-minus" data-id="${item.id}" style="padding: 2px 8px;">-</button>
            <span style="font-weight:700; font-size:0.9rem;">${item.quantity}</span>
            <button class="btn btn-outline btn-sm btn-qty-plus" data-id="${item.id}" style="padding: 2px 8px;">+</button>
            <button class="cart-item-remove" data-id="${item.id}" title="Quitar item"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      `).join('');

      cartItemsList.querySelectorAll('.btn-qty-minus').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(btn.dataset.id, -1));
      });

      cartItemsList.querySelectorAll('.btn-qty-plus').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(btn.dataset.id, 1));
      });

      cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleCartItem(btn.dataset.id);
          renderProducts();
        });
      });
    }
  }
}

function changeQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      toggleCartItem(productId);
      renderProducts();
    } else {
      updateCartUI();
    }
  }
}

// Product Detail Modal
function openProductModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  state.selectedProduct = prod;

  if (modalProductTitle) modalProductTitle.textContent = prod.name;
  if (modalProductImg) modalProductImg.src = prod.image;
  if (modalProductCode) modalProductCode.textContent = `CÓDIGO: ${prod.code}`;
  if (modalProductDesc) modalProductDesc.textContent = prod.description;

  if (modalProductTags) {
    modalProductTags.innerHTML = `
      <span class="badge-tag highlight">${prod.badge || prod.tag}</span>
      <span class="badge-tag" style="background:#0033A0;">12 Meses Garantía KALIAG</span>
    `;
  }

  if (modalProductSpecs) {
    modalProductSpecs.innerHTML = Object.keys(prod.specs).map(key => `
      <tr>
        <td>${key}</td>
        <td>${prod.specs[key]}</td>
      </tr>
    `).join('');
  }

  const isAdded = state.cart.some(item => item.id === prod.id);
  if (modalBtnAddCart) {
    modalBtnAddCart.innerHTML = `<i class="fa-solid ${isAdded ? 'fa-check' : 'fa-cart-plus'}"></i> ${isAdded ? 'En tu Lista' : 'Agregar a mi Cotización'}`;
  }

  if (productModalEl) productModalEl.classList.remove('hidden');
}

// Hero Carousel Logic
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    state.currentSlide = index;
  }

  function nextSlide() {
    let nextIdx = (state.currentSlide + 1) % slides.length;
    showSlide(nextIdx);
  }

  function prevSlide() {
    let prevIdx = (state.currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIdx);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetTimer();
    });
  });

  function startTimer() {
    state.slideInterval = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(state.slideInterval);
    startTimer();
  }

  startTimer();
}

// Event Listeners Setup
function setupEventListeners() {
  // Search Bar
  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearEl) {
        searchClearEl.classList.toggle('hidden', !state.searchQuery);
      }
      renderProducts();
    });
  }

  if (searchClearEl) {
    searchClearEl.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInputEl) searchInputEl.value = '';
      searchClearEl.classList.add('hidden');
      renderProducts();
    });
  }

  // Cart Drawer toggles
  if (btnQuoteCart) {
    btnQuoteCart.addEventListener('click', () => {
      if (cartDrawerEl) cartDrawerEl.classList.remove('hidden');
    });
  }

  if (closeCartDrawer) {
    closeCartDrawer.addEventListener('click', () => {
      if (cartDrawerEl) cartDrawerEl.classList.add('hidden');
    });
  }

  if (btnBrowseFromCart) {
    btnBrowseFromCart.addEventListener('click', () => {
      if (cartDrawerEl) cartDrawerEl.classList.add('hidden');
      window.location.hash = '#catalogo';
    });
  }

  // Fast WhatsApp quote for cart items
  if (btnSendCartWhatsapp) {
    btnSendCartWhatsapp.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      let text = `*SOLICITUD DE COTIZACIÓN - KALIAG EUROPEAN INDUSTRY*\n\nHola, deseo cotizar los siguientes equipos:\n`;
      state.cart.forEach((item, idx) => {
        text += `${idx + 1}. *${item.name}* (Cant: ${item.quantity}) - Cód: ${item.code}\n`;
      });
      text += `\n*Por favor indicarme disponibilidad y costo de envío a provincia.*`;
      
      const url = `https://wa.me/51979626611?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // Transfer Cart list to Contact Form
  if (btnSendCartForm) {
    btnSendCartForm.addEventListener('click', () => {
      if (cartDrawerEl) cartDrawerEl.classList.add('hidden');
      const msgArea = document.getElementById('contact-message');
      if (msgArea && state.cart.length > 0) {
        let text = `Deseo cotizar los siguientes equipos KALIAG:\n`;
        state.cart.forEach((item, idx) => {
          text += `- ${item.name} (Cantidad: ${item.quantity}, Cód: ${item.code})\n`;
        });
        msgArea.value = text;
      }
    });
  }

  // Product Modal actions
  if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
      if (productModalEl) productModalEl.classList.add('hidden');
    });
  }

  if (modalBtnAddCart) {
    modalBtnAddCart.addEventListener('click', () => {
      if (state.selectedProduct) {
        toggleCartItem(state.selectedProduct.id);
        renderProducts();
        openProductModal(state.selectedProduct.id);
      }
    });
  }

  if (modalBtnWhatsapp) {
    modalBtnWhatsapp.addEventListener('click', () => {
      if (state.selectedProduct) {
        const text = `Hola KALIAG European Industry, deseo cotizar el producto: *${state.selectedProduct.name}* (Código: ${state.selectedProduct.code}). Por favor brindar ficha técnica y precio.`;
        window.open(`https://wa.me/51979626611?text=${encodeURIComponent(text)}`, '_blank');
      }
    });
  }

  // Mobile Menu Drawer
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('hidden');
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.add('hidden');
    });
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.add('hidden');
    });
  });

  // Fast WhatsApp buttons in Hero slides
  document.querySelectorAll('.btn-fast-wa').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query || 'Hola KALIAG European Industry, solicito cotización de equipos';
      window.open(`https://wa.me/51979626611?text=${encodeURIComponent(query)}`, '_blank');
    });
  });

  // Success Modal closing
  if (closeSuccessModal) {
    closeSuccessModal.addEventListener('click', () => {
      if (successModalEl) successModalEl.classList.add('hidden');
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      if (successModalEl) successModalEl.classList.add('hidden');
    });
  }

  // Form submission handler
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      if (btnSubmitForm) {
        btnSubmitForm.disabled = true;
        btnSubmitForm.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Procesando Cotización KALIAG...`;
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        showSuccessModal(data);
        contactForm.reset();
      } catch (err) {
        showSuccessModal(data);
        contactForm.reset();
      } finally {
        if (btnSubmitForm) {
          btnSubmitForm.disabled = false;
          btnSubmitForm.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Enviar Cotización Ahora`;
        }
      }
    });
  }
}

function showSuccessModal(data) {
  if (successSummaryBox) {
    successSummaryBox.innerHTML = `
      <div style="background:#F8FAFC; padding:14px; border-radius:8px; border:1px solid #E2E8F0; font-size:0.88rem; margin-top:12px;">
        <p><strong>Cliente:</strong> ${data.name || 'Cliente KALIAG'}</p>
        <p><strong>Teléfono / WhatsApp:</strong> ${data.phone || '--'}</p>
        <p><strong>Región de Destino:</strong> ${data.region || 'Despacho Nacional'}</p>
        <p><strong>Consulta:</strong> ${data.type || 'Cotización KALIAG European Industry'}</p>
        <p style="margin-top:6px; font-size:0.82rem; color:#64748B;">Un representante de ventas KALIAG te contactará por WhatsApp/teléfono para enviarte la propuesta técnica y comercial.</p>
      </div>
    `;
  }
  if (successModalEl) successModalEl.classList.remove('hidden');
}

// Run application on load
document.addEventListener('DOMContentLoaded', init);

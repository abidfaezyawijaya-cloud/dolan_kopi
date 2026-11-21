/**
 * DOLAN KOPI — Interactive Core Script
 * Crafted with care for Dolan Kopi Cikupa, Tangerang
 */

// Phone and Map Constants
const PHONE_NUMBER = '6281198895355';
const PHONE_DISPLAY = '0811-9889-5355';
const ADDRESS_TEXT = 'Jl. Verdi Timur No.1 Blok G8, Dukuh, Kec. Cikupa, Kabupaten Tangerang, Banten 15710';
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/ythFFxaQsXjWjhJi8';

// Menu Items Database (Realistic, Rp 25.000 - Rp 50.000)
const MENU_ITEMS = [
  {
    id: 'm1',
    name: 'Dolan Aren Latte',
    category: 'signature',
    price: 28000,
    tag: 'Best Seller',
    tagColor: 'bg-brand-caramel text-white',
    desc: 'Espresso blend ganda, susu segar creamy, dan gula aren organik manis legit.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm2',
    name: 'Buttercream Macchiato',
    category: 'signature',
    price: 34000,
    tag: 'Rekomendasi Barista',
    tagColor: 'bg-amber-600 text-white',
    desc: 'Espresso aromatic dengan lapisan buttercream kental gurih manis khas Dolan.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm3',
    name: 'Pandan Cold Brew Latte',
    category: 'signature',
    price: 32000,
    tag: 'Wangi & Segar',
    tagColor: 'bg-emerald-700 text-white',
    desc: 'Seduhan dingin 16 jam dipadu aroma daun pandan alami dan susu lembut.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm4',
    name: 'Americano / Long Black',
    category: 'coffee',
    price: 25000,
    tag: 'Klasik',
    tagColor: 'bg-stone-700 text-white',
    desc: 'Espresso murni dengan air panas atau es batu. Karakter cokelat dan kacang panggang.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm5',
    name: 'Cafe Latte / Flat White',
    category: 'coffee',
    price: 28000,
    tag: 'Favorit',
    tagColor: 'bg-stone-700 text-white',
    desc: 'Tekstur microfoam susu velvety dipadu espresso balanced, lembut dan hangat.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm6',
    name: 'Manual Brew V60 Pour Over',
    category: 'coffee',
    price: 32000,
    tag: 'Single Origin',
    tagColor: 'bg-amber-700 text-white',
    desc: 'Seduhan manual biji kopi pilihan (Gayo Wine, Kerinci, Flores Bajawa) dengan filter kertas jepang.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm7',
    name: 'Kyoto Artisan Matcha Latte',
    category: 'noncoffee',
    price: 30000,
    tag: 'Umami Rich',
    tagColor: 'bg-emerald-800 text-white',
    desc: 'Bubuk green tea murni dari Jepang, diseduh tradisional dengan susu oat/fresh milk.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm8',
    name: 'Berry Yuzu Sparkling Fizz',
    category: 'noncoffee',
    price: 29000,
    tag: 'Segar Banget',
    tagColor: 'bg-rose-600 text-white',
    desc: 'Kombinasi asam citrus yuzu Jepang, potongan berry asli, soda dingin, dan daun mint.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm9',
    name: 'Cireng Crispy Bumbu Rujak',
    category: 'bites',
    price: 25000,
    tag: 'Camilan Wajib',
    tagColor: 'bg-orange-700 text-white',
    desc: 'Cireng kenyal renyah di luar, disajikan dengan sambal rujak gula aren pedas manis.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm10',
    name: 'Dolan Truffle Cheese Fries',
    category: 'bites',
    price: 28000,
    tag: 'Favorit Kumpul',
    tagColor: 'bg-amber-600 text-white',
    desc: 'Kentang goreng crinkle cut dengan semprotan minyak truffle wangi dan parutan keju gurih.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm11',
    name: 'Croissant Almond Butter Toast',
    category: 'bites',
    price: 32000,
    tag: 'Bakes Fresh',
    tagColor: 'bg-amber-800 text-white',
    desc: 'Pastry renyah berlapis dengan taburan kacang almond panggang dan lelehan butter harum.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm12',
    name: 'Spaghetti Aglio Olio Smoked Beef',
    category: 'bites',
    price: 42000,
    tag: 'Makan Kenyang',
    tagColor: 'bg-red-800 text-white',
    desc: 'Spaghetti al dente dengan irisan daging sapi asap, bawang putih cincang, cabai kering & parsley.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80'
  }
];

// User Order Cart State
let orderCart = {};

// Current active category filter
let activeCategory = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderLiveStatus();
  renderMenuItems();
  setupCategoryTabs();
  setupSearchListener();
  setupPartySizeEstimator();
  updateEstimatorResult();
  
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Live status update interval every 30 seconds
  setInterval(renderLiveStatus, 30000);
});

/**
 * 1. LIVE OPEN/CLOSE OPERATIONAL STATUS
 * Based on user prompt: Buka mulai 10.30 WIB
 */
function renderLiveStatus() {
  const now = new Date();
  
  // Calculate WIB time (UTC+7)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  
  const hours = wibDate.getHours();
  const minutes = wibDate.getMinutes();
  const totalMinutes = (hours * 60) + minutes;

  // Schedule: 10:30 WIB to 22:30 WIB (or 23:00 on Fri-Sun)
  const day = wibDate.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const openMinutes = (10 * 60) + 30; // 10:30 WIB -> 630 mins
  const closeMinutes = (day === 5 || day === 6 || day === 0) ? (23 * 60) : (22 * 60) + 30; // 23:00 or 22:30

  const isOpen = (totalMinutes >= openMinutes && totalMinutes < closeMinutes);

  const statusTextEl = document.getElementById('statusText');
  const statusDotEl = document.getElementById('statusDot');
  const statusPingEl = document.getElementById('statusPing');
  const mobileStatusEl = document.getElementById('mobileStatusText');

  const closeTimeStr = (day === 5 || day === 6 || day === 0) ? '23:00' : '22:30';

  if (isOpen) {
    if (statusTextEl) statusTextEl.innerHTML = `<span class="text-emerald-700">Buka Sekarang</span> · Tutup ${closeTimeStr} WIB`;
    if (mobileStatusEl) mobileStatusEl.innerHTML = `🟢 Buka Sekarang · Tutup ${closeTimeStr} WIB`;
    if (statusDotEl) statusDotEl.className = 'relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500';
    if (statusPingEl) statusPingEl.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75';
  } else {
    let nextMsg = 'Buka hari ini pukul 10:30 WIB';
    if (totalMinutes >= closeMinutes) {
      nextMsg = 'Buka besok pukul 10:30 WIB';
    }
    if (statusTextEl) statusTextEl.innerHTML = `<span class="text-amber-700">Tutup Sekarang</span> · ${nextMsg}`;
    if (mobileStatusEl) mobileStatusEl.innerHTML = `🟡 Tutup Sekarang · ${nextMsg}`;
    if (statusDotEl) statusDotEl.className = 'relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500';
    if (statusPingEl) statusPingEl.className = 'hidden';
  }
}

/**
 * 2. RENDER MENU ITEMS
 */
function renderMenuItems() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = (activeCategory === 'all' || item.category === activeCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center">
        <div class="w-12 h-12 rounded-full bg-brand-sand/50 text-brand-muted mx-auto flex items-center justify-center mb-3">
          <i data-lucide="coffee" class="w-6 h-6"></i>
        </div>
        <h4 class="font-display font-bold text-base text-brand-espresso">Menu tidak ditemukan</h4>
        <p class="text-xs text-brand-muted mt-1">Coba cari dengan kata kunci lain seperti "kopi", "matcha", atau "cireng".</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const qty = orderCart[item.id] || 0;
    const formattedPrice = formatRupiah(item.price);

    return `
      <div class="group bg-white rounded-2xl border border-brand-coffee/10 overflow-hidden p-4 shadow-sm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between" id="card-${item.id}">
        <div>
          <!-- Thumbnail & Tag -->
          <div class="aspect-[4/3] rounded-xl overflow-hidden bg-brand-oat mb-3 relative">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              loading="lazy"
            />
            <span class="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.tagColor} shadow-sm">
              ${item.tag}
            </span>
          </div>

          <!-- Title & Price -->
          <div class="flex items-start justify-between gap-2 mb-1">
            <h3 class="font-display font-bold text-sm text-brand-espresso group-hover:text-brand-caramel transition-colors">
              ${item.name}
            </h3>
            <span class="font-bold text-xs text-brand-caramel whitespace-nowrap">
              ${formattedPrice}
            </span>
          </div>

          <p class="text-brand-muted text-[11px] leading-relaxed line-clamp-2 mb-3">
            ${item.desc}
          </p>
        </div>

        <!-- Add to Cart / Order Action -->
        <div class="pt-2 border-t border-brand-coffee/5 flex items-center justify-between">
          <span class="text-[10px] font-medium text-brand-muted">
            Porsi Segar
          </span>

          <div class="flex items-center gap-1.5" id="btn-group-${item.id}">
            ${qty > 0 ? `
              <div class="flex items-center bg-brand-oat rounded-lg p-0.5 border border-brand-coffee/10">
                <button onclick="decrementItem('${item.id}')" class="w-6 h-6 rounded flex items-center justify-center hover:bg-white text-xs font-bold text-brand-espresso">-</button>
                <span class="px-2 text-xs font-bold text-brand-espresso">${qty}</span>
                <button onclick="incrementItem('${item.id}')" class="w-6 h-6 rounded flex items-center justify-center hover:bg-white text-xs font-bold text-brand-espresso">+</button>
              </div>
            ` : `
              <button onclick="incrementItem('${item.id}')" class="px-3 py-1.5 rounded-lg bg-brand-espresso hover:bg-brand-caramel text-brand-cream text-xs font-bold flex items-center gap-1 transition active:scale-95 shadow-sm">
                <span>+ Pesan</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

/**
 * 3. CART ACTIONS & WHATSAPP GENERATOR
 */
function incrementItem(id) {
  orderCart[id] = (orderCart[id] || 0) + 1;
  updateOrderTray();
  renderMenuItems();
}

function decrementItem(id) {
  if (orderCart[id]) {
    orderCart[id] -= 1;
    if (orderCart[id] <= 0) {
      delete orderCart[id];
    }
  }
  updateOrderTray();
  renderMenuItems();
}

function clearOrderTray() {
  orderCart = {};
  updateOrderTray();
  renderMenuItems();
  showToast('Pesanan dibersihkan');
}

function updateOrderTray() {
  const tray = document.getElementById('orderTray');
  const countEl = document.getElementById('trayItemCount');
  const priceEl = document.getElementById('trayTotalPrice');

  let totalItems = 0;
  let totalPrice = 0;

  for (const [id, qty] of Object.entries(orderCart)) {
    const item = MENU_ITEMS.find(m => m.id === id);
    if (item && qty > 0) {
      totalItems += qty;
      totalPrice += (item.price * qty);
    }
  }

  if (totalItems > 0) {
    if (tray) tray.classList.remove('hidden');
    if (countEl) countEl.innerText = `${totalItems}x`;
    if (priceEl) priceEl.innerText = formatRupiah(totalPrice);
  } else {
    if (tray) tray.classList.add('hidden');
  }
}

function checkoutOrderWhatsApp() {
  let message = `Halo Dolan Kopi (${PHONE_DISPLAY}), saya ingin pesan via website:\n\n`;
  let totalPrice = 0;

  for (const [id, qty] of Object.entries(orderCart)) {
    const item = MENU_ITEMS.find(m => m.id === id);
    if (item && qty > 0) {
      const subtotal = item.price * qty;
      totalPrice += subtotal;
      message += `• ${qty}x ${item.name} (${formatRupiah(subtotal)})\n`;
    }
  }

  message += `\n*Total Estimasi: ${formatRupiah(totalPrice)}*\n`;
  message += `\nLokasi: Meja / Takeaway di Jl. Verdi Timur No.1 Blok G8 Citra Raya.\nMohon info ketersediaan menu. Terima kasih!`;

  const encodedUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

/**
 * 4. SEARCH & CATEGORY FILTERING
 */
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.menu-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-cat');
      renderMenuItems();
    });
  });
}

function setupSearchListener() {
  const input = document.getElementById('menuSearchInput');
  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderMenuItems();
    });
  }
}

/**
 * 5. ESTIMATOR BUDGET NONGKRONG (Rp 25.000 - Rp 50.000)
 */
let currentPartySize = 1;
let currentStyle = 'quick';

function setupPartySizeEstimator() {
  const btns = document.querySelectorAll('.party-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPartySize = parseInt(btn.getAttribute('data-size'), 10);
      updateEstimatorResult();
    });
  });

  const styleRadios = document.querySelectorAll('input[name="nongkrongStyle"]');
  styleRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentStyle = e.target.value;
      updateEstimatorResult();
    });
  });
}

function updateEstimatorResult() {
  const totalDisplay = document.getElementById('estTotalDisplay');
  const perPaxDisplay = document.getElementById('estPerPaxDisplay');
  const tagEl = document.getElementById('estTag');
  const detailsEl = document.getElementById('estPackageDetails');

  let minPerPax = 25000;
  let maxPerPax = 35000;
  let tagText = 'Nongkrong Hemat';
  let sampleItems = [];

  if (currentStyle === 'quick') {
    minPerPax = 28000;
    maxPerPax = 38000;
    tagText = 'Ngopi & Nyemil Santai';
    sampleItems = [
      { name: 'Dolan Aren Latte / V60', price: 28000 },
      { name: 'Cireng Crispy Rujak / Toast', price: 25000 }
    ];
  } else if (currentStyle === 'wfc') {
    minPerPax = 35000;
    maxPerPax = 45000;
    tagText = 'WFC Produktif (3-4 Jam)';
    sampleItems = [
      { name: 'Americano / Matcha Latte', price: 28000 },
      { name: 'Truffle Fries & Free Wi-Fi/Colokan', price: 28000 }
    ];
  } else if (currentStyle === 'meal') {
    minPerPax = 42000;
    maxPerPax = 50000;
    tagText = 'Makan Kenyang & Ngopi';
    sampleItems = [
      { name: 'Spaghetti Aglio Olio Smoked Beef', price: 42000 },
      { name: 'Berry Yuzu / Dolan Aren Ice', price: 28000 }
    ];
  }

  const totalMin = minPerPax * currentPartySize;
  const totalMax = maxPerPax * currentPartySize;

  if (totalDisplay) {
    totalDisplay.innerText = `${formatRupiah(totalMin)} – ${formatRupiah(totalMax)}`;
  }
  if (perPaxDisplay) {
    perPaxDisplay.innerText = `≈ ${formatRupiah(minPerPax)} – ${formatRupiah(maxPerPax)} per orang (${currentPartySize} orang)`;
  }
  if (tagEl) {
    tagEl.innerText = tagText;
  }
  if (detailsEl) {
    detailsEl.innerHTML = sampleItems.map(item => `
      <div class="flex items-center justify-between text-brand-sand/90">
        <span>✨ ${item.name}</span>
        <span class="font-semibold">${formatRupiah(item.price)}</span>
      </div>
    `).join('') + `
      <div class="text-[11px] text-brand-sand/60 italic pt-1 border-t border-brand-coffee/30">
        *Termasuk fasilitas Wi-Fi cepat, stopkontak, dan ruangan ber-AC/outdoor.
      </div>
    `;
  }
}

function shareEstimateToWA() {
  const totalDisplay = document.getElementById('estTotalDisplay').innerText;
  const message = `Halo Dolan Kopi, saya berencana datang untuk ${currentPartySize} orang dengan tipe '${currentStyle}' (estimasi budget ${totalDisplay}). Apakah meja tersedia untuk hari ini?`;
  sendPredefinedWA(message);
}

/**
 * 6. WHATSAPP MODAL & FAST CONTACT
 */
function openWhatsAppModal() {
  const modal = document.getElementById('waModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeWhatsAppModal() {
  const modal = document.getElementById('waModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function sendPredefinedWA(text) {
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  closeWhatsAppModal();
}

/**
 * 7. UTILITIES: COPY ADDRESS & TOAST
 */
function copyAddressToClipboard() {
  navigator.clipboard.writeText(ADDRESS_TEXT).then(() => {
    const copyBtnText = document.getElementById('copyBtnText');
    if (copyBtnText) copyBtnText.innerText = 'Tersalin!';
    showToast('Alamat berhasil disalin ke clipboard');
    setTimeout(() => {
      if (copyBtnText) copyBtnText.innerText = 'Salin Alamat';
    }, 2500);
  }).catch(() => {
    showToast('Gagal menyalin alamat');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
  
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
  }, 3000);
}

/**
 * 8. MOBILE MENU TOGGLE
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleMobileMenu);

/**
 * 9. FAQ ACCORDION TOGGLE
 */
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const content = item.querySelector('.faq-content');
  const icon = button.querySelector('.faq-icon');

  const isClosed = content.classList.contains('hidden');

  // Close all others first
  document.querySelectorAll('.faq-item').forEach(otherItem => {
    otherItem.querySelector('.faq-content').classList.add('hidden');
    otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
  });

  if (isClosed) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  }
}

/**
 * 10. FORMAT RUPIAH
 */
function formatRupiah(number) {
  return 'Rp ' + Number(number).toLocaleString('id-ID');
}

import * as pdfjsLib from './assets/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.mjs';

const categoryMeta = {
  'Vina': { prefix: 'VIN', colors: ['#6e1f2d', '#b8904f'] },
  'Kafa i čajevi': { prefix: 'KAF', colors: ['#6b1e1e', '#c98f54'] },
  'Žestoka pića': { prefix: 'ALK', colors: ['#202b27', '#c09047'] },
  'Sirupi i mikseri': { prefix: 'SIR', colors: ['#b64353', '#eb9c56'] },
  'Bezalkoholna pića': { prefix: 'SOK', colors: ['#1d5579', '#62a6aa'] },
  'Voda': { prefix: 'VOD', colors: ['#195b69', '#6bb9b7'] },
};

const sourceProducts = {
  'Vina': [
    ['Belguardo Vermentino Toscana Bianco', 'Mazzei', '6 × 0,75 l', 14.90, 'wine-belguardo.png', 'Svježe i mineralno bijelo vino sa aromama žute breskve.'],
    ['Azisa Sicilia Bianco', 'Mazzei', '6 × 0,75 l', 12.40, 'wine-azisa.png', 'Mirisno sicilijansko bijelo vino srednjeg tijela sa cvjetnim i citrusnim notama.'],
    ['Pinot Grigio Delle Venezie', 'Salvaterra', '6 × 0,75 l', 9.80, 'wine-pinot-salvaterra.png', 'Elegantno, lagano i osvježavajuće vino sa voćnom završnicom.'],
    ['Pinot Grigio IGT Corte Antica', 'Corte Antica', '6 × 0,75 l', 8.90, 'wine-pinot-antica.png'],
    ['Pinot Grigio Conti Formentini', 'Gruppo Italiano Vini', '6 × 0,75 l', 11.30, 'wine-conti.png'],
    ["Trebbiano d'Abruzzo Gianni Masciarelli", 'Masciarelli', '6 × 0,75 l', 10.60],
    ['Chardonnay Marina Cvetić', 'Masciarelli', '6 × 0,75 l', 27.80, 'wine-chardonnay-marina.png'],
    ['Trebbiano Marina Cvetić', 'Masciarelli', '6 × 0,75 l', 26.50],
    ['Chablis 1er Cru', 'Les Grands Chais de France', '6 × 0,75 l', 31.90, 'wine-chablis.png'],
    ['Calvet Chablis', 'Calvet', '6 × 0,75 l', 21.70],
    ['Calvet Chardonnay', 'Calvet', '6 × 0,75 l', 8.60, 'wine-calvet-chardonnay.png'],
    ['Sancerre', 'Les Grands Chais de France', '6 × 0,75 l', 24.90],
    ['Pouilly Fumé', 'Les Grands Chais de France', '6 × 0,75 l', 26.90],
    ['Arthur Metz Riesling Alsace', 'Arthur Metz', '6 × 0,75 l', 11.70, 'wine-riesling.png'],
    ['770 Miles Chardonnay', 'Les Grands Chais de France', '6 × 0,75 l', 7.90],
    ['JP Chenet Colombard Chardonnay', 'JP Chenet', '6 × 0,75 l', 6.80],
    ['JP Reserve Chardonnay', 'JP Chenet', '6 × 0,75 l', 9.90, 'wine-jp-reserve.png'],
    ["Baron d'Arignac Blanc", "Baron d'Arignac", '6 × 0,75 l', 5.90, 'wine-baron.png'],
    ['Bicicleta Chardonnay', 'Cono Sur', '6 × 0,75 l', 8.30],
    ['Bicicleta Sauvignon Blanc', 'Cono Sur', '6 × 0,75 l', 8.30],
    ['Poggio Badiola Rosso Toscana', 'Mazzei', '6 × 0,75 l', 13.70],
    ['Fonterutoli Chianti Classico', 'Mazzei', '6 × 0,75 l', 22.80],
    ['Ser Lapo Chianti Classico Riserva', 'Mazzei', '6 × 0,75 l', 29.40],
    ['Castello Fonterutoli Gran Selezione', 'Mazzei', '6 × 0,75 l', 42.90],
    ['Concerto Rosso Toscana IGT', 'Mazzei', '6 × 0,75 l', 58.00],
    ['Philip Mazzei Toscana', 'Mazzei', '6 × 0,75 l', 39.50],
    ['Siepi Toscana Rosso', 'Mazzei', '6 × 0,75 l', 86.00],
    ['Amarone DOC Classico', 'Salvaterra', '6 × 0,75 l', 28.90],
    ['Ripasso DOC Superiore Corte Antica', 'Corte Antica', '6 × 0,75 l', 14.60],
    ['Villa Marcello Prosecco Extra Dry', 'Mazzei', '6 × 0,75 l', 12.90],
    ['Prosecco DOC Extra Dry', 'Salvaterra', '6 × 0,75 l', 9.90],
    ['Telmont Reserve Brut', 'Champagne Telmont', '6 × 0,75 l', 44.00],
  ],
  'Kafa i čajevi': [
    ['Kafa u zrnu 1862 Premium', 'Julius Meinl', '3 kg', 58.40, 'coffee-000.png', 'Premijum mješavina 100% arabike za zahtjevne HoReCa objekte.'],
    ['Crema Espresso', 'Julius Meinl', '1 kg', 18.90, 'coffee-002.png', 'Mješavina arabike i robuste sa bogatom, postojanom kremom.'],
    ['India Venezia', 'Julius Meinl', '1 kg', 17.80, 'coffee-004.png'],
    ['Del Moro', 'Julius Meinl', '1 kg', 15.60, 'coffee-006.png'],
    ['Organic Nana čaj', 'Julius Meinl', '20 kesica', 5.70],
    ['Premium Earl Grey čaj', 'Julius Meinl', '25 kesica', 6.90],
  ],
  'Žestoka pića': [
    ['Glen Scanlan Reserve Whisky', 'Glen Scanlan', '6 × 0,70 l', 14.70, 'glen-scanlan.png'],
    ['Russian Standard Vodka', 'Russian Standard', '6 × 0,70 l', 13.90],
    ['Roberto Cavalli Vodka', 'Roberto Cavalli', '6 × 0,70 l', 28.80],
    ['Grey Goose Vodka', 'Grey Goose', '6 × 0,70 l', 31.50],
    ['Charles Gabriel VSOP Cognac', 'Charles Gabriel', '6 × 0,70 l', 29.90],
    ['Calvados Boulard VSOP', 'Boulard', '6 × 0,70 l', 32.40],
    ['San Luis Gold Tequila', 'San Luis', '6 × 0,70 l', 13.20],
    ['Beneva Mezcal', 'Beneva', '6 × 0,70 l', 36.50],
    ["Chairman's Reserve Spiced Rum", "Chairman's Reserve", '6 × 0,70 l', 22.80],
    ['Clement Select Barrel Rum', 'Clément', '6 × 0,70 l', 27.60],
    ['Mombasa Dry Gin', 'Mombasa Club', '6 × 0,70 l', 24.90],
    ['Mombasa Rose Gin', 'Mombasa Club', '6 × 0,70 l', 25.90],
    ['Dobra priča Dunjevača', 'Dobra priča', '6 × 0,75 l', 18.50],
    ['Dobra priča Kajsijevača', 'Dobra priča', '6 × 0,75 l', 18.50],
    ['Coconut Liqueur', 'Demandis', '6 × 0,70 l', 9.70],
    ['Blue Curaçao Liqueur', 'Demandis', '6 × 0,70 l', 9.40],
    ['Yachting Piña Colada', 'Yachting', '6 × 0,70 l', 10.20],
    ['Black Head Whisky', 'Black Head', '6 × 0,70 l', 7.90],
  ],
  'Sirupi i mikseri': [
    ['Finest Call Šećerni sirup', 'Finest Call', '12 × 1 l', 8.40, 'syrup-000.png'],
    ['Finest Call Zova sirup', 'Finest Call', '12 × 1 l', 9.10, 'syrup-002.png'],
    ['Finest Call Lime Cordial', 'Finest Call', '12 × 1 l', 9.30, 'syrup-004.png'],
    ['Finest Call Piña Colada', 'Finest Call', '12 × 1 l', 9.30, 'syrup-006.png'],
    ['Finest Call Grenadine', 'Finest Call', '12 × 1 l', 9.20, 'syrup-008.png'],
    ['Finest Call Sweet & Sour', 'Finest Call', '12 × 1 l', 9.40, 'syrup-010.png'],
    ['Single Pressed Lime Juice', 'Finest Call', '12 × 1 l', 8.90, 'syrup-012.png'],
    ['Single Pressed Lemon Juice', 'Finest Call', '12 × 1 l', 8.90, 'syrup-014.png'],
    ['REAL Jagoda pire', 'REAL Cocktail Ingredients', '6 × 0,50 l', 11.60],
    ['REAL Marakuja pire', 'REAL Cocktail Ingredients', '6 × 0,50 l', 12.10],
    ['REAL Mango pire', 'REAL Cocktail Ingredients', '6 × 0,50 l', 11.80],
    ['REAL Kokos pire', 'REAL Cocktail Ingredients', '6 × 0,50 l', 11.70],
  ],
  'Bezalkoholna pića': [
    ['J. Gasco Indian Tonic', 'J. Gasco', '24 × 0,20 l', 20.40],
    ['J. Gasco Ginger Beer', 'J. Gasco', '24 × 0,20 l', 20.40],
    ['Aloe Vera Original', 'Aloe Flame', '20 × 0,50 l', 23.80],
    ['Aloe Vera Acai', 'Aloe Flame', '20 × 0,50 l', 23.80],
    ['Red Bull Standard', 'Red Bull', '24 × 0,25 l', 31.20, 'redbull.png'],
    ['Red Bull Sugar Free', 'Red Bull', '24 × 0,25 l', 31.20],
    ['Red Bull Summer Edition', 'Red Bull', '24 × 0,25 l', 32.40],
    ['Happy Day Narandža 100%', 'Rauch', '12 × 1 l', 24.60, 'happyday.png'],
    ['Happy Day Jabuka 100%', 'Rauch', '12 × 1 l', 21.80],
    ['Happy Day Ananas 100%', 'Rauch', '12 × 1 l', 25.40],
    ['Happy Day Višnja 100%', 'Rauch', '12 × 1 l', 24.90],
    ['Rauch Jagoda flašica', 'Rauch', '24 × 0,20 l', 22.80, 'rauch.png'],
    ['Rauch Breskva flašica', 'Rauch', '24 × 0,20 l', 22.80],
    ['Rauch Borovnica flašica', 'Rauch', '24 × 0,20 l', 23.60],
    ['Bravo Multivitamin', 'Rauch', '12 × 1 l', 15.90],
    ['Yippy Breskva', 'Rauch', '12 × 0,33 l', 10.80],
    ['My Tea Breskva', 'Rauch', '12 × 0,50 l', 12.40],
    ['My Tea Limun', 'Rauch', '12 × 0,50 l', 12.40],
    ['Caffemio Macchiato', 'Rauch', '12 × 0,25 l', 15.20],
    ['Caffemio Cappuccino', 'Rauch', '12 × 0,25 l', 15.20],
  ],
  'Voda': [
    ['Golijska Bistrica gazirana PVC', 'Golijska Bistrica', '12 × 0,50 l', 5.80, 'water.png'],
    ['Golijska Bistrica gazirana staklo', 'Golijska Bistrica', '24 × 0,25 l', 9.60],
    ['Iva negazirana PVC', 'Iva', '12 × 0,50 l', 5.60],
    ['Iva negazirana staklo', 'Iva', '24 × 0,25 l', 9.20],
    ['Iva alkalna voda A8.8', 'Iva', '12 × 0,50 l', 7.40],
    ['Iva alkalna voda A8.8', 'Iva', '6 × 2 l', 8.10],
  ],
};

const stockPattern = [72, 44, 19, 31, 8, 56, 22, 0, 64, 13, 39, 26, 91, 17, 48, 6];
const products = [];
Object.entries(sourceProducts).forEach(([category, entries]) => {
  entries.forEach((entry, categoryIndex) => {
    const globalIndex = products.length;
    const [name, brand, pack, price, image, description] = entry;
    products.push({
      id: globalIndex + 1,
      sku: `MON-${categoryMeta[category].prefix}-${String(categoryIndex + 1).padStart(3, '0')}`,
      name, brand, pack, price, category,
      image: image ? `./assets/${image}` : null,
      description: description || `${name} iz Montecco distributivnog portfolija za profesionalne kupce i HoReCa partnere.`,
      stock: stockPattern[globalIndex % stockPattern.length],
      favorite: [0, 4, 10, 36, 40, 63].includes(globalIndex),
      min: 1,
    });
  });
});

const initialOrders = [
  { id: 'MN-260907-184', partner: 'Hotel Splendid', initials: 'HS', date: '07. sep 2026.', items: 8, total: 487.20, status: 'processing', label: 'U obradi' },
  { id: 'MN-260907-183', partner: 'Voli Trade', initials: 'VT', date: '07. sep 2026.', items: 14, total: 1264.80, status: 'review', label: 'Provjera stavke' },
  { id: 'MN-260906-179', partner: 'Restoran Porto', initials: 'RP', date: '06. sep 2026.', items: 6, total: 326.40, status: 'delivered', label: 'Isporučeno' },
  { id: 'MN-260906-176', partner: 'HDL Laković', initials: 'HD', date: '06. sep 2026.', items: 21, total: 1948.60, status: 'processing', label: 'Spremno za isporuku' },
  { id: 'MN-260905-171', partner: 'Hotel Cattaro', initials: 'HC', date: '05. sep 2026.', items: 11, total: 746.90, status: 'delivered', label: 'Isporučeno' },
  { id: 'MN-260905-168', partner: 'Idea CG', initials: 'IC', date: '05. sep 2026.', items: 18, total: 1512.30, status: 'delivered', label: 'Isporučeno' },
];

const partnerOrders = [
  { id: 'MN-260824-112', date: '24. avg 2026.', items: ['MON-KAF-002', 'MON-SOK-005', 'MON-SOK-008'], quantities: [4, 3, 2], total: 199.20, status: 'delivered', label: 'Isporučeno' },
  { id: 'MN-260807-064', date: '07. avg 2026.', items: ['MON-VIN-001', 'MON-VIN-003', 'MON-SIR-003'], quantities: [3, 4, 2], total: 102.00, status: 'delivered', label: 'Isporučeno' },
  { id: 'MN-260716-021', date: '16. jul 2026.', items: ['MON-ALK-001', 'MON-SOK-012'], quantities: [2, 5], total: 143.40, status: 'delivered', label: 'Isporučeno' },
];

const state = {
  mode: 'admin',
  adminSection: 'dashboard',
  partnerSection: 'home',
  partnerAuthenticated: false,
  search: '',
  category: 'Sve kategorije',
  sort: 'featured',
  cart: new Map(),
  favorites: new Set(products.filter(p => p.favorite).map(p => p.sku)),
  orders: [...initialOrders],
  poResult: null,
};

const app = document.querySelector('#app');
const modalRoot = document.querySelector('#modal-root');
const toastRoot = document.querySelector('#toast-root');

function esc(value = '') {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[c]));
}

function normalize(value = '') {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function money(value) {
  return new Intl.NumberFormat('sr-ME', { style: 'currency', currency: 'EUR' }).format(value);
}

function icons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
}

function cartCount() {
  return [...state.cart.values()].reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return [...state.cart.entries()].reduce((sum, [sku, qty]) => {
    const product = products.find(item => item.sku === sku);
    return sum + (product ? product.price * qty : 0);
  }, 0);
}

function statusBadge(order) {
  return `<span class="status ${esc(order.status)}">${esc(order.label)}</span>`;
}

function shellNavigation() {
  const admin = [
    ['dashboard', 'layout-dashboard', 'Pregled'],
    ['orders', 'shopping-bag', 'Porudžbine', '6'],
    ['products', 'package', 'Proizvodi'],
    ['partners', 'users', 'Partneri'],
    ['documents', 'file-search', 'Dokumenti', '2'],
    ['integrations', 'refresh-cw', 'ERP i integracije'],
  ];
  const partner = [
    ['home', 'home', 'Početna'],
    ['catalog', 'library', 'Katalog'],
    ['quick', 'list-plus', 'Brza porudžbina'],
    ['orders', 'history', 'Moje porudžbine'],
    ['documents', 'file-up', 'Uvezi porudžbenicu'],
    ['favorites', 'heart', 'Omiljeni'],
  ];
  const items = state.mode === 'admin' ? admin : partner;
  const section = state.mode === 'admin' ? state.adminSection : state.partnerSection;
  return items.map(([id, icon, label, badge]) => `
    <button class="nav-item ${section === id ? 'active' : ''}" data-action="navigate" data-section="${id}">
      <i data-lucide="${icon}"></i><span>${label}</span>${badge ? `<span class="nav-badge">${badge}</span>` : ''}
    </button>`).join('');
}

function getPageMeta() {
  if (state.mode === 'admin') {
    const map = {
      dashboard: ['Administracija', 'Pregled poslovanja'], orders: ['Prodaja', 'Porudžbine'], products: ['Asortiman', 'Proizvodi'],
      partners: ['Kupci', 'B2B partneri'], documents: ['Automatizacija', 'Ulazni dokumenti'], integrations: ['Sistem', 'ERP i integracije'],
    };
    return map[state.adminSection];
  }
  const map = {
    home: ['Partner portal', 'Hotel Splendid'], catalog: ['Partner portal', 'Katalog proizvoda'], quick: ['Naručivanje', 'Brza porudžbina'],
    orders: ['Naručivanje', 'Moje porudžbine'], documents: ['Automatizacija', 'Uvezi porudžbenicu'], favorites: ['Asortiman', 'Omiljeni proizvodi'],
  };
  return map[state.partnerSection];
}

function renderApp() {
  const [overline, title] = getPageMeta();
  app.innerHTML = `
    <div class="shell">
      <aside class="sidebar" id="sidebar">
        <div class="brand"><div class="brand-mark">M</div><div><span class="brand-name">Montecco</span><span class="brand-sub">${state.mode === 'admin' ? 'B2B administration' : 'Partner portal'}</span></div></div>
        <div class="nav-label">${state.mode === 'admin' ? 'Upravljanje' : 'Moj nalog'}</div>
        <nav class="nav-list">${shellNavigation()}</nav>
        <div class="sidebar-spacer"></div>
        <div class="sync-card">
          <div class="sync-row"><span class="sync-dot"></span><span>${state.mode === 'admin' ? 'ERP veza aktivna' : 'Podaci su ažurni'}</span></div>
          <div class="sync-meta">${state.mode === 'admin' ? 'Poslednja sinhronizacija prije 4 min<br>Proizvodi · kupci · cijene · porudžbine' : 'Cijene i dostupnost su poslednji put osvježeni prije 4 min.'}</div>
        </div>
        <div class="user-card"><div class="avatar">${state.mode === 'admin' ? 'DM' : 'HS'}</div><div><div class="user-name">${state.mode === 'admin' ? 'Danilo M.' : 'Hotel Splendid'}</div><div class="user-role">${state.mode === 'admin' ? 'Montecco administrator' : 'HoReCa partner · Premium'}</div></div></div>
      </aside>
      <main class="workspace">
        <header class="topbar">
          <button class="icon-button mobile-menu" data-action="mobile-menu" aria-label="Otvori meni"><i data-lucide="menu"></i></button>
          <div class="breadcrumbs"><div class="crumb-overline">${overline}</div><div class="crumb-title">${title}</div></div>
          <div class="topbar-spacer"></div>
          <span class="demo-pill">Interaktivni demo</span>
          ${state.mode === 'partner' ? `<button class="icon-button" data-action="open-cart" aria-label="Korpa"><i data-lucide="shopping-cart"></i>${cartCount() ? `<span class="icon-badge">${cartCount()}</span>` : ''}</button>` : `<button class="icon-button" data-action="notifications" aria-label="Obavještenja"><i data-lucide="bell"></i><span class="icon-badge">3</span></button>`}
          <button class="secondary-button" data-action="${state.mode === 'admin' ? 'switch-partner' : 'switch-admin'}"><i data-lucide="${state.mode === 'admin' ? 'external-link' : 'shield-check'}"></i><span class="button-label">${state.mode === 'admin' ? 'Partner portal' : 'Administracija'}</span></button>
        </header>
        <div id="page-content">${renderCurrentPage()}</div>
      </main>
    </div>`;
  icons();
}

function renderCurrentPage() {
  if (state.mode === 'admin') {
    return {
      dashboard: adminDashboard, orders: adminOrders, products: adminProducts,
      partners: adminPartners, documents: adminDocuments, integrations: adminIntegrations,
    }[state.adminSection]();
  }
  return {
    home: partnerHome, catalog: partnerCatalog, quick: partnerQuickOrder,
    orders: partnerOrderHistory, documents: partnerDocuments, favorites: partnerFavorites,
  }[state.partnerSection]();
}

function pageHeader(kicker, title, description, actions = '') {
  return `<div class="page-header"><div><p class="eyebrow">${kicker}</p><h1 class="page-title">${title}</h1><p class="page-description">${description}</p></div>${actions ? `<div class="header-actions">${actions}</div>` : ''}</div>`;
}

function adminDashboard() {
  return `<section class="page">
    ${pageHeader('Dobro došli, Danilo', 'Kontrolni centar prodaje', 'Pregled B2B porudžbina, kupaca i podataka koji se razmjenjuju sa vašim ERP sistemom.', `<button class="secondary-button" data-action="export"><i data-lucide="download"></i>Izvezi izvještaj</button><button class="primary-button" data-action="new-order"><i data-lucide="plus"></i>Nova porudžbina</button>`)}
    <div class="metric-grid">
      ${metric('Porudžbine danas', '18', '+12%', 'u odnosu na juče', 'shopping-bag')}
      ${metric('Promet ovog mjeseca', '€ 47.860', '+8,4%', 'u odnosu na avgust', 'circle-dollar-sign')}
      ${metric('Aktivni B2B partneri', '126', '9 novih', 'ovog mjeseca', 'users', 'neutral')}
      ${metric('Za ručnu provjeru', '2', 'potrebna akcija', 'nepoznate PO stavke', 'triangle-alert', 'alert')}
    </div>
    <div class="dashboard-grid">
      <div>
        <div class="panel">
          <div class="panel-head"><div><div class="panel-title">Najnovije porudžbine</div><div class="panel-subtitle">Automatske i ručno unesene porudžbine</div></div><button class="ghost-button" data-action="navigate" data-section="orders">Pogledaj sve <i data-lucide="arrow-right"></i></button></div>
          ${ordersTable(state.orders.slice(0,5))}
        </div>
        <div class="panel">
          <div class="chart-wrap"><div class="chart-head"><div><div class="panel-title">B2B promet</div><div class="chart-total">€ 47.860</div><div class="chart-change">↑ 8,4% u odnosu na prethodni period</div></div><select class="select-control"><option>Poslednjih 7 dana</option><option>Ovaj mjesec</option></select></div>${barChart()}</div>
        </div>
      </div>
      <div>
        <div class="panel">
          <div class="panel-head"><div><div class="panel-title">Za pažnju</div><div class="panel-subtitle">Dokumenti i porudžbine koje čekaju vas</div></div></div>
          <div class="activity-list">
            ${activity('triangle-alert','Nepoznat artikal u porudžbenici','Voli Trade · PO-7284','prije 8 min','warn','review-po')}
            ${activity('file-search','PDF porudžbenica je očitana','Hotel Cattaro · 11 stavki','prije 24 min','','review-po')}
            ${activity('user-plus','Novi partnerski nalog','Restoran Conte · čeka odobrenje','prije 1 h','','partners')}
            ${activity('package-check','Nizak lager na 6 artikala','ERP je poslao upozorenje','prije 2 h','warn','products')}
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><div class="panel-title">ERP sinhronizacija</div><div class="panel-subtitle">Centralni izvor podataka</div></div><span class="status delivered">Aktivno</span></div>
          <div class="integration-card"><div class="integration-logo">ERP</div><div><div class="integration-title">Montecco ERP</div><div class="integration-meta">Proizvodi, kupci, cjenovnici i porudžbine</div></div><div class="integration-side"><div class="integration-title">4 min</div><div class="integration-meta">poslednji sync</div></div></div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><div class="panel-title">Najaktivniji partneri</div><div class="panel-subtitle">Ovaj mjesec</div></div></div>
          <div class="activity-list">
            ${partnerActivity('Voli Trade','32 porudžbine','€ 9.420','VT')}
            ${partnerActivity('HDL Laković','27 porudžbina','€ 7.860','HD')}
            ${partnerActivity('Hotel Splendid','18 porudžbina','€ 4.730','HS')}
          </div>
        </div>
      </div>
    </div>
    ${demoNote()}
  </section>`;
}

function metric(label, value, trend, foot, icon, tone = 'up') {
  return `<article class="metric-card"><div class="metric-head"><span>${label}</span><span class="metric-icon"><i data-lucide="${icon}"></i></span></div><div class="metric-value">${value}</div><div class="metric-foot"><span class="trend-${tone}">${trend}</span><span>${foot}</span></div></article>`;
}

function barChart() {
  const current = [54,72,63,88,76,100,83];
  const previous = [41,58,47,70,65,79,68];
  const days = ['Pon','Uto','Sri','Čet','Pet','Sub','Ned'];
  return `<div class="bar-chart">${days.map((day,i)=>`<div class="bar-group"><div class="bar light" style="height:${previous[i]}%"></div><div class="bar" style="height:${current[i]}%"></div><span class="bar-label">${day}</span></div>`).join('')}</div><div class="chart-legend"><span class="legend-item"><span class="legend-dot"></span>Ova nedjelja</span><span class="legend-item"><span class="legend-dot light"></span>Prethodna nedjelja</span></div>`;
}

function ordersTable(orders) {
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Porudžbina</th><th>Partner</th><th>Datum</th><th>Artikli</th><th>Status</th><th>Iznos</th></tr></thead><tbody>${orders.map(order=>`<tr data-action="order-detail" data-order="${order.id}" style="cursor:pointer"><td class="order-id">${order.id}</td><td><span class="company-cell"><span class="company-logo">${order.initials}</span>${order.partner}</span></td><td>${order.date}</td><td>${order.items}</td><td>${statusBadge(order)}</td><td class="amount">${money(order.total)}</td></tr>`).join('')}</tbody></table></div>`;
}

function activity(icon,title,meta,time,tone = '',action = '') {
  return `<div class="activity-row" ${action ? `data-action="${action}" style="cursor:pointer"` : ''}><span class="activity-icon ${tone}"><i data-lucide="${icon}"></i></span><div><div class="activity-title">${title}</div><div class="activity-meta">${meta}</div></div><span class="activity-time">${time}</span></div>`;
}

function partnerActivity(name,meta,total,initials) {
  return `<div class="activity-row"><span class="company-logo">${initials}</span><div><div class="activity-title">${name}</div><div class="activity-meta">${meta}</div></div><span class="amount">${total}</span></div>`;
}

function adminOrders() {
  return `<section class="page">${pageHeader('Prodaja', 'Sve porudžbine', 'Jedinstveno mjesto za praćenje porudžbina sa portala, iz PDF dokumenata i iz vašeg prodajnog tima.', `<button class="secondary-button"><i data-lucide="sliders-horizontal"></i>Filteri</button><button class="primary-button" data-action="new-order"><i data-lucide="plus"></i>Nova porudžbina</button>`)}<div class="metric-grid">${metric('U obradi','7','3 hitne','isporuke','clock','neutral')}${metric('Spremne za isporuku','11','danas','planirana isporuka','truck')}${metric('Čekaju provjeru','2','potrebna akcija','PO dokumenti','triangle-alert','alert')}${metric('Prosječna porudžbina','€ 612','+5,1%','ovog mjeseca','receipt')}</div><div class="panel"><div class="panel-head"><div><div class="panel-title">Porudžbine</div><div class="panel-subtitle">Prikazano ${state.orders.length} od 184 porudžbine</div></div><div class="search-box" style="max-width:260px;height:36px"><i data-lucide="search"></i><input placeholder="Pretraži porudžbine"></div></div>${ordersTable(state.orders)}</div>${demoNote()}</section>`;
}

function adminProducts() {
  const rows = products.slice(0,42).map(p=>`<tr><td class="order-id">${p.sku}</td><td><span class="mini-product">${miniProductImage(p)}<span><strong>${p.name}</strong><br><span class="activity-meta">${p.brand}</span></span></span></td><td>${p.category}</td><td>${p.pack}</td><td>${p.stock ? `${p.stock} pak.` : '<span style="color:var(--red)">Nema na stanju</span>'}</td><td class="amount">${money(p.price)}</td><td><span class="status ${p.stock > 10 ? 'delivered' : p.stock ? 'review' : 'cancelled'}">${p.stock > 10 ? 'Aktivan' : p.stock ? 'Nizak lager' : 'Nedostupan'}</span></td></tr>`).join('');
  return `<section class="page">${pageHeader('Asortiman', 'Proizvodi i dostupnost', 'Podaci iz kataloga povezani su sa cijenama i stanjem iz ERP-a. Svaki partner može imati drugačiji asortiman.', `<button class="secondary-button" data-action="export"><i data-lucide="upload"></i>Uvezi cjenovnik</button><button class="primary-button"><i data-lucide="plus"></i>Dodaj proizvod</button>`)}<div class="panel"><div class="panel-head"><div><div class="panel-title">Montecco portfolio</div><div class="panel-subtitle">${products.length} proizvoda u demo katalogu</div></div><div class="search-box" style="max-width:260px;height:36px"><i data-lucide="search"></i><input placeholder="Naziv, SKU ili brend"></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>SKU</th><th>Proizvod</th><th>Kategorija</th><th>Pakovanje</th><th>Lager</th><th>Partner cijena</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div></div>${demoNote()}</section>`;
}

function adminPartners() {
  const partners = [
    ['Hotel Splendid','HoReCa Premium','28 korisnika','Cjenovnik HORECA-A','€ 4.730','HS'],
    ['Voli Trade','Retail lanac','16 korisnika','Retail Key Account','€ 9.420','VT'],
    ['HDL Laković','Retail lanac','12 korisnika','Retail Key Account','€ 7.860','HD'],
    ['Hotel Cattaro','HoReCa','5 korisnika','Cjenovnik HORECA-B','€ 2.190','HC'],
    ['Restoran Porto','HoReCa','3 korisnika','Cjenovnik HORECA-B','€ 1.480','RP'],
    ['Restoran Conte','Novi partner','1 korisnik','Čeka odobrenje','—','RC'],
  ];
  return `<section class="page">${pageHeader('Kupci', 'B2B partneri', 'Nalozi kupaca, individualni asortimani, cjenovnici, rabati i uslovi plaćanja na jednom mjestu.', `<button class="secondary-button"><i data-lucide="upload"></i>Uvezi partnere</button><button class="primary-button"><i data-lucide="user-plus"></i>Novi partner</button>`)}<div class="panel"><div class="panel-head"><div><div class="panel-title">Partnerski nalozi</div><div class="panel-subtitle">126 aktivnih partnera</div></div><div class="search-box" style="max-width:260px;height:36px"><i data-lucide="search"></i><input placeholder="Pretraži partnere"></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Partner</th><th>Segment</th><th>Korisnici</th><th>Cjenovnik</th><th>Promet / mjesec</th><th>Status</th></tr></thead><tbody>${partners.map(p=>`<tr><td><span class="company-cell"><span class="company-logo">${p[5]}</span>${p[0]}</span></td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td class="amount">${p[4]}</td><td><span class="status delivered">Aktivan</span></td></tr>`).join('')}</tbody></table></div></div>${demoNote()}</section>`;
}

function adminDocuments() {
  const docs = [
    ['PO-7284.pdf','Voli Trade','07. sep, 10:42','14','1 nepoznata','review'],
    ['narudzbenica-0907.pdf','Hotel Cattaro','07. sep, 09:18','11','Očitano','delivered'],
    ['order_september.csv','HDL Laković','06. sep, 16:33','21','Uvezeno','delivered'],
    ['scan_1821.pdf','Restoran Porto','06. sep, 12:07','6','Uvezeno','delivered'],
  ];
  return `<section class="page">${pageHeader('Automatizacija', 'Ulazne porudžbenice', 'Portal čita dokument, povezuje stavke sa katalogom i odvaja ono što zahtijeva ljudsku odluku.', `<button class="primary-button" data-action="upload-po"><i data-lucide="file-up"></i>Testiraj PDF unos</button>`)}<div class="metric-grid">${metric('Dokumenti ovog mjeseca','84','92%','automatski obrađeno','files')}${metric('Ušteđeno ručnog unosa','19,6 h','procjena','na osnovu broja redova','timer')}${metric('Uspješno povezano','1.248','98,6%','svih stavki','scan-line')}${metric('Čeka odluku','2','potrebna akcija','nepoznati artikli','triangle-alert','alert')}</div><div class="panel"><div class="panel-head"><div><div class="panel-title">Inbox dokumenata</div><div class="panel-subtitle">PDF, CSV i tekstualne porudžbenice</div></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Dokument</th><th>Partner</th><th>Primljeno</th><th>Stavke</th><th>Rezultat</th><th>Akcija</th></tr></thead><tbody>${docs.map(d=>`<tr><td class="order-id">${d[0]}</td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td><td><span class="status ${d[5]}">${d[4]}</span></td><td><button class="ghost-button" data-action="${d[5] === 'review' ? 'review-po' : 'order-detail'}">Otvori <i data-lucide="arrow-right"></i></button></td></tr>`).join('')}</tbody></table></div></div>${demoNote()}</section>`;
}

function adminIntegrations() {
  const syncItems = [
    ['Proizvodi i varijante','Dvosmjerno','Prije 4 min','2.486 zapisa','package'],
    ['Kupci i partneri','ERP → Portal','Prije 9 min','126 naloga','users'],
    ['Cijene i rabati','ERP → Portal','Prije 6 min','18 cjenovnika','badge-percent'],
    ['Stanje zaliha','ERP → Portal','Prije 4 min','1.934 artikla','warehouse'],
    ['Porudžbine','Portal → ERP','U realnom vremenu','184 ovog mjeseca','shopping-bag'],
  ];
  return `<section class="page">${pageHeader('Sistem', 'ERP i integracije', 'Montecco ERP ostaje centralni sistem. Portal prikazuje ažurne podatke kupcima i vraća potvrđene porudžbine nazad u ERP.', `<button class="secondary-button" data-action="sync-now"><i data-lucide="refresh-cw"></i>Pokreni sync</button><button class="primary-button"><i data-lucide="settings-2"></i>Podesi mapiranje</button>`)}<div class="dashboard-grid"><div class="panel"><div class="panel-head"><div><div class="panel-title">Tokovi podataka</div><div class="panel-subtitle">Aktivna pravila sinhronizacije</div></div><span class="status delivered">Sve radi</span></div><div class="activity-list">${syncItems.map(i=>`<div class="activity-row"><span class="activity-icon"><i data-lucide="${i[4]}"></i></span><div><div class="activity-title">${i[0]}</div><div class="activity-meta">${i[1]} · ${i[3]}</div></div><span class="activity-time">${i[2]}</span></div>`).join('')}</div></div><div><div class="panel"><div class="panel-head"><div><div class="panel-title">Montecco ERP</div><div class="panel-subtitle">Produkcioni konektor</div></div><span class="status delivered">Povezano</span></div><div class="panel-body"><div style="padding:18px;border-radius:12px;background:var(--green-900);color:#fff"><div style="font-family:Georgia,serif;font-size:22px">ERP kao izvor istine</div><div style="margin-top:8px;color:#bcd3cd;font-size:10px;line-height:1.6">Postojeći ERP kontroliše artikle, kupce, cijene i dostupnost. B2B portal je siguran samouslužni kanal prema partnerima.</div></div><div class="summary-row" style="margin-top:12px"><span>Uspješne operacije (24 h)</span><strong>12.480</strong></div><div class="summary-row"><span>Greške</span><strong style="color:#25805f">0</strong></div><div class="summary-row"><span>Prosječno vrijeme</span><strong>1,8 s</strong></div></div></div></div></div>${demoNote()}</section>`;
}

function partnerHome() {
  const recent = partnerOrders.slice(0,2).map(order => ({ ...order, partner: 'Hotel Splendid', initials: 'HS', items: order.items.length })).map(order=>`<tr><td class="order-id">${order.id}</td><td>${order.date}</td><td>${order.items}</td><td>${statusBadge(order)}</td><td class="amount">${money(order.total)}</td><td><button class="ghost-button" data-action="reorder" data-order="${order.id}">Ponovi <i data-lucide="rotate-ccw"></i></button></td></tr>`).join('');
  return `<section class="page">
    <div class="partner-hero"><div><div class="hero-kicker">Montecco · partner i prijatelj</div><h1 class="hero-title">Sve što naručujete, na jednom mjestu.</h1><p class="hero-copy">Vaš ugovoreni asortiman, individualne cijene i ažurna dostupnost — bez čekanja na odgovor prodajnog agenta.</p><div class="hero-actions"><button class="primary-button" data-action="navigate" data-section="catalog"><i data-lucide="shopping-bag"></i>Počni porudžbinu</button><button class="secondary-button" data-action="upload-po"><i data-lucide="file-up"></i>Uvezi PDF porudžbenicu</button></div></div><div class="hero-stats"><div class="hero-stats-title">Vaš nalog</div><div class="hero-stat"><span class="hero-stat-label">Cjenovnik</span><span class="hero-stat-value">HORECA-A</span></div><div class="hero-stat"><span class="hero-stat-label">Uslovi plaćanja</span><span class="hero-stat-value">30 dana</span></div><div class="hero-stat"><span class="hero-stat-label">Besplatna isporuka</span><span class="hero-stat-value">preko € 250</span></div></div></div>
    <div class="partner-shortcuts">
      ${shortcut('repeat-2','Ponovi poslednju porudžbinu','3 artikla · 24. avgusta','reorder','MN-260824-112')}
      ${shortcut('list-plus','Brza porudžbina','Unesite količine iz jedne tabele','navigate','quick')}
      ${shortcut('file-scan','Uvezi porudžbenicu','PDF se pretvara u korpu za provjeru','upload-po')}
    </div>
    <div class="dashboard-grid"><div><div class="panel"><div class="panel-head"><div><div class="panel-title">Vaše poslednje porudžbine</div><div class="panel-subtitle">Statusi i brzo ponovno naručivanje</div></div><button class="ghost-button" data-action="navigate" data-section="orders">Sve porudžbine <i data-lucide="arrow-right"></i></button></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Broj</th><th>Datum</th><th>Artikli</th><th>Status</th><th>Iznos</th><th></th></tr></thead><tbody>${recent}</tbody></table></div></div></div><div><div class="panel"><div class="panel-head"><div><div class="panel-title">Preporučeno za vas</div><div class="panel-subtitle">Na osnovu prethodnih narudžbina</div></div></div><div class="activity-list">${products.slice(0,3).map(p=>`<div class="activity-row"><span class="mini-placeholder">${p.brand.slice(0,2).toUpperCase()}</span><div><div class="activity-title">${p.name}</div><div class="activity-meta">${p.pack} · ${money(p.price)}</div></div><button class="add-button" data-action="add-cart" data-sku="${p.sku}" aria-label="Dodaj"><i data-lucide="plus"></i></button></div>`).join('')}</div></div></div></div>
    ${demoNote()}
  </section>`;
}

function shortcut(icon,title,copy,action,value='') {
  return `<button class="quick-card" data-action="${action}" ${action === 'navigate' ? `data-section="${value}"` : ''} ${action === 'reorder' ? `data-order="${value}"` : ''}><span class="quick-icon"><i data-lucide="${icon}"></i></span><span style="text-align:left"><span class="quick-title">${title}</span><span class="quick-copy">${copy}</span></span><i class="quick-arrow" data-lucide="arrow-right"></i></button>`;
}

function partnerCatalog(favoritesOnly = false) {
  const categories = ['Sve kategorije', ...Object.keys(sourceProducts)];
  return `<section class="page">${pageHeader('Vaš ugovoreni asortiman', favoritesOnly ? 'Omiljeni proizvodi' : 'Katalog proizvoda', favoritesOnly ? 'Brz pristup proizvodima koje najčešće naručujete.' : 'Prikazane su vaše neto cijene i dostupnost iz Montecco ERP sistema.', `<button class="secondary-button" data-action="upload-po"><i data-lucide="file-up"></i>Uvezi porudžbenicu</button><button class="primary-button" data-action="open-cart"><i data-lucide="shopping-cart"></i>Korpa${cartCount() ? ` (${cartCount()})` : ''}</button>`)}
    <div class="toolbar"><div class="search-box"><i data-lucide="search"></i><input id="catalog-search" value="${esc(state.search)}" placeholder="Pretražite naziv, brend ili šifru proizvoda"></div><select id="catalog-sort" class="select-control"><option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>Preporučeno</option><option value="name" ${state.sort === 'name' ? 'selected' : ''}>Naziv A–Ž</option><option value="price-low" ${state.sort === 'price-low' ? 'selected' : ''}>Najniža cijena</option><option value="price-high" ${state.sort === 'price-high' ? 'selected' : ''}>Najviša cijena</option></select><span class="result-count" id="result-count"></span></div>
    ${favoritesOnly ? '' : `<div class="category-tabs">${categories.map(cat=>`<button class="category-tab ${state.category === cat ? 'active' : ''}" data-action="category" data-category="${cat}">${cat}</button>`).join('')}</div>`}
    <div id="catalog-results">${renderProductResults(favoritesOnly)}</div>${demoNote()}</section>`;
}

function filteredProducts(favoritesOnly = false) {
  let list = [...products];
  if (favoritesOnly) list = list.filter(p => state.favorites.has(p.sku));
  if (!favoritesOnly && state.category !== 'Sve kategorije') list = list.filter(p => p.category === state.category);
  if (state.search.trim()) {
    const q = normalize(state.search);
    list = list.filter(p => normalize(`${p.name} ${p.brand} ${p.sku} ${p.category}`).includes(q));
  }
  if (state.sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name,'sr'));
  if (state.sort === 'price-low') list.sort((a,b)=>a.price-b.price);
  if (state.sort === 'price-high') list.sort((a,b)=>b.price-a.price);
  return list;
}

function renderProductResults(favoritesOnly = false) {
  const list = filteredProducts(favoritesOnly);
  setTimeout(()=>{ const count = document.querySelector('#result-count'); if (count) count.textContent = `${list.length} proizvoda`; icons(); },0);
  if (!list.length) return `<div class="empty-state"><div class="empty-state-icon"><i data-lucide="search-x"></i></div><div class="empty-title">Nema pronađenih proizvoda</div><div class="empty-copy">Pokušajte drugi naziv, brend ili kategoriju.</div></div>`;
  return `<div class="product-grid">${list.map(productCard).join('')}</div>`;
}

function productCard(p) {
  const stockClass = p.stock === 0 ? 'out' : p.stock < 10 ? 'low' : '';
  const stockLabel = p.stock === 0 ? 'Po upitu' : p.stock < 10 ? `Još ${p.stock} pak.` : 'Na stanju';
  const [c1,c2] = categoryMeta[p.category].colors;
  return `<article class="product-card"><div class="product-image" data-action="product-detail" data-sku="${p.sku}">${p.image ? `<img src="${p.image}" alt="${esc(p.name)}" loading="lazy">` : `<div class="product-placeholder" style="--ph1:${c1};--ph2:${c2}" data-label="${esc(p.brand.slice(0,13))}"></div>`}<span class="stock-tag ${stockClass}">${stockLabel}</span><button class="favorite-button ${state.favorites.has(p.sku) ? 'active' : ''}" data-action="favorite" data-sku="${p.sku}" aria-label="Omiljeni"><i data-lucide="heart" ${state.favorites.has(p.sku) ? 'fill="currentColor"' : ''}></i></button></div><div class="product-body"><div class="product-brand">${p.brand}</div><div class="product-name" data-action="product-detail" data-sku="${p.sku}">${p.name}</div><div class="product-meta">${p.sku} · ${p.pack}</div><div class="price-row"><div><div class="price">${money(p.price)}</div><div class="price-unit">vaša neto cijena / pakovanje</div></div><button class="add-button" data-action="add-cart" data-sku="${p.sku}" ${p.stock === 0 ? 'disabled' : ''} aria-label="Dodaj u korpu"><i data-lucide="plus"></i></button></div></div></article>`;
}

function partnerQuickOrder() {
  const list = products.slice(0,36);
  return `<section class="page">${pageHeader('Naručivanje', 'Brza porudžbina', 'Unesite količine za više proizvoda odjednom. Količina predstavlja broj transportnih pakovanja.', `<button class="secondary-button" data-action="upload-po"><i data-lucide="file-up"></i>Uvezi PDF</button><button class="primary-button" data-action="add-quick"><i data-lucide="shopping-cart"></i>Dodaj odabrano</button>`)}<div class="panel"><div class="panel-head"><div><div class="panel-title">Najčešće naručivani proizvodi</div><div class="panel-subtitle">Vaše cijene i trenutna dostupnost</div></div><div class="search-box" style="max-width:260px;height:36px"><i data-lucide="search"></i><input placeholder="Pretraži tabelu"></div></div><div class="table-wrap"><table class="data-table quick-order-table"><thead><tr><th>Proizvod</th><th>Šifra</th><th>Pakovanje</th><th>Dostupnost</th><th>Cijena</th><th>Količina</th></tr></thead><tbody>${list.map(p=>`<tr><td>${miniProduct(p)}</td><td class="order-id">${p.sku}</td><td>${p.pack}</td><td>${p.stock ? `${p.stock} pak.` : '<span style="color:var(--red)">Po upitu</span>'}</td><td class="amount">${money(p.price)}</td><td><input class="quick-qty" type="number" min="0" max="999" value="0" data-sku="${p.sku}" ${p.stock === 0 ? 'disabled' : ''}></td></tr>`).join('')}</tbody></table></div></div>${demoNote()}</section>`;
}

function miniProductImage(p) {
  return p.image ? `<img class="mini-image" src="${p.image}" alt="">` : `<span class="mini-placeholder">${p.brand.slice(0,2).toUpperCase()}</span>`;
}

function miniProduct(p) {
  return `<span class="mini-product">${miniProductImage(p)}<span><strong>${p.name}</strong><br><span class="activity-meta">${p.brand}</span></span></span>`;
}

function partnerOrderHistory() {
  return `<section class="page">${pageHeader('Naručivanje', 'Moje porudžbine', 'Pratite statuse, otvorite detalje ili ponovite prethodnu porudžbinu jednim klikom.', `<button class="primary-button" data-action="navigate" data-section="catalog"><i data-lucide="plus"></i>Nova porudžbina</button>`)}<div class="panel"><div class="panel-head"><div><div class="panel-title">Istorija porudžbina</div><div class="panel-subtitle">Poslednjih 12 mjeseci</div></div><div class="search-box" style="max-width:260px;height:36px"><i data-lucide="search"></i><input placeholder="Broj porudžbine"></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Porudžbina</th><th>Datum</th><th>Broj stavki</th><th>Status</th><th>Iznos</th><th>Akcija</th></tr></thead><tbody>${partnerOrders.map(o=>`<tr><td class="order-id">${o.id}</td><td>${o.date}</td><td>${o.items.length}</td><td>${statusBadge(o)}</td><td class="amount">${money(o.total)}</td><td><button class="ghost-button" data-action="reorder" data-order="${o.id}">Ponovi <i data-lucide="rotate-ccw"></i></button></td></tr>`).join('')}</tbody></table></div></div>${demoNote()}</section>`;
}

function partnerDocuments() {
  return `<section class="page">${pageHeader('Automatizovano naručivanje', 'Uvezite svoju porudžbenicu', 'Dodajte PDF porudžbenicu. Portal će očitati proizvode i količine, povezati ih sa vašim asortimanom i dati vam pregled prije slanja.', `<button class="primary-button" data-action="upload-po"><i data-lucide="file-up"></i>Izaberi dokument</button>`)}<div class="dashboard-grid"><div class="panel"><div class="panel-head"><div><div class="panel-title">Kako funkcioniše</div><div class="panel-subtitle">Od dokumenta do potvrđene porudžbine</div></div></div><div class="panel-body"><div class="activity-list" style="margin:-18px">${activity('file-up','1. Dodajte porudžbenicu','PDF, CSV ili tekstualni dokument','','')}${activity('scan-line','2. Portal čita stavke','Šifra, naziv, pakovanje i količina','','')}${activity('circle-help','3. Razriješite nepoznate artikle','Provjera dostupnosti ili izostavljanje','','warn')}${activity('badge-check','4. Pregledajte i potvrdite','Porudžbina se šalje u ERP','','')}</div></div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Vaši poslednji dokumenti</div><div class="panel-subtitle">Sačuvana istorija uvoza</div></div></div><div class="activity-list">${activity('file-check','narudzbenica_avgust.pdf','3 artikla · uspješno uvezeno','24. avg')}${activity('file-check','hotel_splendid_0708.csv','3 artikla · uspješno uvezeno','07. avg')}</div></div></div><div><div class="panel"><div class="panel-head"><div><div class="panel-title">Sigurna provjera</div><div class="panel-subtitle">Nema automatskih iznenađenja</div></div></div><div class="panel-body"><div style="padding:16px;border-radius:12px;background:#fff5e7;color:#6f4c1d"><i data-lucide="shield-question" style="width:26px;height:26px"></i><div style="margin-top:10px;font-size:12px;font-weight:800">Nepoznat proizvod se ne naručuje automatski.</div><div style="margin-top:6px;font-size:10px;line-height:1.6">Portal će vas pitati da li želite da Montecco provjeri dostupnost proizvoda ili da ga izostavite. Tek nakon vaše odluke možete potvrditi porudžbinu.</div></div><button class="primary-button full-width" style="margin-top:12px" data-action="upload-po"><i data-lucide="wand-sparkles"></i>Isprobaj na primjeru</button></div></div></div></div>${demoNote()}</section>`;
}

function partnerFavorites() { return partnerCatalog(true); }

function demoNote() {
  return `<div style="margin-top:18px;color:#84918d;font-size:9px;line-height:1.5">Demonstracioni prikaz napravljen na osnovu Montecco kataloga iz 2020. Cijene, zalihe, partneri i porudžbine su ilustrativni; u produkciji se preuzimaju iz postojećeg ERP sistema.</div>`;
}

function openPartnerLogin() {
  if (state.partnerAuthenticated) { state.mode = 'partner'; state.partnerSection = 'home'; renderApp(); return; }
  openModal('Prijava u partner portal', 'Svaki kupac pristupa samo svom asortimanu, cijenama i dokumentima.', `
    <div class="login-visual"><div class="login-logo">Montecco Partner Portal</div><div class="login-copy">Samostalno naručivanje za HoReCa i retail partnere, povezano sa centralnim ERP sistemom.</div></div>
    <form id="partner-login" class="form-grid">
      <div class="form-field full"><label>Poslovni e-mail</label><input type="email" value="nabavka@hotelsplendid.me" required></div>
      <div class="form-field full"><label>Lozinka</label><input type="password" value="montecco-demo" required></div>
      <div class="form-field full"><button class="primary-button full-width" type="submit">Prijavi se u demo <i data-lucide="arrow-right"></i></button></div>
    </form><div class="demo-access"><i data-lucide="info"></i><span>Za demo možete koristiti već unijete podatke ili bilo koji e-mail i lozinku.</span></div>`, '', () => {
      document.querySelector('#partner-login')?.addEventListener('submit', e => { e.preventDefault(); state.partnerAuthenticated = true; state.mode = 'partner'; state.partnerSection = 'home'; closeModal(); renderApp(); showToast('Prijavljeni ste kao Hotel Splendid.', 'success'); });
    });
}

function openModal(title, description, body, size = '', onReady) {
  document.body.classList.add('no-scroll');
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal ${size}" role="dialog" aria-modal="true" aria-label="${esc(title)}" data-modal-panel><div class="modal-head"><div><h2 class="modal-title">${title}</h2>${description ? `<div class="modal-description">${description}</div>` : ''}</div><button class="modal-close" data-action="close-modal" aria-label="Zatvori"><i data-lucide="x"></i></button></div><div class="modal-body">${body}</div></div></div>`;
  icons();
  if (onReady) onReady();
}

function closeModal() { modalRoot.innerHTML = ''; document.body.classList.remove('no-scroll'); state.poResult = null; }

function productDetail(sku) {
  const p = products.find(item => item.sku === sku); if (!p) return;
  const [c1,c2] = categoryMeta[p.category].colors;
  openModal(p.name, `${p.brand} · ${p.sku}`, `<div class="product-detail"><div class="detail-image">${p.image ? `<img src="${p.image}" alt="${esc(p.name)}">` : `<div class="product-placeholder" style="--ph1:${c1};--ph2:${c2}" data-label="${esc(p.brand.slice(0,13))}"></div>`}</div><div><div class="detail-brand">${p.category} · ${p.brand}</div><h3 class="detail-name">${p.name}</h3><p class="detail-copy">${p.description}</p><div class="detail-facts"><div class="detail-fact"><div class="fact-label">Šifra</div><div class="fact-value">${p.sku}</div></div><div class="detail-fact"><div class="fact-label">Pakovanje</div><div class="fact-value">${p.pack}</div></div><div class="detail-fact"><div class="fact-label">Dostupnost</div><div class="fact-value">${p.stock ? `${p.stock} pakovanja` : 'Po upitu'}</div></div><div class="detail-fact"><div class="fact-label">Cjenovnik</div><div class="fact-value">HORECA-A</div></div></div><div class="detail-price">${money(p.price)}</div><div class="price-unit">vaša neto cijena / transportno pakovanje</div><div class="detail-order"><input id="detail-qty" type="number" min="1" max="999" value="1"><button class="primary-button" data-action="detail-add" data-sku="${p.sku}" ${p.stock === 0 ? 'disabled' : ''}><i data-lucide="shopping-cart"></i>Dodaj u korpu</button></div></div></div>`, 'large');
}

function addToCart(sku, qty = 1, quiet = false) {
  const p = products.find(item => item.sku === sku); if (!p || p.stock === 0) return;
  const amount = Math.max(1, Number(qty) || 1);
  state.cart.set(sku, (state.cart.get(sku) || 0) + amount);
  renderApp();
  if (!quiet) showToast(`${p.name} je dodat u korpu.`, 'success');
}

function openCart() {
  document.body.classList.add('no-scroll');
  const rows = [...state.cart.entries()].map(([sku,qty])=>{
    const p = products.find(item=>item.sku===sku);
    return `<div class="cart-row">${p.image ? `<img class="cart-image" src="${p.image}" alt="">` : `<span class="cart-image" style="display:grid;place-items:center;color:var(--green-700);font-weight:800;font-size:9px">${p.brand.slice(0,2).toUpperCase()}</span>`}<div><div class="cart-name">${p.name}</div><div class="cart-meta">${p.pack} · ${money(p.price)}</div><div class="quantity-control"><button data-action="cart-decrease" data-sku="${sku}">−</button><span>${qty}</span><button data-action="cart-increase" data-sku="${sku}">+</button></div></div><div><div class="cart-price">${money(p.price*qty)}</div><button class="cart-remove" data-action="cart-remove" data-sku="${sku}">Ukloni</button></div></div>`;
  }).join('');
  modalRoot.innerHTML = `<div class="drawer-backdrop" data-action="close-modal"><aside class="drawer" data-modal-panel><div class="drawer-head"><div><div class="drawer-title">Vaša korpa</div><div class="modal-description">${cartCount()} pakovanja · neto cijene</div></div><button class="modal-close" data-action="close-modal"><i data-lucide="x"></i></button></div><div class="drawer-body">${rows || `<div class="empty-state" style="margin-top:18px"><div class="empty-state-icon"><i data-lucide="shopping-cart"></i></div><div class="empty-title">Korpa je prazna</div><div class="empty-copy">Dodajte proizvode iz kataloga ili uvezite svoju porudžbenicu.</div></div>`}</div><div class="drawer-foot"><div class="summary-row"><span>Međuzbir</span><strong>${money(cartTotal())}</strong></div><div class="summary-row"><span>Dostava</span><strong>${cartTotal() >= 250 ? 'Besplatno' : money(12)}</strong></div><div class="summary-row total"><span>Ukupno bez PDV-a</span><span>${money(cartTotal() + (cartTotal() && cartTotal() < 250 ? 12 : 0))}</span></div><button class="primary-button full-width" style="margin-top:13px" data-action="checkout" ${!cartCount() ? 'disabled' : ''}>Nastavi na potvrdu <i data-lucide="arrow-right"></i></button></div></aside></div>`;
  icons();
}

function checkout() {
  if (!cartCount()) return;
  closeModal();
  const earliest = new Date(Date.now()+2*86400000).toISOString().slice(0,10);
  openModal('Potvrda porudžbine', 'Provjerite isporuku i dodajte referencu prije slanja u Montecco.', `<form id="checkout-form"><div class="form-grid"><div class="form-field full"><label>Mjesto isporuke</label><select><option>Hotel Splendid — Bečići</option><option>Centralni magacin — Budva</option></select></div><div class="form-field"><label>Željeni datum isporuke</label><input type="date" min="${earliest}" value="${earliest}" required></div><div class="form-field"><label>Vaša PO referenca</label><input placeholder="npr. PO-2026-184"></div><div class="form-field full"><label>Napomena za Montecco</label><textarea placeholder="Termin prijema, kontakt osoba ili druga napomena"></textarea></div></div><div style="margin-top:16px;padding:13px;border-radius:10px;background:#f4f7f6"><div class="summary-row"><span>${cartCount()} pakovanja</span><strong>${money(cartTotal())}</strong></div><div class="summary-row"><span>Dostava</span><strong>${cartTotal() >= 250 ? 'Besplatno' : money(12)}</strong></div><div class="summary-row total"><span>Ukupno bez PDV-a</span><span>${money(cartTotal() + (cartTotal()<250 ? 12 : 0))}</span></div></div><div class="button-row" style="justify-content:flex-end;margin-top:17px"><button type="button" class="secondary-button" data-action="open-cart">Nazad na korpu</button><button type="submit" class="primary-button">Pošalji porudžbinu <i data-lucide="check"></i></button></div></form>`, '', ()=>{
    document.querySelector('#checkout-form')?.addEventListener('submit', e=>{ e.preventDefault(); const id=`MN-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${String(Math.floor(200+Math.random()*700))}`; state.cart.clear(); openModal('Porudžbina je poslata', '', `<div class="success-view"><div class="success-icon"><i data-lucide="check"></i></div><div class="success-title">Hvala na porudžbini</div><div class="success-copy">Montecco tim je primio porudžbinu, a potvrda je poslata na vaš e-mail. Status možete pratiti u odjeljku „Moje porudžbine”.</div><div class="success-reference">Broj porudžbine: <strong>${id}</strong></div><button class="primary-button" data-action="finish-order">Vrati se na početnu</button></div>`); });
  });
}

function reorder(orderId) {
  const order = partnerOrders.find(o=>o.id===orderId); if(!order) return;
  order.items.forEach((sku,i)=>{ const p=products.find(item=>item.sku===sku); if(p && p.stock) state.cart.set(sku,(state.cart.get(sku)||0)+(order.quantities[i]||1)); });
  renderApp(); showToast('Proizvodi iz prethodne porudžbine su dodati u korpu.', 'success'); openCart();
}

function openUpload() {
  state.poResult = null;
  openModal('Uvezite porudžbenicu', 'Portal očitava dokument i priprema korpu koju uvijek pregledate prije slanja.', `<div id="po-workspace">${uploadZone()}</div>`, 'large', bindUpload);
}

function uploadZone() {
  return `<label class="upload-zone" id="upload-zone"><input id="po-file" type="file" accept=".pdf,.csv,.txt,.xml" hidden><div><div class="upload-icon"><i data-lucide="file-up"></i></div><div class="upload-title">Prevucite dokument ovdje ili kliknite za izbor</div><div class="upload-copy">Dokument se obrađuje u ovom demonstracionom portalu i neće biti poslat.</div><div class="upload-formats"><span class="format-pill">PDF</span><span class="format-pill">CSV</span><span class="format-pill">TXT</span><span class="format-pill">XML</span></div><button type="button" class="sample-link" data-action="sample-po">Nemate dokument? Učitajte demo porudžbenicu</button></div></label>`;
}

function bindUpload() {
  const zone = document.querySelector('#upload-zone');
  const input = document.querySelector('#po-file');
  input?.addEventListener('change', ()=> input.files[0] && analyzeFile(input.files[0]));
  ['dragenter','dragover'].forEach(type=>zone?.addEventListener(type,e=>{e.preventDefault();zone.classList.add('dragging');}));
  ['dragleave','drop'].forEach(type=>zone?.addEventListener(type,e=>{e.preventDefault();zone.classList.remove('dragging');}));
  zone?.addEventListener('drop',e=>{const file=e.dataTransfer.files[0];if(file)analyzeFile(file);});
}

async function analyzeFile(file) {
  const workspace = document.querySelector('#po-workspace'); if(!workspace) return;
  workspace.innerHTML = analyzingView(file.name); icons();
  try {
    let text = '';
    if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) text = await extractPdfText(file);
    else text = await file.text();
    await delay(700);
    state.poResult = parseOrderText(text, file.name);
    workspace.innerHTML = poReview(state.poResult); icons();
  } catch (error) {
    workspace.innerHTML = `<div class="empty-state"><div class="empty-state-icon"><i data-lucide="file-warning"></i></div><div class="empty-title">Dokument nije mogao da se očita</div><div class="empty-copy">Pokušajte PDF sa pretraživim tekstom, CSV ili TXT dokument. U produkcionoj verziji može se dodati i OCR za skenirane dokumente.</div><button class="secondary-button" style="margin-top:14px" data-action="reset-upload">Pokušaj ponovo</button></div>`; icons();
  }
}

function analyzingView(name) {
  return `<div class="analyzing"><div class="spinner"></div><div class="upload-title">Čitamo ${esc(name)}</div><div class="upload-copy">Prepoznajemo šifre, nazive, pakovanja i količine…</div><div class="progress-track"><div class="progress-bar"></div></div></div>`;
}

async function extractPdfText(file) {
  const data = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  const pages = [];
  for (let number = 1; number <= Math.min(pdf.numPages, 30); number++) {
    const page = await pdf.getPage(number);
    const content = await page.getTextContent();
    const lines = [];
    content.items.forEach(item=>{
      const y = Math.round(item.transform[5]);
      let line = lines.find(existing=>Math.abs(existing.y-y)<=2);
      if(!line){line={y,items:[]};lines.push(line);}
      line.items.push({x:item.transform[4],text:item.str});
    });
    lines.sort((a,b)=>b.y-a.y);
    pages.push(lines.map(line=>line.items.sort((a,b)=>a.x-b.x).map(item=>item.text).join(' ')).join('\n'));
  }
  return pages.join('\n');
}

function parseOrderText(text, filename) {
  const lines = text.split(/\r?\n/).map(line=>line.replace(/\s+/g,' ').trim()).filter(Boolean);
  const normalizedAll = normalize(text);
  const matched = [];
  products.forEach(product=>{
    const skuToken = normalize(product.sku);
    const nameToken = normalize(product.name);
    const nameWords = nameToken.split(' ').filter(w=>w.length>3);
    const looseMatch = nameWords.length >= 3 && nameWords.slice(0,3).every(word=>normalizedAll.includes(word));
    if (normalizedAll.includes(skuToken) || normalizedAll.includes(nameToken) || looseMatch) {
      const line = lines.find(item=>normalize(item).includes(skuToken) || normalize(item).includes(nameToken) || nameWords.slice(0,3).every(word=>normalize(item).includes(word))) || '';
      matched.push({ product, qty: quantityFromLine(line, product), line });
    }
  });
  const matchedLines = new Set(matched.map(m=>m.line).filter(Boolean));
  let unknown = lines.filter(line=>{
    if(matchedLines.has(line)) return false;
    const n=normalize(line);
    const skuish=/\b[A-ZČĆŽŠĐ]{2,}[-_/ ]?\d{2,}\b/i.test(line);
    const qtyish=/\b(qty|quantity|kolicina|količina|kom|pcs|pak)\b/i.test(line) && /\d/.test(line);
    return line.length>=6 && line.length<=120 && (skuish||qtyish) && !/datum|invoice|order no|narudžbenica|porudžbenica|telefon|pib/i.test(n);
  }).slice(0,5).map((line,index)=>({ id:`unknown-${index}`, name:cleanupUnknown(line), qty:quantityFromLine(line), resolution:'pending' }));
  if (!matched.length && !unknown.length) unknown=[{id:'unknown-0',name:'Stavka nije automatski prepoznata',qty:1,resolution:'pending'}];
  return { filename, matched: matched.slice(0,24), unknown, raw: text.slice(0,5000) };
}

function quantityFromLine(line='', product=null) {
  let cleaned=line;
  if(product){cleaned=cleaned.replace(new RegExp(product.sku.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),'').replace(new RegExp(product.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),'');}
  const explicit=cleaned.match(/(?:qty|quantity|količina|kolicina|kom|pak(?:eta|ovanje)?)\s*[:x-]?\s*(\d{1,3})/i);
  if(explicit) return Math.max(1,Number(explicit[1]));
  const xQty=cleaned.match(/(?:^|\s)(\d{1,3})\s*[x×](?:\s|$)/i);
  return xQty ? Math.max(1,Number(xQty[1])) : 1;
}

function cleanupUnknown(line) {
  return line.replace(/(?:qty|quantity|količina|kolicina|kom|pak(?:eta|ovanje)?)\s*[:x-]?\s*\d{1,3}/ig,'').replace(/\s{2,}/g,' ').trim().slice(0,90) || 'Nepoznat proizvod';
}

function sampleOrder() {
  const knownSkus=['MON-VIN-001','MON-KAF-002','MON-SOK-005'];
  state.poResult={filename:'PO-HOTEL-SPLENDID-0907.pdf',matched:knownSkus.map((sku,i)=>({product:products.find(p=>p.sku===sku),qty:[6,4,3][i],line:`${sku} qty ${[6,4,3][i]}`})),unknown:[{id:'unknown-0',name:'Prosecco Private Label 0,75 l',qty:12,resolution:'pending'}],raw:'PO-HOTEL-SPLENDID-0907\nMON-VIN-001 Belguardo Vermentino — qty 6\nMON-KAF-002 Crema Espresso 1kg — qty 4\nMON-SOK-005 Red Bull Standard — qty 3\nPL-PRO-075 Prosecco Private Label — qty 12'};
  const workspace=document.querySelector('#po-workspace'); if(workspace){workspace.innerHTML=analyzingView(state.poResult.filename);icons();setTimeout(()=>{workspace.innerHTML=poReview(state.poResult);icons();},850);}
}

function poReview(result) {
  const hasUnknown=result.unknown.length>0;
  return `<div class="review-banner"><i data-lucide="scan-line"></i><div><strong>${esc(result.filename)}</strong><br>Dokument je očitan. Provjerite stavke i količine prije dodavanja u korpu.</div></div>${hasUnknown?`<div class="review-banner warn"><i data-lucide="triangle-alert"></i><div><strong>${result.unknown.length} ${result.unknown.length===1?'stavka nije prepoznata':'stavke nijesu prepoznate'}.</strong><br>Za svaku izaberite da Montecco provjeri dostupnost ili da je izostavite. Porudžbina se ne može potvrditi dok ne odlučite.</div></div>`:''}<div class="review-section"><div class="review-section-title"><span>Prepoznati proizvodi</span><span class="review-count">${result.matched.length}</span></div>${result.matched.length?result.matched.map((m,i)=>`<div class="review-item"><div><div class="review-name">${m.product.name}</div><div class="review-meta">${m.product.sku} · ${m.product.pack} · ${money(m.product.price)}</div></div><input type="number" min="1" max="999" value="${m.qty}" data-action="po-known-qty" data-index="${i}" aria-label="Količina"><strong style="text-align:right;font-size:10px">${money(m.product.price*m.qty)}</strong></div>`).join(''):`<div class="empty-copy">Nijedan artikal iz dodijeljenog asortimana nije automatski povezan.</div>`}</div>${hasUnknown?`<div class="review-section"><div class="review-section-title"><span>Potrebna vaša odluka</span><span class="review-count warn">${result.unknown.length}</span></div>${result.unknown.map((u,i)=>`<div class="review-item unknown"><div><div class="review-name">${esc(u.name)}</div><div class="review-meta">Nije pronađen u vašem dodijeljenom asortimanu</div></div><input type="number" min="1" value="${u.qty}" data-action="po-unknown-qty" data-index="${i}" aria-label="Količina"><select data-action="po-resolution" data-index="${i}" aria-label="Odluka"><option value="pending" ${u.resolution==='pending'?'selected':''}>Izaberite šta dalje…</option><option value="request" ${u.resolution==='request'?'selected':''}>Provjeri dostupnost</option><option value="skip" ${u.resolution==='skip'?'selected':''}>Izostavi iz porudžbine</option></select></div>`).join('')}</div>`:''}<details class="raw-extract"><summary>Pogledaj očitani tekst dokumenta</summary><pre>${esc(result.raw)}</pre></details><div class="button-row" style="justify-content:space-between;margin-top:18px"><button class="secondary-button" data-action="reset-upload"><i data-lucide="arrow-left"></i>Drugi dokument</button><button class="primary-button" id="confirm-po" data-action="confirm-po" ${hasPendingUnknowns()?'disabled':''}><i data-lucide="shopping-cart"></i>Dodaj u korpu</button></div>`;
}

function hasPendingUnknowns(){return Boolean(state.poResult?.unknown.some(item=>item.resolution==='pending'));}

function updatePoButton(){const button=document.querySelector('#confirm-po');if(button)button.disabled=hasPendingUnknowns();}

function confirmPo() {
  if(!state.poResult||hasPendingUnknowns()) return;
  const matchedCount = state.poResult.matched.length;
  state.poResult.matched.forEach(item=>{if(item.product.stock)state.cart.set(item.product.sku,(state.cart.get(item.product.sku)||0)+Math.max(1,Number(item.qty)||1));});
  const requests=state.poResult.unknown.filter(item=>item.resolution==='request');
  closeModal(); renderApp();
  showToast(requests.length?`${matchedCount} proizvoda je dodato. Montecco će provjeriti ${requests.length} ${requests.length === 1 ? 'nepoznatu stavku' : 'nepoznate stavke'}.`:'Prepoznati proizvodi su dodati u korpu.','success');
  openCart();
}

function openReviewPo() {
  const sample={filename:'PO-7284.pdf',matched:[{product:products.find(p=>p.sku==='MON-SOK-008'),qty:8},{product:products.find(p=>p.sku==='MON-VIN-003'),qty:5}],unknown:[{id:'u0',name:'Premium tonic Mediterranean 0,20 l',qty:4,resolution:'pending'}],raw:'PO-7284 · Voli Trade\nMON-SOK-008 Happy Day Narandža 100% qty 8\nMON-VIN-003 Pinot Grigio Delle Venezie qty 5\nXT-443 Premium tonic Mediterranean 0,20 l qty 4'};
  state.poResult=sample; openModal('Provjera porudžbenice','Jedna stavka nije automatski povezana sa Montecco asortimanom.',`<div id="po-workspace">${poReview(sample)}</div>`,'large');
}

function orderDetail(id) {
  const order=state.orders.find(o=>o.id===id)||state.orders[0];
  openModal(`Porudžbina ${order.id}`,`${order.partner} · ${order.date}`,`<div class="review-banner"><i data-lucide="package-check"></i><div><strong>${order.label}</strong><br>Porudžbina sadrži ${order.items} artikala u ukupnoj vrijednosti ${money(order.total)}.</div></div><div class="detail-facts"><div class="detail-fact"><div class="fact-label">Partner</div><div class="fact-value">${order.partner}</div></div><div class="detail-fact"><div class="fact-label">Cjenovnik</div><div class="fact-value">HORECA-A</div></div><div class="detail-fact"><div class="fact-label">Isporuka</div><div class="fact-value">10. sep 2026.</div></div><div class="detail-fact"><div class="fact-label">Izvor</div><div class="fact-value">Partner portal</div></div></div><div class="button-row" style="justify-content:flex-end"><button class="secondary-button" data-action="close-modal">Zatvori</button><button class="primary-button" data-action="export"><i data-lucide="download"></i>Preuzmi PDF</button></div>`);
}

function newOrder() {
  openModal('Nova porudžbina','Unesite porudžbinu u ime B2B partnera.',`<form id="admin-new-order"><div class="form-grid"><div class="form-field full"><label>Partner</label><select><option>Hotel Splendid</option><option>Voli Trade</option><option>HDL Laković</option></select></div><div class="form-field"><label>PO referenca</label><input placeholder="Opcionalno"></div><div class="form-field"><label>Datum isporuke</label><input type="date"></div><div class="form-field full"><label>Proizvodi</label><div class="helper">U produkciji se ovdje koristi isti katalog sa partnerskim cijenama i dostupnošću.</div></div><div class="form-field full"><button class="secondary-button" type="button" data-action="upload-po"><i data-lucide="file-up"></i>Umjesto toga uvezi dokument</button></div></div></form>`);
}

function showToast(message,tone='') {
  toastRoot.innerHTML=`<div class="toast ${tone}"><i data-lucide="${tone==='warn'?'triangle-alert':'check-circle-2'}"></i><span>${esc(message)}</span></div>`;icons();setTimeout(()=>{toastRoot.innerHTML='';},3600);
}

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}

document.addEventListener('click', event=>{
  const target=event.target.closest('[data-action]'); if(!target) return;
  const action=target.dataset.action;
  if(action==='close-modal' && (target.classList.contains('modal-backdrop') || target.classList.contains('drawer-backdrop')) && event.target.closest('[data-modal-panel]')) return;
  if(action==='navigate'){const section=target.dataset.section;if(state.mode==='admin')state.adminSection=section;else state.partnerSection=section;renderApp();window.scrollTo({top:0,behavior:'smooth'});}
  if(action==='mobile-menu')document.querySelector('#sidebar')?.classList.toggle('open');
  if(action==='switch-partner')openPartnerLogin();
  if(action==='switch-admin'){state.mode='admin';state.adminSection='dashboard';renderApp();}
  if(action==='notifications')showToast('Imate dvije porudžbenice za provjeru i jednog novog partnera.','warn');
  if(action==='close-modal')closeModal();
  if(action==='category'){state.category=target.dataset.category;renderApp();}
  if(action==='favorite'){event.stopPropagation();const sku=target.dataset.sku;state.favorites.has(sku)?state.favorites.delete(sku):state.favorites.add(sku);renderApp();}
  if(action==='product-detail')productDetail(target.dataset.sku);
  if(action==='add-cart'){event.stopPropagation();addToCart(target.dataset.sku);}
  if(action==='detail-add'){const qty=document.querySelector('#detail-qty')?.value||1;closeModal();addToCart(target.dataset.sku,qty);}
  if(action==='open-cart')openCart();
  if(action==='cart-increase'){state.cart.set(target.dataset.sku,(state.cart.get(target.dataset.sku)||0)+1);openCart();}
  if(action==='cart-decrease'){const sku=target.dataset.sku;const next=(state.cart.get(sku)||1)-1;next<=0?state.cart.delete(sku):state.cart.set(sku,next);openCart();}
  if(action==='cart-remove'){state.cart.delete(target.dataset.sku);openCart();}
  if(action==='checkout')checkout();
  if(action==='finish-order'){closeModal();state.partnerSection='home';renderApp();}
  if(action==='reorder')reorder(target.dataset.order);
  if(action==='upload-po'){closeModal();setTimeout(openUpload,0);}
  if(action==='sample-po'){event.preventDefault();event.stopPropagation();sampleOrder();}
  if(action==='reset-upload'){state.poResult=null;const workspace=document.querySelector('#po-workspace');if(workspace){workspace.innerHTML=uploadZone();icons();bindUpload();}}
  if(action==='confirm-po')confirmPo();
  if(action==='review-po')openReviewPo();
  if(action==='order-detail')orderDetail(target.dataset.order);
  if(action==='new-order')newOrder();
  if(action==='add-quick'){let added=0;document.querySelectorAll('.quick-qty').forEach(input=>{const qty=Number(input.value)||0;if(qty>0){const p=products.find(item=>item.sku===input.dataset.sku);if(p&&p.stock){state.cart.set(p.sku,(state.cart.get(p.sku)||0)+qty);added+=qty;}}});renderApp();added?showToast(`${added} pakovanja je dodato u korpu.`,'success'):showToast('Unesite količinu za najmanje jedan proizvod.','warn');if(added)openCart();}
  if(action==='export')showToast('Demo izvještaj je spreman za preuzimanje.','success');
  if(action==='sync-now')showToast('ERP sinhronizacija je uspješno završena.','success');
});

document.addEventListener('input',event=>{
  if(event.target.id==='catalog-search'){state.search=event.target.value;const favorites=state.partnerSection==='favorites';const root=document.querySelector('#catalog-results');if(root)root.innerHTML=renderProductResults(favorites);icons();}
  if(event.target.dataset.action==='po-known-qty'&&state.poResult){const i=Number(event.target.dataset.index);state.poResult.matched[i].qty=Math.max(1,Number(event.target.value)||1);}
  if(event.target.dataset.action==='po-unknown-qty'&&state.poResult){const i=Number(event.target.dataset.index);state.poResult.unknown[i].qty=Math.max(1,Number(event.target.value)||1);}
});

document.addEventListener('change',event=>{
  if(event.target.id==='catalog-sort'){state.sort=event.target.value;const favorites=state.partnerSection==='favorites';const root=document.querySelector('#catalog-results');if(root)root.innerHTML=renderProductResults(favorites);icons();}
  if(event.target.dataset.action==='po-resolution'&&state.poResult){state.poResult.unknown[Number(event.target.dataset.index)].resolution=event.target.value;updatePoButton();}
});

document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modalRoot.innerHTML)closeModal();});

renderApp();

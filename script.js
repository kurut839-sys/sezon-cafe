 
const MENU_DATA = [
  { id: 1, name: 'Бешбармак по-нарынски', category: 'national', price: 420, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80', desc: 'Отварная конина и телятина с тонким лапшовым тестом.' },
  { id: 2, name: 'Таш-Кордо из баранины', category: 'national', price: 650, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80', desc: 'Нежнейшее мясо барашка по рецепту кочевников.' },
  { id: 3, name: 'Сочный Куурдак', category: 'national', price: 480, image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=500&q=80', desc: 'Жареная мякоть телятины с картофелем.' },
  { id: 4, name: 'Манты сочные (5 шт)', category: 'national', price: 320, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80', desc: 'Паровые манты с говядиной.' },
  { id: 5, name: 'Самсы тандырные (2 шт)', category: 'national', price: 180, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80', desc: 'Слоеное тесто из тандыра с бараниной.' },
  { id: 6, name: 'Уйгурский Лагман', category: 'mains', price: 350, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80', desc: 'Тянутая вручную лапша с мясом и овощами.' },
  { id: 7, name: 'Босо Лагман', category: 'mains', price: 370, image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80', desc: 'Жареная лапша с говядиной и джусаем.' },
  { id: 8, name: 'Плов праздничный', category: 'mains', price: 380, image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80', desc: 'Рис девзира, баранина и жёлтая морковь.' },
  { id: 9, name: 'Стейк Рибай', category: 'mains', price: 890, image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80', desc: 'Мраморная говядина с овощами гриль.' },
  { id: 10, name: 'Ашлян-Фу по-каракольски', category: 'snacks', price: 150, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80', desc: 'Острый холодный суп с лапшой и омлетом.' },
  { id: 11, name: 'Шорпо из баранины', category: 'snacks', price: 290, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80', desc: 'Прозрачный бульон с ребрышком барашка.' },
  { id: 12, name: 'Чучвара шорпосы', category: 'snacks', price: 260, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80', desc: 'Мини-пельмени в бульоне.' },
  { id: 13, name: 'Ассорти из Казы', category: 'snacks', price: 520, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80', desc: 'Домашняя колбаса из конины.' },
  { id: 14, name: 'Боорсоки с каймаком', category: 'snacks', price: 160, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80', desc: 'Обжаренное тесто со сметаной.' },
  { id: 15, name: 'Максым (0.5L)', category: 'drinks', price: 80, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80', desc: 'Злаковый национальный напиток.' },
  { id: 16, name: 'Чалап (0.5L)', category: 'drinks', price: 80, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80', desc: 'Кисломолочный напиток.' },
  { id: 17, name: 'Чай с облепихой', category: 'drinks', price: 180, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80', desc: 'Чай с горными травами.' },
  { id: 18, name: 'Кофе Латте', category: 'drinks', price: 170, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80', desc: 'Кофе с молочной пенкой.' },
  { id: 19, name: 'Пахлава с медом', category: 'desserts', price: 210, image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=500&q=80', desc: 'Слоеное пирожное с орехами.' },
  { id: 20, name: 'Чизкейк', category: 'desserts', price: 250, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80', desc: 'Сливочный десерт с ягодами.' }
];

let state = {
  favorites: JSON.parse(localStorage.getItem('sezon_favs') || '[]'),
  cart: JSON.parse(localStorage.getItem('sezon_cart') || '[]'),
  history: JSON.parse(localStorage.getItem('sezon_hist') || '[]')
};

document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  updateFavoritesUI();
  updateCartUI();
  renderHistory();
});

function showSection(sectionId) {
  const sections = ['home', 'menu', 'favorites', 'about', 'history'];

  sections.forEach(sec => {
    const el = document.getElementById(`sec-${sec}`);
    if (el) el.classList.add('hidden');

    const navBtn = document.getElementById(`nav-${sec}`);
    if (navBtn) navBtn.classList.remove('active-nav');
  });

  const activeSection = document.getElementById(`sec-${sectionId}`);
  if (activeSection) activeSection.classList.remove('hidden');

  const activeNav = document.getElementById(`nav-${sectionId}`);
  if (activeNav) activeNav.classList.add('active-nav');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCategory(category) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('active-cat');

    if (btn.dataset.cat === category) {
      btn.classList.add('active-cat');
    }
  });

  renderMenu(category);
}

function renderMenu(category = 'all') {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const filtered = category === 'all'
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => createCardHTML(item)).join('');
}

function createCardHTML(item) {
  const isFavorite = state.favorites.includes(item.id);

  return `
    <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition flex flex-col justify-between card-appear">
      <div class="relative overflow-hidden h-48">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="w-full h-full object-cover"
        >

        <button
          onclick="toggleFavorite(${item.id})"
          class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md text-gray-400 hover:text-red-500 cursor-pointer"
        >
          <i class="fa-${isFavorite ? 'solid text-red-500' : 'regular'} fa-heart"></i>
        </button>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="font-bold text-gray-800 text-lg">${item.name}</h3>
          <p class="text-xs text-gray-500 mt-1">${item.desc}</p>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-gray-50">
          <span class="font-bold text-[#0D3B2E] text-lg">${item.price} KGS</span>

          <button
            onclick="addToCart(${item.id})"
            class="bg-[#0D3B2E] text-[#D4AF37] px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer"
          >
            + В корзину
          </button>
        </div>
      </div>
    </div>
  `;
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(favId => favId !== id);
  } else {
    state.favorites.push(id);
  }

  localStorage.setItem('sezon_favs', JSON.stringify(state.favorites));

  const activeCategory =
    document.querySelector('.cat-btn.active-cat')?.dataset.cat || 'all';

  renderMenu(activeCategory);
  updateFavoritesUI();
}

function updateFavoritesUI() {
  const badge = document.getElementById('fav-count-badge');

  if (badge) {
    badge.innerText = state.favorites.length;
    badge.classList.toggle('hidden', state.favorites.length === 0);
  }

  const favoritesGrid = document.getElementById('favorites-grid');
  const homeFavoritesGrid = document.getElementById('home-favorites-list');

  const favoriteItems = MENU_DATA.filter(item =>
    state.favorites.includes(item.id)
  );

  const content = favoriteItems.length > 0
    ? favoriteItems.map(item => createCardHTML(item)).join('')
    : `<div class="col-span-full text-center py-12 text-gray-400">В избранном пока ничего нет.</div>`;

  if (favoritesGrid) favoritesGrid.innerHTML = content;
  if (homeFavoritesGrid) homeFavoritesGrid.innerHTML = content;
}

function addToCart(id) {
  const existingItem = state.cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }

  saveCart();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(cartItem => cartItem.id === id);

  if (item) {
    item.qty += delta;

    if (item.qty <= 0) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== id);
    }
  }

  saveCart();
}

function saveCart() {
  localStorage.setItem('sezon_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');

  const totalCount = state.cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  if (badge) badge.innerText = totalCount;

  const container = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');

  let totalSum = 0;

  if (container) {
    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-gray-400">
          Корзина пуста
        </div>
      `;
    } else {
      container.innerHTML = state.cart.map(cartItem => {
        const product = MENU_DATA.find(item => item.id === cartItem.id);

        if (!product) return '';

        totalSum += product.price * cartItem.qty;

        return `
          <div class="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
            <div>
              <h4 class="font-bold text-sm">${product.name}</h4>
              <p class="text-xs text-gray-500">${product.price} KGS</p>
            </div>

            <div class="flex items-center gap-2">
              <button
                onclick="updateCartQty(${cartItem.id}, -1)"
                class="w-7 h-7 bg-white border font-bold rounded"
              >−</button>

              <span class="text-sm font-bold">${cartItem.qty}</span>

              <button
                onclick="updateCartQty(${cartItem.id}, 1)"
                class="w-7 h-7 bg-white border font-bold rounded"
              >+</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  if (totalElement) {
    totalElement.innerText = `${totalSum} KGS`;
  }
}

function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.toggle('hidden');
}

function checkout() {
  if (state.cart.length === 0) {
    alert('Ваша корзина пуста!');
    return;
  }

  const orderItems = state.cart.map(cartItem => {
    const product = MENU_DATA.find(item => item.id === cartItem.id);

    return {
      name: product.name,
      qty: cartItem.qty,
      price: product.price
    };
  });

  const totalSum = orderItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const now = new Date();

  const newOrder = {
    id: 'SZ-' + Math.floor(1000 + Math.random() * 9000),
    date: now.toLocaleDateString('ru-RU') + ' ' +
      now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
      }),
    items: orderItems,
    total: totalSum
  };

  let message = `🍽 Новый заказ в кафе «Сезон»!\n`;
  message += `Заказ: ${newOrder.id}\n`;
  message += `Время: ${newOrder.date}\n\n`;
  message += `Состав заказа:\n`;

  orderItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} × ${item.qty} — ${item.price * item.qty} KGS\n`;
  });

  message += `\nИтого к оплате: ${totalSum} KGS\n`;
  message += `Прошу подтвердить и принять заказ!`;

  // Номер WhatsApp: код страны и номер без знака +
  const phoneWhatsApp = '996227070029';

  const whatsappURL =
    `https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent(message)}`;

  // Открываем WhatsApp с готовым сообщением
  window.open(whatsappURL, '_blank');

  // Сохраняем заказ в истории
  state.history.unshift(newOrder);
  localStorage.setItem('sezon_hist', JSON.stringify(state.history));

  // Очищаем корзину
  state.cart = [];
  saveCart();

  // Закрываем корзину
  const cartModal = document.getElementById('cart-modal');

  if (cartModal) {
    cartModal.classList.add('hidden');
  }

  renderHistory();
  showSection('history');
}

function renderHistory() {
  const container = document.getElementById('history-container');
  if (!container) return;

  if (state.history.length === 0) {
    container.innerHTML = `
      <div class="bg-white p-8 rounded-2xl text-center text-gray-400">
        История пуста
      </div>
    `;
    return;
  }

  container.innerHTML = state.history.map(order => `
    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
      <div class="flex justify-between font-bold border-b pb-2">
        <span>Заказ ${order.id}</span>
        <span class="text-xs text-gray-400">${order.date}</span>
      </div>

      <div class="text-sm text-gray-600">
        ${order.items.map(item => `
          <div>${item.name} × ${item.qty} — ${item.price * item.qty} KGS</div>
        `).join('')}
      </div>

      <div class="font-bold text-[#0D3B2E] pt-2 border-t">
        Итого: ${order.total} KGS
      </div>
    </div>
  `).join('');
}

function clearHistory() {
  state.history = [];
  localStorage.removeItem('sezon_hist');
  renderHistory();
}

let cart = [];

// ========================================
// ИНФОРМАЦИЯ О БЛЮДАХ
// ========================================

const dishInfo = {
  'Мастава': {
    description: 'Ароматный домашний суп с рисом и овощами.',
    ingredients: 'мясо, рис, картофель, морковь, лук, зелень и специи',
    bestTime: 'Лучше всего подходит для обеда.'
  },

  'Чучбара': {
    description: 'Домашние пельмени в ароматном бульоне.',
    ingredients: 'тесто, мясо, лук, зелень и специи',
    bestTime: 'Лучше всего подходит для обеда или раннего ужина.'
  },

  'Аш': {
    description: 'Домашний плов с мясом и зеленью.',
    ingredients: 'рис, мясо, морковь, лук, масло и специи',
    bestTime: 'Лучше всего подходит для сытного обеда.'
  },

  'Лагман': {
    description: 'Домашний лагман с мясом и овощами.',
    ingredients: 'лапша, мясо, болгарский перец, морковь, лук, зелень и специи',
    bestTime: 'Лучше всего подходит для обеда или ужина.'
  },

  'Чай': {
    description: 'Ароматный зелёный или чёрный чай.',
    ingredients: 'чайные листья и вода',
    bestTime: 'Можно пить утром, днём или вечером.'
  },

  'Компот': {
    description: 'Освежающий домашний компот.',
    ingredients: 'фрукты или ягоды, вода и сахар',
    bestTime: 'Хорошо подходит к обеду или после еды.'
  }
};


// ========================================
// ДОБАВЛЕНИЕ В КОРЗИНУ
// ========================================

function addToCart(name, price) {
  if (price === 0) {
    alert('Цена этого блюда уточняется. Позвоните: 0755 96 66 66');
    return;
  }

  // Проверяем, есть ли уже такое блюдо
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    // Если есть — увеличиваем количество
    existingItem.quantity++;
  } else {
    // Если нет — добавляем новое
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();
  openCart();
}


// ========================================
// ОБНОВЛЕНИЕ КОРЗИНЫ
// ========================================

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  // Считаем общее количество блюд
  const totalCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  cartCount.textContent = totalCount;

  // Если корзина пустая
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty">Корзина пока пустая</p>
    `;

    cartTotal.textContent = '0 сом';
    return;
  }

  cartItems.innerHTML = '';

  let total = 0;

  // Выводим блюда
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">

        <div>
          <strong>${item.name}</strong><br>

         <span>
  ${item.quantity} шт.
</span><br>

<strong>
  ${itemTotal} сом
</strong>
        </div>

        <button
          class="remove-item"
          onclick="removeItem(${index})"
        >
          ✕
        </button>

      </div>
    `;
  });

  // ========================================
  // ИНФОРМАЦИЯ О БЛЮДАХ
  // ========================================

  let infoHTML = '';

  cart.forEach(item => {
    const info = dishInfo[item.name];

    if (!info) return;

    infoHTML += `
      <div class="dish-description">

        <h3>О блюде</h3>

        <p>
          ${info.description}
        </p>

        <p>
          <strong>Ингредиенты:</strong><br>
          ${info.ingredients}
        </p>

        <p>
          <strong>Лучшее время:</strong><br>
          ${info.bestTime}
        </p>

      </div>
    `;
  });

  // Добавляем информацию перед итогом
  cartItems.innerHTML += infoHTML;

  // Итоговая сумма
  cartTotal.textContent = total + ' сом';
}


// ========================================
// УДАЛЕНИЕ / УМЕНЬШЕНИЕ КОЛИЧЕСТВА
// ========================================

function removeItem(index) {
  if (cart[index].quantity > 1) {

    // Уменьшаем количество на 1
    cart[index].quantity--;

  } else {

    // Если осталась 1 штука — удаляем блюдо
    cart.splice(index, 1);
  }

  updateCart();
}


// ========================================
// ОТКРЫТЬ КОРЗИНУ
// ========================================

function openCart() {
  document.getElementById('cart').classList.add('show');
  document.getElementById('cartOverlay').classList.add('show');
}


// ========================================
// ЗАКРЫТЬ КОРЗИНУ
// ========================================

function closeCart() {
  document.getElementById('cart').classList.remove('show');
  document.getElementById('cartOverlay').classList.remove('show');
}


// ========================================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ========================================

function order() {
  if (cart.length === 0) {
    alert('Сначала добавьте блюдо в корзину.');
    return;
  }

  const phone = '996227070029';

  let message = 'Здравствуйте! Хочу сделать заказ:\n\n';

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    message += `${item.name} — ${item.quantity} шт. — ${itemTotal} сом\n`;
  });

  message += `\nИтого: ${total} сом`;

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
}


// ========================================
// ФИЛЬТР МЕНЮ
// ========================================

function filterMenu(category, button) {
  const cards = document.querySelectorAll('.food-card');
  const buttons = document.querySelectorAll('.filter');

  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');

  cards.forEach((card) => {
    const show =
      category === 'all' ||
      card.dataset.category === category;

    card.style.display = show ? 'block' : 'none';
  });
}


// ========================================
// ИЗОБРАЖЕНИЯ МЕНЮ
// ========================================

function applyMenuImages() {
  const cards = document.querySelectorAll('.food-card');

  cards.forEach((card) => {
    const wrap = card.querySelector('.food-image');

    if (!wrap) return;

    const name =
      card.querySelector('h3')?.textContent.trim();

    const image =
      name ? window.menuImages?.[name] : null;

    if (image) {
      wrap.innerHTML = `
        <img
          src="${image.src}"
          alt="${image.alt}"
          loading="lazy"
        >
      `;
    }
  });
}


// ========================================
// ЗАПУСК ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  applyMenuImages();
  updateCart();
});
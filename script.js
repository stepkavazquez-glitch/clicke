// Находим элементы на странице
const counterEl = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const coinsDisplay = document.getElementById('coinsDisplay');
const clickPowerDisplay = document.getElementById('clickPowerDisplay');
const upgradeInfo = document.getElementById('upgradeInfo');
const upgradeBtn = document.getElementById('upgradeBtn');

// Переменные игры
let count = 0;              // монеты
let clickpower = 1;         // сила клика
let upgradeprice = 10;      // цена улучшения
let upgradelevel = 0;       // сколько куплено улучшений

// Загружаем сохранённые данные
const savedCount = localStorage.getItem('clicker_count');
if (savedCount !== null) {
    count = parseInt(savedCount);
}

// Функция обновления экрана
function updateDisplay() {
    // Показываем монеты
    counterEl.textContent = count;
    coinsDisplay.textContent = 'Монет: ' + count;
    
    // Показываем силу клика
    clickPowerDisplay.textContent = 'Сила клика: +' + clickpower;
    
    // Показываем информацию об улучшении
    upgradeInfo.textContent = 'Улучшений: ' + upgradelevel + ' (цена: ' + upgradeprice + ')';
    
    // Сохраняем в localStorage
    localStorage.setItem('clicker_count', count);
}

// Кнопка "Кликни меня!"
clickBtn.addEventListener('click', function() {
    count = count + clickpower;  // добавляем силу клика
    updateDisplay();
});

upgradeBtn.addEventListener('click', function() {
    if (count >= upgradeprice) {
        count = count - upgradeprice;
        clickpower = clickpower + 1
        upgradeprice = upgradeprice * 2
        upgradelevel = upgradelevel + 1
        updateDisplay();
    } else {
        alert("Не хватает деняк!")
    }
});

// Кнопка "Купить улучшение" — добавляем позже
// upgradeBtn.addEventListener('click', function() {
//     // логика покупки
// });

// Кнопка "Сброс"
resetBtn.addEventListener('click', function() {
    count = 0;
    clickpower = 1;
    upgradeprice = 10;
    upgradelevel = 0;
    updateDisplay();
});

// При загрузке показываем
updateDisplay();
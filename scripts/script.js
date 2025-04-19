console.log('Hello!');

AOS.init();

const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach(btn => btn.classList.remove("bg-black", "text-white"));
        button.classList.add("bg-black", "text-white");

        items.forEach(item => {
            item.style.display = filter === "all" || item.classList.contains(filter) ? "block" : "none";
        });
    });
});

let currentIndex = 0;
const itemss = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function changeSlide() {
    // Убираем класс opacity с текущего слайда
    itemss[currentIndex].style.opacity = 0;

    // Переходим к следующему слайду
    currentIndex = (currentIndex + 1) % totalItems;

    // Добавляем класс opacity к следующему слайду
    itemss[currentIndex].style.opacity = 1;

    // Двигаем карусель влево на 100% ширины каждого слайда
    document.querySelector('.carousel-inner').style.transform = `translateX(-${100 * currentIndex}%)`;
}


setInterval(changeSlide, 3000);


const card = document.querySelector('.hero-card');
const container = document.querySelector('.hero');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

card.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
    card.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    // Ограничения по краям блока
    const maxX = container.clientWidth - card.offsetWidth;
    const maxY = container.clientHeight - card.offsetHeight;

    card.style.left = Math.min(Math.max(0, x), maxX) + 'px';
    card.style.top = Math.min(Math.max(0, y), maxY) + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    card.style.transition = 'all 0.3s ease';
});







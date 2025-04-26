console.log('Hello!');

AOS.init();

const images = document.querySelectorAll('.animated-image');
let current = 0;

setInterval(() => {
    images[current].classList.remove('visible');
    current = (current + 1) % images.length;
    images[current].classList.add('visible');
}, 13000); // каждые 8 секунд

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

const mainName = document.querySelector('.main-name');
const glow = document.querySelector('.light-glow');

mainName.addEventListener('mouseenter', () => {
    glow.classList.add('active');
});

mainName.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
});



// const card = document.querySelector('.hero-card');
// const container = document.querySelector('.hero');
//
// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;
//
// function isMobile() {
//     return window.innerWidth <= 767;
// }
//
// if (!isMobile()) {
//     card.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         offsetX = e.clientX - card.offsetLeft;
//         offsetY = e.clientY - card.offsetTop;
//         card.style.transition = 'none';
//         card.style.cursor = 'grabbing';
//     });
//
//     document.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//
//         const x = e.clientX - offsetX;
//         const y = e.clientY - offsetY;
//
//         // Вариант без жёстких ограничений (можно добавить мягкие границы при необходимости)
//         card.style.left = x + 'px';
//         card.style.top = y + 'px';
//     });
//
//     document.addEventListener('mouseup', () => {
//         isDragging = false;
//         card.style.transition = 'all 0.3s ease';
//         card.style.cursor = 'grab';
//     });
// }


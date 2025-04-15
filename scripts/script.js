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

// Переключаем слайды каждые 3 секунды
setInterval(changeSlide, 3000);



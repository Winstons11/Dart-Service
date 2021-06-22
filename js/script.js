const accordions = document.querySelectorAll('.services__box');

for (item of accordions) {
   item.addEventListener('click', function () {
      this.classList.toggle('active');
   });
};

// let cards = document.querySelectorAll('.customers-card');
// let current = 0;

// function slider() {
//    for (let i = 0; i < cards.length; i++) {
//       cards[i].classList.add('opacity0');
//    }
//    cards[current].classList.remove('opacity0');
// }

// document.querySelector('.prev-btn').onclick = function () {
//    if (current - 1 == -1) {
//       current = cards.length - 1;

//    } else {
//       current--;
//    }
//    slider();
// };
// document.querySelector('.next-btn').onclick = function () {
//    if (current + 1 == cards.length) {
//       current = 0;

//    } else {
//       current++;
//    }
//    slider();
// };


//Слайдер сообщений
let activeIndex = 0,//Текущий слайд
   sliderContainer = document.getElementById('vertical-slider'),//Контейнер слайдера
   sliderItems = document.querySelectorAll('.customers-card'),//Псевдомассив слайдов
   sliderPrev = document.querySelector('.prev-btn'),//Стрелка вправо
   sliderNext = document.querySelector('.next-btn'),//Стрелка влево
   timerVert;

//Основная функция слайдера
function changeSlide(n) {

   if (n > sliderItems.length) {
      //Возврат к первому слайду после перебора всего псевдомассива слайдов
      activeIndex = 1;
   };

   if (n < 1) {
      //Возврат в конец псевдомассива после перебора всего псевдомассива слайдов в оратном направлении
      activeIndex = sliderItems.length;
   };

   //Установка видимости текущего слайда
   sliderItems.forEach(n => n.classList.remove('customers-card-active'));
   sliderItems[activeIndex - 1].classList.add('customers-card-active');
};

//Функции увеличения индекса активного слайда.
//Получают данные (n) из обработчика событий sliderPrev и sliderNext
function plusSlides(n) {
   changeSlide(activeIndex += n);
};

function currentSlide(n) {
   changeSlide(activeIndex = n);
};

//Переключение на один слайд назад по клику
sliderPrev.addEventListener('click', () => {
   plusSlides(-1);
});

//Переключение на один слайд вперед по клику
sliderNext.addEventListener('click', () => {
   plusSlides(1);
});

//Приостановка автоматического переключения слайдов 
//при наведении курсора на контейнер (sliderContainer)
// sliderContainer.addEventListener('mouseenter', (e) => {
//    clearInterval(timerVert);
// });

//Возобновление автоматического переключения слайдов 
//при выводе курсора за пределы контейнера (sliderContainer) 
// sliderContainer.addEventListener('mouseleave', (e) => {
//    timerVert = setInterval(() => {
//       sliderNext.click();
//    }, 3000);
//    changeSlide(activeIndex);
// });

//Установка таймера автоматического переключения слайдов с интервалом в 3 секунды
// timerVert = setInterval(() => {
//    sliderNext.click();
// }, 3000);

//Запуск слайдера
changeSlide(activeIndex);
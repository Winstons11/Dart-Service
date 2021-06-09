const accordions = document.querySelectorAll('.services__box');

for (item of accordions) {
   item.addEventListener('click', function () {
      this.classList.toggle('active');
   });
};

let cards = document.querySelectorAll('.customers-card');
let current = 0;

function slider() {
   for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('opacity0');
   }
   cards[current].classList.remove('opacity0');
}

document.querySelector('.prev-btn').onclick = function () {
   if (current - 1 == -1) {
      current = cards.length - 1;

   } else {
      current--;
   }
   slider();
};
document.querySelector('.next-btn').onclick = function () {
   if (current + 1 == cards.length) {
      current = 0;

   } else {
      current++;
   }
   slider();
};

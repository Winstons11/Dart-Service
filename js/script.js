const accordions = document.querySelectorAll('.services__box');

for(item of accordions) {
   item.addEventListener('click', function() {
      this.classList.toggle('active');
   });
};

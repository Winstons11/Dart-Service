const active = document.querySelectorAll('services__block');

active.forEach(function(item) {
   item.addEventListener('click', function() {
      console.log('clicked');
   });
});

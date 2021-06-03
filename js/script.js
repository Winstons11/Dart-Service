let coll = document.getElementsByClassName('rectangle__box');
for(let i = 0; i < coll.length; i++) {
   coll[i].addEventListener('click',function () {
   this.classList.toggle('active');
   let content = this.nexElementSibling;
   if (content.style.maxHeight) {
      content.style.maxHeight = null
   } else {
      content.style.maxHeight = content.scrollHeight + 'px'
   }
   })
}
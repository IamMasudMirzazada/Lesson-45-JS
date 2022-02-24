var menus=document.querySelectorAll('.tab-menu div');
var contents =document.querySelectorAll('.content div');

 for (var menu of menus) {
     menu.addEventListener('click',function(){
var active=document.querySelector('.active');
active.classList.remove('active');
this.classList.add('active');

var index=this.getAttribute("data-car");
console.log(index)

for (const content of contents) {
    if (content.getAttribute('data-car')==index) {
       content.classList.remove('d-none');
     
    }
    else{
        content.classList.add('d-none')
    }
}





     })
 }
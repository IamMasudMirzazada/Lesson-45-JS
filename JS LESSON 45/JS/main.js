var Imagelist=[
    "photos/hundai4.jpg",
    "photos/hyundai2.jpg",
    "photos/hyundai.jpg"
]
var image =document.querySelector('.photo');
image.src=Imagelist[0];

var currentSlide=0;

var next= document.querySelector('.next');
var back=document.querySelector('.back');

next.onclick= function(){
    currentSlide++;
    
    if (currentSlide > Imagelist.length-1) {
        currentSlide=0
    }
    image.src=Imagelist[currentSlide];
}
back.onclick=function(){
    currentSlide--;
    if (currentSlide==-1) {
        currentSlide=Imagelist.length-1;
    } 
    image.src=Imagelist[currentSlide];
}

function AutoPlay(){
    currentSlide--;
    if (currentSlide==-1) {
        currentSlide=Imagelist.length-1;
    } 
    image.src=Imagelist[currentSlide];
}

setInterval(AutoPlay,2000);



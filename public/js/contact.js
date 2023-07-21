// navbar javaScript function
let menu = document.querySelector('nav'); 
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
})



let whatsLink = document.querySelector('.whatsapp-link');

whatsLink.addEventListener('click', function(){
    var url = "https://wa.me/919205248110?text=" ;
    window.open(url, '_blank').focus();
})
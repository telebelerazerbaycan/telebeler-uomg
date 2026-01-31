// Mobil menu
const bars = document.querySelector('.h_bar');
const hamburgerMenu = document.querySelector('.mobile');
const close = document.querySelector('.close');

bars.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('opens');
});
close.addEventListener('click', ()=>{
    hamburgerMenu.classList.remove('opens')
});

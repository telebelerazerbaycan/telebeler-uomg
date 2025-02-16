// Mobil Nav
const mobilSideBar = document.querySelector('.sidebar');
const mobilMenu = document.querySelector('.mobilnav');

mobilSideBar.addEventListener('click', function(){
    mobilMenu.classList.toggle('active');
});

// Swiper
document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('mySwiper', {
        loop:true,
        autoplay:{
            delay:2000,
            disableOnInteraction: false
        },
        effect:'slide',
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
    });
});



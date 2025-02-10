const openBar = document.querySelector(".bars");
const navList = document.querySelector(".mobilMenu");
const mainList = document.querySelector(".main_lang");
const difLang = document.querySelector(".mobil_lang");
openBar.addEventListener("click", () =>{
    navList.classList.toggle("active");
});
mainList.addEventListener("click", () => {
    difLang.classList.toggle("active");
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



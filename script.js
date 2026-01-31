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

/// Loading ekranı
const loadingTime = 2; // saniyə (istədiyini yaz: 3,5,8,10)

let progress = 0;
const bar = document.getElementById("progress-bar");
const percentText = document.getElementById("percent");

const intervalTime = (loadingTime * 1000) / 100; // hər 1% üçün vaxt

let timer = setInterval(() => {
  progress++;
  bar.style.width = progress + "%";
  percentText.innerText = progress + "%";

  if(progress >= 100){
    clearInterval(timer);
    document.getElementById("loading").style.display = "none";
  }
}, intervalTime);

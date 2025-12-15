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
const canvas = document.getElementById('karCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const karSayisi = 100;
        const karlar = [];

        class KarTanesi {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -50; // Yuxarıdan kənarda başlasın
                this.boyut = Math.random() * 3 + 1;
                this.hizY = Math.random() * 1.2 + 0.8; // Yavaş və düz düşmə
                this.hizX = 0; // Rüzgar effekti tam sıfırlandı
                this.opacity = Math.random() * 0.4 + 0.6;
            }

            guncelle() {
                this.y += this.hizY;
                this.x += this.hizX; // 0 olduğu üçün x dəyişmir

                // Aşağı düşəndə yenidən yuxarıdan başlasın
                if (this.y > window.innerHeight + 50) {
                    this.reset();
                    this.y = -50;
                }
            }

            ciz() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.boyut, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Kar tanelerini yarat
        for (let i = 0; i < karSayisi; i++) {
            karlar.push(new KarTanesi());
        }

        function animasyon() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            karlar.forEach(kar => {
                kar.guncelle();
                kar.ciz();
            });

            requestAnimationFrame(animasyon);
        }
                setTimeout(() => {
            document.body.classList.add('loaded');
            animasyon(); // Kar yağışını loading bitdikdən sonra başlat
        }, 3500); // 3000ms = 3 saniyə

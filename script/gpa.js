document.addEventListener("DOMContentLoaded", function () {
    let fennSaySelect = document.getElementById("fennSay");
    let fennlerDiv = document.getElementById("fennler");

    function fennleriYenile() {
        let fennSay = parseInt(fennSaySelect.value);
        fennlerDiv.innerHTML = ""; // Əvvəlki input-ları təmizləyirik

        for (let i = 0; i < fennSay; i++) {
            let row = document.createElement("div");
            row.classList.add("row");

            row.innerHTML = `
                <input type="number" class="bal" placeholder="Ümumi bal">
                <input type="number" class="kredit" placeholder="Fənnin krediti ">
            `;

            fennlerDiv.appendChild(row);
        }
    }

    fennSaySelect.addEventListener("change", fennleriYenile);
    fennleriYenile(); // İlk açılışda mövcud fənn sayına görə input-ları göstərmək üçün

    document.getElementById("hesabla").addEventListener("click", function () {
        let toplamBal = 0;
        let toplamKredit = 0;
        let rows = document.querySelectorAll(".row");

        rows.forEach(row => {
            let bal = parseFloat(row.querySelector(".bal").value);
            let kredit = parseFloat(row.querySelector(".kredit").value);

            if (!isNaN(bal) && !isNaN(kredit)) {
                toplamBal += bal * kredit;
                toplamKredit += kredit;
            }
        });

        if (toplamKredit > 0) {
            let ortalama = toplamBal / toplamKredit;
            document.getElementById("netice").innerText = "Ortalama: " + ortalama.toFixed(2);
        } else {
            document.getElementById("netice").innerText = "Zəhmət olmasa düzgün dəyərlər daxil edin :)";
        }
    });
});
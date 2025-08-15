document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Lütfen isminizi giriniz!");
        return;
    }

    // Giriş kısmını gizle
    document.getElementById("inputSection").style.display = "none";

    // Thumbs up Mario'yu göster
    document.getElementById("thumbMario").style.display = "block";

    // Mesaj alanını göster
    const messageDiv = document.getElementById("messageSection");
    messageDiv.style.display = "block";
    messageDiv.classList.add("message");

    // İlk yazdırma
    updateDateTime(name);

    // Her saniyede bir güncelle
    setInterval(function () {
        updateDateTime(name);
    }, 1000);
});

// Tarih ve saati güncelleyen fonksiyon
function updateDateTime(name) {
    const now = new Date();
    const date = now.toLocaleDateString('tr-TR');
    const time = now.toLocaleTimeString('tr-TR');

    document.getElementById("messageSection").innerHTML = `
        <p>Tebrikler <strong>${name}</strong>, ilk ödevi başarıyla tamamladın! 🎉</p>
        <p>Bugünün tarihi: ${date}</p>
        <p>Saat: ${time}</p>
    `;
}

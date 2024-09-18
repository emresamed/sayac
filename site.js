let counterInterval; // Bu değişken interval ID'yi saklayacak

function updateCounter(startDate) {
    const now = new Date().getTime();
    const elapsedTime = now - startDate.getTime();

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('counter-value').textContent = 
        `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
}

function startCounter() {
    const startDateInput = document.getElementById('start-date').value;
    const startDate = new Date(startDateInput);

    if (isNaN(startDate.getTime())) {
        alert("Lütfen geçerli bir tarih giriniz.");
        return;
    }

    updateCounter(startDate);

    // Sayaç çalışırken mevcut interval'i durdur
    clearInterval(counterInterval);

    // Yeni interval oluştur ve çalıştır
    counterInterval = setInterval(() => {
        updateCounter(startDate);
    }, 1000); // Her saniyede bir güncelleme
}

function stopCounter() {
    clearInterval(counterInterval); // Sayaç artışını durdurur
}

// Butonlara olay dinleyicileri ekliyoruz
document.getElementById('start-button').addEventListener('click', startCounter);
document.getElementById('stop-button').addEventListener('click', stopCounter);



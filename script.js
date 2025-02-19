const btnSurprise = document.getElementById('btn-surprise');
const surpriseGift = document.getElementById('surprise-gift');

// Array surprise gift
const gifts = [
    'Kamu mendapatkan hadiah ciuman!',
    'Kamu mendapatkan hadiah pelukan!',
    'Kamu mendapatkan hadiah cokelat!',
    'Kamu mendapatkan hadiah bunga!',
];

// Fungsi untuk memilih surprise gift secara acak
function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
}

// Fungsi untuk menampilkan surprise gift
function showSurpriseGift() {
    const gift = getRandomGift();
    surpriseGift.innerHTML = gift;
    surpriseGift.classList.remove('hidden');
}

// Menambahkan event listener pada tombol surprise
btnSurprise.addEventListener('click', showSurpriseGift);
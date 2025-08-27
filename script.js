const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const music = document.getElementById("bg-music");
const shareWA = document.getElementById("shareWA");

// Fungsi tampilkan slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startInvitation() {
  nextSlide();
  music.play();
}

// Countdown
const weddingDate = new Date("Dec 15, 2025 10:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// RSVP Form
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;

  alert(`Terima kasih ${nama}, konfirmasi kamu: ${status}`);

  // Update link WhatsApp
  const text = `Halo, saya ${nama}. Konfirmasi: ${status}. Yuk datang ke pernikahan Rivanda ❤️ SECRETLOVE, 15 Des 2025 di Hotel Aryaduta Manado!`;
  shareWA.href = `https://wa.me/?text=${encodeURIComponent(text)}`;

  // Reset form
  document.getElementById("rsvpForm").reset();

  // Kembali ke slide pertama
  currentSlide = 0;
  showSlide(currentSlide);
});


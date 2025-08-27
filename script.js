let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bg-music');

showSlide(currentSlide);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
    playMusic();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function playMusic() {
  if (music.paused) {
    music.play();
  }
}

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih sudah konfirmasi, ' + document.getElementById('nama').value + '!');
  currentSlide = 0; // kembali ke halaman utama
  showSlide(currentSlide);
});

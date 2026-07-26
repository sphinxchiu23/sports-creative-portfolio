document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-full]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.full;
    lightbox.showModal();
  });
});

closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.open) lightbox.close();
});
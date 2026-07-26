document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const contactEmail = 'oopsinfokh@gmail.com';
const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent('Sports Creative Project Inquiry')}&body=${encodeURIComponent("Hello, I'm interested in working with you on a sports creative project.")}`;
const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent('Sports Creative Project Inquiry')}`;

document.querySelectorAll('a[href*="mail.google.com"]').forEach((link) => {
  link.href = gmailComposeUrl;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const gmailWindow = window.open(gmailComposeUrl, '_blank');
    if (!gmailWindow) window.location.href = mailtoUrl;
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
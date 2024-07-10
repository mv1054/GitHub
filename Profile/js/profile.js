document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImage.src = item.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
        contactForm.reset();
    });
});

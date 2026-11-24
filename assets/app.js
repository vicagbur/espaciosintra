// Espacio Sintra — Interactive UI (Mobile Menu, Tarifas Tabs, Galería Lightbox)
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Tarifas tabs
  const tabs = document.querySelectorAll('.tarifa-tab');
  const panels = document.querySelectorAll('.tarifa-panel');
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle('active', t === tab));
        panels.forEach((p) => p.classList.toggle('active', p.id === target));
      });
    });
  }

  // Galeria lightbox
  const galleryImgs = Array.from(document.querySelectorAll('.galeria-item img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (galleryImgs.length && lightbox && lightboxImg) {
    let idx = 0;
    const show = (i) => {
      idx = (i + galleryImgs.length) % galleryImgs.length;
      lightboxImg.src = galleryImgs[idx].src;
      lightboxImg.alt = galleryImgs[idx].alt;
      lightbox.classList.add('open');
    };
    galleryImgs.forEach((img, i) => img.parentElement.addEventListener('click', () => show(i)));
    document.getElementById('lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));
    document.getElementById('lightbox-prev')?.addEventListener('click', () => show(idx - 1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => show(idx + 1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') lightbox.classList.remove('open');
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }
});

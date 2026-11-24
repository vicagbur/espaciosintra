// Espacio Sintra — Interactive UI (Mobile Menu, Weekly Pricing Calendar + WhatsApp Calculator, Galería Lightbox)
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

  // Weekly Google-Calendar-style Tarifas Selector + Live Budget & WhatsApp Builder
  const events = Array.from(document.querySelectorAll('.gcal-event'));
  const calcTitle = document.getElementById('calc-title');
  const calcSub = document.getElementById('calc-sub');
  const calcTotal = document.getElementById('calc-total');
  const calcWaBtn = document.getElementById('calc-wa-btn');
  const extraLimpieza = document.getElementById('extra-limpieza');
  const extraNevera = document.getElementById('extra-nevera');

  if (events.length && calcTitle && calcTotal && calcWaBtn) {
    let activeEv = document.querySelector('.gcal-event.selected') || events[0];

    const updateCalculator = () => {
      const day = activeEv.dataset.day;
      const slot = activeEv.dataset.slot;
      const hours = activeEv.dataset.hours;
      const basePrice = Number(activeEv.dataset.price || 0);
      const extraHour = activeEv.dataset.extra || '';

      let total = basePrice;
      const extrasText = [];
      if (extraLimpieza && extraLimpieza.checked) {
        total += 30;
        extrasText.push('Servicio de limpieza (+30€)');
      }
      if (extraNevera && extraNevera.checked) {
        total += 20;
        extrasText.push('Nevera llena 20 uds (+20€)');
      }

      calcTitle.textContent = `${day} · ${slot} (${hours})`;
      calcSub.textContent = `Tarifa base: ${basePrice} € · Hora extra: ${extraHour} · Reserva con 50 € + fianza 100 €`;
      calcTotal.innerHTML = `${total} €<small>${extrasText.length ? 'Incluye extras seleccionados' : 'Tarifa base sin extras'}</small>`;

      const msgParts = [
        `¡Hola Espacio Sintra! Me gustaría consultar disponibilidad para:`,
        `• Día / Turno: ${day} — ${slot} (${hours}) [${basePrice}€]`
      ];
      if (extrasText.length) {
        msgParts.push(`• Extras: ${extrasText.join(' + ')}`);
      }
      msgParts.push(`• Total estimado: ${total}€`);
      msgParts.push(`¿Qué fechas tenéis libres?`);

      calcWaBtn.href = `https://api.whatsapp.com/send?phone=34681015983&text=${encodeURIComponent(msgParts.join('\n'))}`;
    };

    events.forEach((ev) => {
      ev.addEventListener('click', () => {
        events.forEach((e) => e.classList.remove('selected'));
        ev.classList.add('selected');
        activeEv = ev;
        updateCalculator();
      });
    });

    extraLimpieza?.addEventListener('change', updateCalculator);
    extraNevera?.addEventListener('change', updateCalculator);
    updateCalculator();
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

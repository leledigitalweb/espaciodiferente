
/* ===========================================
  ✏️  ACTIVIDADES — EDITABLE DESDE AQUÍ
  Cada objeto del array tiene:
  - icon:  emoji representativo
  - title: nombre de la actividad
  - age:   rango etario (o vacío "")
  - desc:  descripción breve
  =========================================== */
const ACTIVIDADES = [
    {
        icon: "🎪",
        title: "Mini Circo",
        age: "De 4 a 6 años",
        desc: "Los más chiquitos dan sus primeros pasos en el mundo del circo con juegos, malabares y equilibrio adaptados a su edad."
    },
    {
        icon: "🤸",
        title: "Circo y Acrobacia",
        age: "De 7 a 13 años",
        desc: "Disciplinas circenses combinadas con acrobacia de piso y aérea. Técnica, expresión y mucha diversión en cada clase."
    },
    {
        icon: "💪",
        title: "Acrobacia",
        age: "Desde los 13 años",
        desc: "Entrenamiento progresivo de fuerza, flexibilidad y coordinación. Ideal para quienes quieren llevar su cuerpo al siguiente nivel."
    },
    {
        icon: "🎭",
        title: "Teatro Musical",
        age: "Niños, adolescentes y adultos · Desde 10 años",
        desc: "Expresión corporal, voz, danza y actuación integradas en un espacio creativo para todas las edades."
    },
    {
        icon: "🎨",
        title: "Arteterapia",
        age: "De 7 a 13 años",
        desc: "El arte como herramienta de bienestar emocional. Un espacio de exploración, autoconocimiento y disfrute creativo."
    }
];
/* =========================================== */

// Render actividades cards
const grid = document.getElementById('actividadesGrid');
ACTIVIDADES.forEach((act, i) => {
    const card = document.createElement('div');
    card.className = 'activity-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
    <span class="card-icon">${act.icon}</span>
    <div class="card-title">${act.title}</div>
    ${act.age ? `<div class="card-age">${act.age}</div>` : ''}
    <p class="card-desc">${act.desc}</p>
    `;
    grid.appendChild(card);
});

// Ticker band
const tickerItems = [
    'Circo', 'Acrobacia', 'Teatro Musical', 'Mini Circo',
    'Arteterapia', 'Cumpleaños', 'Eventos', 'Multiespacio',
    'Lanús Este', '13 años de magia'
];
const track = document.getElementById('tickerTrack');
// duplicate for seamless loop
[...tickerItems, ...tickerItems].forEach(item => {
    const el = document.createElement('span');
    el.className = 'ticker-item';
    el.textContent = item;
    track.appendChild(el);
});

// Confetti dots
// const hero = document.getElementById('hero');
// const colors = ['#D0021B', '#FF1A2E', '#FFD700', '#F5F0EB', '#ff6b6b'];
// for (let i = 0; i < 18; i++) {
//     const dot = document.createElement('div');
//     dot.className = 'confetti';
//     dot.style.cssText = `
//     left: ${Math.random() * 100}%;
//     background: ${colors[Math.floor(Math.random() * colors.length)]};
//     width: ${4 + Math.random() * 8}px;
//     height: ${4 + Math.random() * 8}px;
//     animation-duration: ${6 + Math.random() * 10}s;
//     animation-delay: ${Math.random() * 8}s;
//     `;
//     hero.appendChild(dot);
// }

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Scroll reveal (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

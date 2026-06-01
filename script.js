// ================================================
// SPLASH SCREEN
// ================================================
const splash   = document.getElementById('splash');
const mainSite = document.getElementById('mainSite');

mainSite.style.display = 'none';

splash.addEventListener('click', () => {
    splash.style.animation = 'splashSair 0.8s ease forwards';
    setTimeout(() => {
        splash.style.display     = 'none';
        mainSite.style.display   = 'block';
        mainSite.style.animation = 'fadeInSite 1s ease forwards';
    }, 800);
});

// ================================================
// CURSOR CUSTOMIZADO
// ================================================
const cursor    = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left    = e.clientX - 10 + 'px';
    cursor.style.top     = e.clientY - 10 + 'px';
    cursorDot.style.left = e.clientX - 3  + 'px';
    cursorDot.style.top  = e.clientY - 3  + 'px';
});

document.querySelectorAll('a, button, .habilidade-card, .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform  = 'scale(2.5)';
        cursor.style.background = 'rgba(0,238,255,0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform  = 'scale(1)';
        cursor.style.background = 'transparent';
    });
});

// ================================================
// NAVBAR ATIVA AO ROLAR
// ================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ================================================
// ANIMAÇÃO AO ROLAR (IntersectionObserver)
// ================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.habilidade-card, .portfolio-card, .contato-item').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(50px) scale(0.95)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ================================================
// EFEITO 3D NOS CARDS
// ================================================
document.querySelectorAll('.portfolio-card, .habilidade-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect    = card.getBoundingClientRect();
        const x       = e.clientX - rect.left;
        const y       = e.clientY - rect.top;
        const centerX = rect.width  / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ================================================
// MENU HAMBURGUER
// ================================================
const menuBtn     = document.getElementById('menuBtn');
const navbar      = document.getElementById('navbar');
const menuOverlay = document.getElementById('menuOverlay');

function fecharMenu() {
    menuBtn.classList.remove('ativo');
    navbar.classList.remove('aberta');
    menuOverlay.classList.remove('ativo');
}

menuBtn.addEventListener('click', () => {
    const aberto = navbar.classList.contains('aberta');
    if (aberto) {
        fecharMenu();
    } else {
        menuBtn.classList.add('ativo');
        navbar.classList.add('aberta');
        menuOverlay.classList.add('ativo');
    }
});

menuOverlay.addEventListener('click', fecharMenu);
navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', fecharMenu));

// ================================================
// TEXTO DIGITANDO — PT/EN
// ================================================
const textosPT  = ['Desenvolvedor Backend', 'Desenvolvedor Frontend', 'Full Stack Developer'];
const textosEN  = ['Backend Developer',     'Frontend Developer',     'Full Stack Developer'];

let idiomaAtual = 'pt';
let textoIndex  = 0;
let charIndex   = 0;
let deletando   = false;
let timerDigitar = null;
const elDigitar = document.querySelector('.texto-digitando');

function digitar() {
    if (!elDigitar) return;
    const lista      = idiomaAtual === 'pt' ? textosPT : textosEN;
    const textoAtual = lista[textoIndex];

    if (!deletando) {
        elDigitar.textContent = textoAtual.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === textoAtual.length) {
            deletando = true;
            timerDigitar = setTimeout(digitar, 2000);
            return;
        }
    } else {
        elDigitar.textContent = textoAtual.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deletando  = false;
            textoIndex = (textoIndex + 1) % lista.length;
        }
    }
    timerDigitar = setTimeout(digitar, deletando ? 60 : 100);
}

function reiniciarDigitacao() {
    clearTimeout(timerDigitar);
    textoIndex = 0;
    charIndex  = 0;
    deletando  = false;
    if (elDigitar) elDigitar.textContent = '';
    timerDigitar = setTimeout(digitar, 400);
}

setTimeout(digitar, 1500);

// ================================================
// SWITCHER PT / EN
// ================================================
function setLang(lang) {
    idiomaAtual = lang;

    document.getElementById('btnPT').classList.toggle('ativo', lang === 'pt');
    document.getElementById('btnEN').classList.toggle('ativo', lang === 'en');

    document.querySelectorAll('[data-pt][data-en]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
        if (el.querySelector('.texto-digitando')) return;
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    document.querySelectorAll('[data-placeholder-pt]').forEach(el => {
        el.placeholder = el.getAttribute('data-placeholder-' + lang);
    });

    reiniciarDigitacao();

    document.title = lang === 'pt'
        ? 'Raúl Adriano | Desenvolvedor'
        : 'Raúl Adriano | Developer';
}

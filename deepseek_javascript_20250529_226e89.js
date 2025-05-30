// Мобильное меню
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Закрываем меню при переходе по ссылке
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при прокрутке
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.place-card, .info-card, .gallery-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимаций
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.place-card, .info-card, .gallery-item');
    
    elements.forEach(element => {
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        element.style.opacity = 0;
        
        if (element.classList.contains('place-card')) {
            element.style.transform = 'translateY(30px)';
        } else if (element.classList.contains('info-card')) {
            element.style.transform = 'translateY(40px)';
        } else if (element.classList.contains('gallery-item')) {
            element.style.transform = 'scale(0.95)';
        }
    });
    
    // Запускаем проверку при загрузке
    animateOnScroll();
});

// Слушаем событие прокрутки
window.addEventListener('scroll', animateOnScroll);
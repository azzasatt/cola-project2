///ХЭДЕЕЕЕЕЕР САЙТА
class MobileMenu {
    constructor() {
        this.burger = document.getElementById('burger');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.overlay = document.getElementById('menuOverlay');
        this.links = document.querySelectorAll('.mobile-nav__link');
        
        this.isOpen = false;
        this.animationDuration = 400;
        
        this.init();
    }
    
    init() {
        // Открытие/закрытие меню
        this.burger.addEventListener('click', () => this.toggleMenu());
        
        // Закрытие по клику на оверлей
        this.overlay.addEventListener('click', () => this.closeMenu());
        
        // Закрытие по клику на ссылку
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeMenu();
                
                // Плавный скролл к секции
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.isOpen = true;
        
        // Анимация бургера
        this.burger.classList.add('active');
        
        // Показываем меню и оверлей
        this.mobileMenu.classList.add('active');
        this.overlay.classList.add('active');
        
        // Блокируем скролл страницы
        document.body.style.overflow = 'hidden';
        
        // Анимация появления ссылок
        this.animateLinksIn();
    }
    
    closeMenu() {
        this.isOpen = false;
        
        // Анимация бургера
        this.burger.classList.remove('active');
        
        // Анимация исчезновения ссылок
        this.animateLinksOut();
        
        // Скрываем меню и оверлей
        this.mobileMenu.classList.remove('active');
        this.overlay.classList.remove('active');
        
        // Разблокируем скролл страницы
        document.body.style.overflow = '';
    }
    
    animateLinksIn() {
        this.links.forEach((link, index) => {
            // Сбрасываем стили
            link.style.opacity = '0';
            link.style.transform = 'translateX(50px)';
            
            // Запускаем анимацию с задержкой
            setTimeout(() => {
                link.style.transition = `all 0.5s ease ${index * 0.1}s`;
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            }, 50);
        });
    }
    
    animateLinksOut() {
        this.links.forEach((link, index) => {
            link.style.transition = `all 0.3s ease ${index * 0.05}s`;
            link.style.opacity = '0';
            link.style.transform = 'translateX(50px)';
        });
    }
    
    scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    new MobileMenu();
});

// Плавный скролл для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



////анимация скрытия при скролле вниз и появления при скролле вверх
class ScrollHeader {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollY = window.scrollY;
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100 && currentScrollY > this.lastScrollY) {
            this.header.style.transform = 'translateY(-100%)';
        } else {
            this.header.style.transform = 'translateY(0)';
        }
        
        this.lastScrollY = currentScrollY;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new ScrollHeader();
});




///////////СЕКЦИЯ ГЛАВНАЯ
// Анимация бутылки
document.addEventListener('DOMContentLoaded', function() {
    const bottle = document.getElementById('animatedBottle');
    
    bottle.addEventListener('click', function() {
        this.style.transform = 'translateX(-50px) rotate(5deg) scale(1.15)';
        this.style.filter = 'drop-shadow(0 25px 50px rgba(230, 15, 45, 0.8))';
        
        setTimeout(() => {
            this.style.transform = 'translateX(-50px) rotate(5deg) scale(1.05)';
            this.style.filter = 'drop-shadow(0 20px 40px rgba(230, 15, 45, 0.6))';
        }, 150);
        
        setTimeout(() => {
            this.style.transform = 'translateX(-50px) rotate(5deg) scale(1)';
        }, 300);
    });
    
    if (window.innerWidth <= 768) {
        bottle.style.animation = 'none';
        bottle.style.transform = 'rotate(5deg) scale(1)';
        bottle.style.marginLeft = '0';
    }
});




/////ЧАСТЬ О КОМПАНИИИИИ
// Тексты для каждого раздела
const aboutTexts = {
    foundation: `В далеком 1886 году в Атланте, штат Джорджия, фармацевт Джон Стит Пембертон создал уникальный сироп. Изначально предназначенный как тонизирующее средство от головной боли, он быстро превратился в самый узнаваемый напиток в мире. Первые порции продавались всего за 5 центов за стакан.`,
    
    philosophy: `Наша философия проста — создавать моменты счастья и объединять людей. Каждая бутылка Coca-Cola — это не просто напиток, а символ радости, общения и вдохновения. Мы верим, что настоящая магия происходит, когда люди собираются вместе.`,
    
    products: `От классической Coca-Cola до инновационных безалкогольных напитков — наша продукция охватывает более 500 брендов. Мы постоянно innovируем, предлагая новые вкусы и форматы, оставаясь верными нашему легендарному оригинальному вкусу, который не меняется с 1886 года.`,
    
    achievements: `94% населения Земли узнают наш логотип. Мы присутствуем в более чем 200 странах, ежедневно потребляется свыше 1.9 миллиарда порций. Наши рекламные кампании становятся культурным феноменом, а формула напитка хранится в сейфе SunTrust Bank в Атланте.`
};

class WordsCarousel {
    constructor() {
        this.words = Array.from(document.querySelectorAll('.word'));
        this.typingText = document.getElementById('typingText');
        this.currentIndex = 1;
        this.init();
    }
    
    init() {
        this.updateText();
        this.words.forEach((word, index) => {
            word.addEventListener('click', () => {
                this.goToIndex(index);
            });
        });
    }
    
    updateCarousel() {
        this.words.forEach((word, index) => {
            word.className = 'word hidden';
        });
        
        const prevIndex = (this.currentIndex - 1 + this.words.length) % this.words.length;
        this.words[prevIndex].className = 'word prev';
        
        this.words[this.currentIndex].className = 'word active';
        
        const nextIndex = (this.currentIndex + 1) % this.words.length;
        this.words[nextIndex].className = 'word next';
    }
    
    updateText() {
        const activeWord = this.words[this.currentIndex];
        const textKey = activeWord.getAttribute('data-target');
        this.typeText(aboutTexts[textKey]);
    }
    
    goToIndex(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.updateText();
    }
    
    typeText(text) {
        this.typingText.innerHTML = '';
        let i = 0;
        const speed = 20;
        
        const typeWriter = () => {
            if (i < text.length) {
                this.typingText.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
                i++;
                setTimeout(typeWriter, speed);
            } else {
                this.typingText.innerHTML = text;
            }
        };
        
        typeWriter();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new WordsCarousel();
});


/////////////разделяю


/////СЕКЦИЯ КАРТОЧЕК АСССОРТИИИМЕНТА
/// Анимация появления карточек при скроллее
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  const triggerBottom = window.innerHeight / 1.2; // точка срабатывания

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show"); // добавляем класс появления
    }
  });
});




////////СЕКЦИЯ ИСТОРИИИ И КАРУСЕЛИ
class Carousel {
    constructor(container) {
        this.track = container.querySelector('.carousel-track');
        this.slides = Array.from(container.querySelectorAll('.carousel-slide'));
        this.prevBtn = container.querySelector('.prev-btn');
        this.nextBtn = container.querySelector('.next-btn');
        this.indicators = container.querySelectorAll('.indicator');
        
        // Модальные элементы
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalImage = document.getElementById('modalImage');
        this.modalCaption = document.getElementById('modalCaption');
        this.modalClose = document.getElementById('modalClose');
        
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });
        
        // Добавляем клик по картинкам для открытия модалки
        this.slides.forEach(slide => {
            const img = slide.querySelector('img');
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => this.openModal(img));
        });
        
        // Закрытие модалки
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Автопрокрутка
        this.startAutoPlay();
        
        // Пауза при наведении
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    openModal(imgElement) {
        const src = imgElement.getAttribute('src');
        const alt = imgElement.getAttribute('alt');
        
        this.modalImage.src = src;
        this.modalCaption.textContent = alt;
        
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
    
    closeModal() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % (this.slides.length - 1);
        
        this.animateTransition('next');
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = this.currentIndex === 0 ? this.slides.length - 2 : this.currentIndex - 1;
        
        this.animateTransition('prev');
    }
    
    goToSlide(index) {
        if (this.isAnimating || this.currentIndex === index) return;
        
        this.isAnimating = true;
        this.currentIndex = index;
        this.animateTransition('goTo');
    }
    
    animateTransition(direction) {
        this.track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        this.updateIndicators();
        
        setTimeout(() => {
            this.isAnimating = false;
            
            if (this.currentIndex === this.slides.length - 1) {
                this.track.style.transition = 'none';
                this.currentIndex = 0;
                this.track.style.transform = `translateX(0)`;
            }
        }, 800);
    }
    
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Инициализация карусели
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.history-carousel');
    new Carousel(carouselContainer);
});



////////////СЕКЦИЯ КОНТАКТОВ
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const socialLinks = document.querySelectorAll('.social-link');
    const addressCard = document.querySelector('.address-card');
    const additionalInfo = document.querySelector('.additional-info');
    
    // Анимация ссылок
    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.transition = 'all 0.6s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 500 + (index * 200));
    });
    
    // Анимация адресной карточки
    setTimeout(() => {
        addressCard.style.transition = 'all 0.6s ease';
        addressCard.style.opacity = '1';
        addressCard.style.transform = 'translateX(0)';
    }, 1300);
    
    // Анимация дополнительной инфы
    setTimeout(() => {
        additionalInfo.style.transition = 'all 0.6s ease';
        additionalInfo.style.opacity = '1';
        additionalInfo.style.transform = 'translateY(0)';
    }, 1600);
    
    // Модальное окно карты
    const mapTrigger = document.getElementById('mapTrigger');
    const mapModal = document.getElementById('mapModal');
    const closeMap = document.getElementById('closeMap');
    
    if (mapTrigger && mapModal) {
        mapTrigger.addEventListener('click', function() {
            mapModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMap.addEventListener('click', function() {
            mapModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        mapModal.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                mapModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mapModal.classList.contains('active')) {
                mapModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Дополнительные ховер-эффекты
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const socialType = this.getAttribute('data-social');
            this.style.borderLeftColor = getSocialColor(socialType);
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Анимация клика
            this.style.transform = 'translateX(10px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateX(10px) scale(1)';
            }, 150);
        });
    });
    
    function getSocialColor(type) {
        const colors = {
            'vk': '#0077FF',
            'telegram': '#0088CC',
            'email': '#e60f2d',
            'phone': '#e60f2d'
        };
        return colors[type] || '#e60f2d';
    }
});




/////попытка в плавный скролл
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.headerHeight = this.getHeaderHeight();
        this.scrollDuration = 1000;
        this.easing = this.easeInOutCubic;
        
        this.init();
    }
    
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleLinkClick(e));
        });
        
        window.addEventListener('resize', () => {
            this.headerHeight = this.getHeaderHeight();
        });
    }
    
    handleLinkClick(e) {
        e.preventDefault();
        
        const link = e.currentTarget;
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            this.scrollToElement(targetElement);
            history.pushState(null, null, targetId);
        }
    }
    
    scrollToElement(element) {
        const targetPosition = this.getElementPosition(element);
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / this.scrollDuration, 1);
            const easeProgress = this.easing(progress);
            
            window.scrollTo(0, startPosition + (distance * easeProgress));
            
            if (timeElapsed < this.scrollDuration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    }
    
    getElementPosition(element) {
        const elementRect = element.getBoundingClientRect();
        const elementPosition = elementRect.top + window.pageYOffset;
        return elementPosition - this.headerHeight - 20;
    }
    
    getHeaderHeight() {
        const header = document.querySelector('header');
        return header ? header.offsetHeight : 0;
    }
    
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    new SmoothScroll();
});


/////пузыри
class SlowSmoothBubbles {
    constructor() {
        this.container = document.getElementById('bubblesContainer');
        this.isActive = true;
        
        // ⚡ НАСТРОЙКИ МЕДЛЕННЫХ ПУЗЫРЬКОВ ⚡
        this.settings = {
            minSize: 25,           // Минимальный размер
            maxSize: 70,           // Максимальный размер
            minDuration: 8,        // МИН время анимации (сек) - МЕДЛЕННО
            maxDuration: 15,       // МАКС время анимации (сек) - ОЧЕНЬ МЕДЛЕННО
            minDelay: 0,           // Минимальная задержка
            maxDelay: 3,           // Максимальная задержка
            autoBubbleDelay: 4000, // Задержка между автопузырями (мс)
            driftAmount: 80        // Случайное смещение по X
        };
        
        this.init();
    }
    
    init() {
        // Автозапуск медленных пузырьков
        this.startAutoBubbles();
        
        // Пузырьки при скролле (редко)
        window.addEventListener('scroll', () => {
            if (Math.random() > 0.9) { // Только 10% chance
                this.createBubbleGroup(1);
            }
        });
        
        // Пузырьки при клике
        document.addEventListener('click', (e) => {
            this.createClickBubbles(e);
        });
    }
    
    // Создание одного пузырька
    createBubble(x = null, y = null, options = {}) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Случайные параметры с МЕДЛЕННЫМИ настройками
        const size = options.size || 
            Math.random() * (this.settings.maxSize - this.settings.minSize) + this.settings.minSize;
        
        const duration = options.duration || 
            Math.random() * (this.settings.maxDuration - this.settings.minDuration) + this.settings.minDuration;
        
        const delay = options.delay || 
            Math.random() * (this.settings.maxDelay - this.settings.minDelay) + this.settings.minDelay;
        
        // Позиция
        const startX = x || Math.random() * window.innerWidth;
        const startY = y || window.innerHeight + 50;
        
        // Применяем стили
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${startX}px`;
        bubble.style.bottom = `${startY}px`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        
        // Случайное смещение по X во время всплытия
        const drift = (Math.random() - 0.5) * this.settings.driftAmount;
        bubble.style.setProperty('--drift', `${drift}px`);
        
        // Добавляем в контейнер
        this.container.appendChild(bubble);
        
        // Удаляем после анимации + небольшая задержка
        setTimeout(() => {
            if (bubble.parentNode) {
                // Плавное исчезновение
                bubble.style.animation = 'bubble-fade 1s forwards';
                setTimeout(() => {
                    if (bubble.parentNode) {
                        bubble.parentNode.removeChild(bubble);
                    }
                }, 1000);
            }
        }, (duration + delay) * 1000);
        
        return bubble;
    }
    
    // Создание группы пузырьков
    createBubbleGroup(count = 3, x = null, y = null) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createBubble(x, y, {
                    size: Math.random() * 30 + 20,
                    duration: Math.random() * 5 + 10, // 10-15 секунд
                    delay: Math.random() * 2
                });
            }, i * 800); // Большая задержка между пузырьками в группе
        }
    }
    
    // Автозапуск медленных пузырьков
    startAutoBubbles() {
        const createRandomBubbles = () => {
            if (!this.isActive) return;
            
            // Случайное количество пузырьков (1-2)
            const count = Math.floor(Math.random() * 2) + 1;
            this.createBubbleGroup(count);
            
            // Случайный интервал (3-7 секунд)
            const nextDelay = Math.random() * 4000 + 3000;
            setTimeout(createRandomBubbles, nextDelay);
        };
        
        createRandomBubbles();
    }
    
    // Пузырьки при клике
    createClickBubbles(event) {
        this.createBubbleGroup(
            5, 
            event.clientX, 
            event.clientY
        );
    }
    
    // Остановка пузырьков
    stopBubbles() {
        this.isActive = false;
    }
    
    // Запуск пузырьков
    startBubbles() {
        this.isActive = true;
        this.startAutoBubbles();
    }
    
    // Настройка параметров
    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
    }
    
    // Специальные медленные пузырьки
    createUltraSlowBubble(x = null) {
        return this.createBubble(x, null, {
            size: 60,
            duration: 20, // ОЧЕНЬ МЕДЛЕННО - 20 секунд!
            delay: 1
        });
    }
    
    // Создание "волны" пузырьков
    createBubbleWave(count = 8) {
        const startX = Math.random() * window.innerWidth;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createBubble(
                    startX + (Math.random() - 0.5) * 200,
                    null,
                    {
                        duration: 12 + Math.random() * 6,
                        delay: i * 0.5
                    }
                );
            }, i * 300);
        }
    }
}

// Расширенная версия с супер-медленными пузырями
class UltraSlowBubbles extends SlowSmoothBubbles {
    constructor() {
        super();
        
        // ⚡ СУПЕР МЕДЛЕННЫЕ НАСТРОЙКИ ⚡
        this.settings = {
            minSize: 30,
            maxSize: 80,
            minDuration: 15,       // ОЧЕНЬ МЕДЛЕННО
            maxDuration: 25,       // СУПЕР МЕДЛЕННО
            minDelay: 1,
            maxDelay: 5,
            autoBubbleDelay: 6000, // Реже появляются
            driftAmount: 60        // Меньше дрейфа для плавности
        };
    }
    
    createFloatingBubble() {
        return this.createBubble(null, null, {
            size: Math.random() * 40 + 40,
            duration: 18 + Math.random() * 12, // 18-30 секунд!
            delay: Math.random() * 4
        });
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    const bubbles = new UltraSlowBubbles();
    
    // Делаем глобально доступным
    window.bubbles = bubbles;
    
    console.log('🐌 Медленные пузырьки запущены!');
});

// Дополнительные стили для плавности
const smoothBubbleStyles = `
.bubble {
    transition: opacity 0.5s ease;
}

/* Улучшенная плавность анимации */
@keyframes bubble-rise {
    0% {
        transform: translateY(0) translateX(0) scale(0.4);
        opacity: 0.3;
    }
    20% {
        opacity: 0.8;
        transform: translateY(-20vh) translateX(calc(var(--drift, 0) * 0.2)) scale(0.7);
    }
    50% {
        opacity: 0.9;
        transform: translateY(-50vh) translateX(calc(var(--drift, 0) * 0.5)) scale(0.9);
    }
    80% {
        opacity: 0.7;
        transform: translateY(-80vh) translateX(calc(var(--drift, 0) * 0.8)) scale(1.0);
    }
    100% {
        transform: translateY(-120vh) translateX(var(--drift, 0)) scale(1.1);
        opacity: 0;
    }
}
`;

// Добавляем стили
const style = document.createElement('style');
style.textContent = smoothBubbleStyles;
document.head.appendChild(style);



/////СЧЕТОВОД
class CounterAnimation {
    constructor() {
        this.counterNumber = document.getElementById('counterNumber');
        this.counterBtn = document.getElementById('counterBtn');
        this.currentCount = 66;
        
        this.init();
    }
    
    init() {
        this.counterBtn.addEventListener('click', () => this.incrementCounter());
        
        // Авто-инкремент каждые 10 секунд (опционально)
        this.startAutoIncrement();
    }
    
    incrementCounter() {
        // Анимация кнопки
        this.counterBtn.classList.add('button-pulse');
        setTimeout(() => {
            this.counterBtn.classList.remove('button-pulse');
        }, 400);
        
        // Увеличиваем счетчик
        this.currentCount++;
        this.updateCounter();
        
        // Создаем эффект "частиц"
        this.createParticles();
    }
    
    updateCounter() {
        // Анимация числа
        this.counterNumber.classList.remove('number-increment');
        void this.counterNumber.offsetWidth; // Перезапуск анимации
        this.counterNumber.classList.add('number-increment');
        
        // Обновляем текст с эффектом
        this.animateNumberChange();
    }
    
    animateNumberChange() {
        const numberElement = this.counterNumber;
        const targetNumber = this.currentCount;
        
        // Плавное изменение числа
        numberElement.style.opacity = '0.7';
        numberElement.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            numberElement.textContent = targetNumber;
            numberElement.style.opacity = '1';
            numberElement.style.transform = 'translateY(0)';
        }, 150);
    }
    
    createParticles() {
        const btnRect = this.counterBtn.getBoundingClientRect();
        const particles = 8;
        
        for (let i = 0; i < particles; i++) {
            setTimeout(() => {
                this.createParticle(
                    btnRect.left + btnRect.width / 2,
                    btnRect.top + btnRect.height / 2
                );
            }, i * 50);
        }
    }
    
    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #e60f2d;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            opacity: 0;
        `;
        
        document.body.appendChild(particle);
        
        // Анимация частицы
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 40;
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${targetX}px, ${targetY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Удаляем частицу после анимации
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 600);
    }
    
    startAutoIncrement() {
        // Автоматическое увеличение каждые 10 секунд
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance
                this.currentCount++;
                this.updateCounter();
            }
        }, 10000);
    }
    
    // Метод для сброса счетчика
    resetCounter() {
        this.currentCount = 66;
        this.updateCounter();
    }
    
    // Метод для установки конкретного значения
    setCounter(value) {
        this.currentCount = value;
        this.updateCounter();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    const counter = new CounterAnimation();
    
    // Делаем глобально доступным
    window.counter = counter;
});
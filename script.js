let readMore = document.querySelector('.read-more');
let elementsAll = document.querySelector('.brands');

readMore.addEventListener('click', function(evt) {
    evt.preventDefault;
    elementsAll.classList.toggle('hidden');
    if (elementsAll.classList.contains('hidden')) {
        readMore.querySelector('p').textContent = 'Скрыть';
        readMore.querySelector('img').src = 'icons/read_hide.svg';
    } else {
        readMore.querySelector('p').textContent = 'Показать все';
        readMore.querySelector('img').src = 'icons/read_more.svg'
    }
});

// Только для мобилок

let swiper;

if (window.matchMedia('(max-width: 767.9px)').matches) {
    swiper = new Swiper('.swiper-container', {
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}


window.addEventListener('resize', function () {
    if (window.matchMedia('(max-width: 767.9px)').matches) {
        swiper = new Swiper('.swiper-container', {
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        swiper.enable();
    } else {
        swiper.disable();
        swiper.destroy();
    }
});

let readMore = document.querySelector('.read-more');
let readHide = document.querySelector('.read-hide');
let elementsHidden = document.querySelectorAll('.brand--hide');
let elementsMedium = document.querySelectorAll('.brand--medium');


let changeHidden = function() {
    for (let i = 0; i < elementsHidden.length; i++) {
        elementsHidden[i].classList.remove('hidden');
    }

    if (window.matchMedia('(min-width: 767.9px) and (max-width: 1119.9px)').matches) {
        for (let i = 0; i < elementsMedium.length; i++) {
            elementsMedium[i].classList.remove('brand--medium');
        }
    }
};

readMore.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeHidden();
    readHide.classList.remove('hidden');
    readMore.classList.add('hidden');
});

readHide.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let i = 0; i < elementsHidden.length; i++) {
        elementsHidden[i].classList.add('hidden');
    }
    if (window.matchMedia('(min-width: 767.9px) and (max-width: 1119.9px)').matches) {
        for (let i = 0; i < elementsMedium.length; i++) {
            elementsMedium[i].classList.add('brand--medium');
        }
    }
    readHide.classList.add('hidden');
    readMore.classList.remove('hidden');
});

// Только для мобилок


if (window.matchMedia('(max-width: 767.9px)').matches) {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
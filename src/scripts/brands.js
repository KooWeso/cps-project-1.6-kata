const 
    brandsWrapper = document.querySelector('.brands__wrapper'),
    brandsBtn = document.querySelector('.brands__btn-expand'),
    brandsBtnInnerText = document.querySelector('.brands__btn-expand').children[0],
    brandsBtnInnerImg = document.querySelector('.brands__btn-expand').children[1];

brandsBtn.addEventListener('click', ()=>{
    brandsWrapper.classList.toggle('collapse--closed')
    brandsWrapper.classList.toggle('collapse--open')

    if (brandsWrapper.classList.contains('collapse--open')) {
        brandsBtnInnerText.textContent = 'Скрыть';
        brandsBtnInnerImg.style.transform = 'rotate(-180deg)';
        brandsBtn.style.filter = 'hue-rotate(170deg)';
    } else {
        brandsBtnInnerText.textContent = 'Показать ещё';
        brandsBtn.style.filter = 'unset';
        brandsBtnInnerImg.style.transform = 'unset';
    };


})
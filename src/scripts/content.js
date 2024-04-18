const 
    mainContentText = document.querySelector('.main-content__text'),
    mainContentBtnText = document.querySelector('.main-content__button'),
    mainContentBtnTextInnerText = document.querySelector('.main-content__button-text'),
    mainContentBtnTextInnerImg = document.querySelector('.main-content__button').children[0];

mainContentBtnText.addEventListener('click', ()=>{
    mainContentText.classList.toggle('hide--closed')
    mainContentText.classList.toggle('hide--open')

    if (mainContentText.classList.contains('hide--open')) {
        mainContentBtnTextInnerText.textContent = 'Скрыть';
        mainContentBtnTextInnerImg.style.transform = 'rotate(-180deg)';
        mainContentBtnText.style.filter = 'hue-rotate(170deg)';
    } else {
        mainContentBtnTextInnerText.textContent = 'Читать ещё';
        mainContentBtnText.style.filter = 'unset';
        mainContentBtnTextInnerImg.style.transform = 'unset';
    };


})
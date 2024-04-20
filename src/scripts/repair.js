const 
    repairWrapper = document.querySelector('.repair__wrapper'),
    repairBtn = document.querySelector('.repair__btn-expand'),
    repairBtnInnerText = document.querySelector('.repair__btn-expand').children[0],
    repairBtnInnerImg = document.querySelector('.repair__btn-expand').children[1];

repairBtn.addEventListener('click', ()=>{
    repairWrapper.classList.toggle('collapse--closed')
    repairWrapper.classList.toggle('collapse--open')

    if (repairWrapper.classList.contains('collapse--open')) {
        repairBtnInnerText.textContent = 'Скрыть';
        repairBtnInnerImg.style.transform = 'rotate(-180deg)';
        repairBtn.style.filter = 'hue-rotate(170deg)';
    } else {
        repairBtnInnerText.textContent = 'Показать ещё';
        repairBtn.style.filter = 'unset';
        repairBtnInnerImg.style.transform = 'unset';
    };


})
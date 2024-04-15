const btnClose = document.querySelector('.modal__btn-close');
const btnShow = document.querySelector('.show--call');
const modalCall = document.querySelector('.call');
btnClose.addEventListener('click', () => {
    modalCall.style.transform = 'translateX(100%)';
    setTimeout(() => {
        modalCall.close()
    }, 300);
})
btnShow.addEventListener('click', () => {
    modalCall.showModal()
    modalCall.style.transform = 'translateX(0%)';
})
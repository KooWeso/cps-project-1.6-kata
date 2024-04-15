const btnClose = document.querySelector('.modal__btn-close');
const btnShow = document.querySelector('.show--call');
const modalFeedback = document.querySelector('.feedback');
btnClose.addEventListener('click', () => {
    modalFeedback.style.transform = 'translateX(100%)';
    setTimeout(() => {
        modalFeedback.close()
    }, 300);
})
btnShow.addEventListener('click', () => {
    modalFeedback.showModal()
    modalFeedback.style.transform = 'translateX(0%)';
})
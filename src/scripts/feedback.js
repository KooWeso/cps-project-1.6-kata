const btnClose = document.querySelector('.feedback__btn-close');
const btnShow = document.querySelectorAll('.btn__medium--chat');
const modalfeedback = document.querySelector('.feedback');

btnShow.forEach(btn => {
    btn.addEventListener('click', () => {
        modalfeedback.showModal()
        modalfeedback.style.transform = 'translateX(0%)';

    })
})

modalfeedback.addEventListener('click', e => {
    const dialogDimensions = modalfeedback.getBoundingClientRect()
    if (e.target === btnClose ||
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {

        modalfeedback.style.transform = 'translateX(100%)';
        setTimeout(() => {
            modalfeedback.close()
        }, 400);
    }
})
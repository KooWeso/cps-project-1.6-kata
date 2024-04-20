const btnClose = document.querySelector('.call__btn-close');
const btnShow = document.querySelectorAll('.btn__medium--call');
const modalCall = document.querySelector('.call');

btnShow.forEach(btn => {
    btn.addEventListener('click', () => {
        modalCall.showModal()
        modalCall.style.transform = 'translateX(0%)';
    })
})

modalCall.addEventListener('click', e => {
        const dialogDimensions = modalCall.getBoundingClientRect()
        if (e.target === btnClose ||
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {

            modalCall.style.transform = 'translateX(100%)';
            setTimeout(() => {
                modalCall.close()
            }, 400);
        }

    })
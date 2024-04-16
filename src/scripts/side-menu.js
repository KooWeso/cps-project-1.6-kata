/* 
side-menu
overlay
blur
*/

const
    sideMenu = document.querySelector('.side-menu'),
    overlay = document.querySelector('.side-menu__overlay'),
    blur = document.querySelector('.side-menu__blur'),
    btnBurger = document.querySelector('.side-menu__btn-burger'),
    btnClose = document.querySelector('.side-menu__btn-close'),
    styleHidden = 'side-menu--hidden';

btnBurger.addEventListener('click', () => {
    sideMenu.classList.remove(styleHidden);
    blur.style.display = 'block'; // f*ck personal class 
    overlay.style.display = 'block';
    setTimeout(() => {
        sideMenu.style.transform = 'translateX(0%)';
        blur.style.transform = 'translateX(0%)';
        overlay.style.opacity = '0.75'; // value could be a variable
    }, 10); // without this transition will not work

});

btnClose.addEventListener('click', () => {
    sideMenu.style.transform = 'translateX(-100%)';
    blur.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '0';
    setTimeout(() => {
        sideMenu.classList.add(styleHidden);
        overlay.style.display = 'none';
        blur.style.display = 'none';
    }, 500); // 0.5s
})
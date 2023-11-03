const header = document.querySelector('.header');
const main = document.querySelector('.main');

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    if (scrollDistance >= 1) {
        header.classList.add('header__fixed');
        main.style.marginTop = `64px`;
    } else {
        header.classList.remove('header__fixed');
        main.style.marginTop = null;
    }
});
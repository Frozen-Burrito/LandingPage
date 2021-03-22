const menuBtn = document.querySelector('#mobile-menu-btn');
const menuBars = menuBtn.querySelector('span');

const nav = document.querySelector('#main-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    if (!showMenu) {
        nav.classList.add('open');
        menuBtn.classList.add('open');
        menuBars.classList.add('open');
    } else {
        nav.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBars.classList.remove('open');
    }

    showMenu = !showMenu;
}
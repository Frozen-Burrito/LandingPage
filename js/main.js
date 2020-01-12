const menuBtn = document.querySelector('.menu-btn');
const menuBars = document.querySelector('.menu-btn_burger');

const nav = document.querySelector('.nav');

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
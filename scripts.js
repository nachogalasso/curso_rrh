// Traemos los elementos del DOM con los uque vamos a trabajar
const navBtn = document.querySelector('.nav_icon');
const navList = document.querySelector('.nav__listlinks');
let darkMode = localStorage.getItem('darkmode');
const darkModeBtn = document.querySelector('.dark_icon');
const topBtn = document.querySelector('.main__btn_gtt');

// Funciones
navBtn.addEventListener('click', () => {
    navList.classList.toggle('show_nav');
});

const activateDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const deactivateDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkMode === 'active') {
    activateDarkMode();
}

darkModeBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode');
    darkMode !== 'active' ? activateDarkMode() : deactivateDarkMode();
});

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
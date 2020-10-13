import { bind } from 'file-loader';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
});

function bindEvents() {
    const menuBtn = document.getElementById('menu-btn');
    const menuList = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            menuList.classList.toggle('open');
        });
    });
}



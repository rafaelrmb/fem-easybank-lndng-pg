const menuButton = document.querySelector('.mobile-menu');
const mainNavigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', false);
    } else {
        menuButton.setAttribute('aria-expanded', true);
    }
    mainNavigation.classList.toggle('menu-expanded');
}
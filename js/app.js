document.addEventListener('DOMContentLoaded', function() {
    const navMenuIcon = document.getElementById('navMenuIcon');
    const navLinks = document.getElementById('navLinks');
    const nav = document.querySelector('nav');

    navMenuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        nav.classList.toggle('show');
        navMenuIcon.classList.toggle('open');
    });
});
function menuIcon() {
    const navMenuIcon = document.getElementById('navMenuIcon');
    const navLinks = document.getElementById('navLinks');
    const nav = document.querySelector('nav');

    navMenuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        nav.classList.toggle('show');
        navMenuIcon.classList.toggle('open');
    });
}

function logoRoll() {
    const logo = document.getElementById('logo');

    logo.style.transform = "rotate(" + window.scrollY + "deg)";
}

function headAnimation() {
    const carousel = document.querySelector('.carousel');
    const head_text = document.getElementById('head_text');
    const scroll_text = document.getElementById('scroll_text');

    if (window.scrollY <= 200) {
        carousel.style.transform = "translateY(" + window.scrollY*(6/3) + "px)";
        head_text.style.transform = "translateY(" + -window.scrollY*2 + "px)";
        scroll_text.style.opacity = window.scrollY/200;
    }
}

document.addEventListener('DOMContentLoaded', menuIcon);

window.onscroll = function() {
    
    logoRoll();

    headAnimation();
};
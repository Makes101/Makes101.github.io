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
    const carousel_img = document.querySelector('.carousel_img');
    const carousel_img_img = document.querySelectorAll('.carousel_img img');
    const head_text = document.getElementById('head_text');
    const scroll_text = document.getElementById('scroll_text');

    if (window.scrollY <= 200) {

        if (window.innerWidth <= 768) {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (window.scrollY / 200 * 50) + "%";
            });
        } else {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (window.scrollY / 200 * 50 * 7/4) + "%";
            });
            carousel.style.margin = '0 '+ window.scrollY / 200 * 15 + '%';
        }

        carousel_img.style.opacity = 0.5 + (window.scrollY/200 * 0.5);
        carousel.style.transform = "translateY(" + window.scrollY*2.25 + "px)";

        head_text.style.opacity = 1 - (window.scrollY/200);
        head_text.style.transform = "translateY(" + -window.scrollY*2 + "px)";

        scroll_text.style.opacity = window.scrollY/200;
    }
}

document.addEventListener('DOMContentLoaded', menuIcon);

window.onscroll = function() {
    
    logoRoll();

    headAnimation();
};
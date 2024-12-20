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
    const scrollDist = 200;

    const carousel = document.querySelector('.carousel');
    const carousel_img = document.querySelector('.carousel_img');
    const carousel_img_img = document.querySelectorAll('.carousel_img img');
    const head_text = document.getElementById('head_text');
    const scroll_box = document.getElementById('scroll_box');

    if (window.scrollY <= scrollDist) {

        if (window.innerWidth <= 768) {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (window.scrollY / scrollDist * 50) + "%";
            });
        } else {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (window.scrollY / scrollDist * 50 * 7/4) + "%";
            });
            carousel.style.margin = '0 '+ window.scrollY / scrollDist * 15 + '%';
        }

        carousel_img.style.opacity = 0.5 + (window.scrollY/scrollDist * 0.5);
        carousel.style.transform = "translateY(" + window.scrollY*2.25 + "px)";

        carousel.style.background = "radial-gradient(rgb(151 149 247 / " + (25 + window.scrollY/scrollDist * 75) + "%), rgb(151 149 247 / " + (window.scrollY/scrollDist * 25) + "%)) border-box";
        carousel.style.boxShadow = "rgba(151, 149, 247, " + window.scrollY/scrollDist * 0.5 + ") 0px 0px 50px";

        head_text.style.opacity = 1 - (window.scrollY/scrollDist);
        head_text.style.transform = "translateY(" + -window.scrollY*2 + "px)";

        scroll_box.style.opacity = window.scrollY/scrollDist;
    }

    if (window.scrollY >= scrollDist - 25) {
        scroll_box.classList.add('show');
    } else {
        scroll_box.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', menuIcon);

window.onscroll = function() {
    
    logoRoll();

    headAnimation();
};
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

function scrollDown() {
    const scrollDist = 200;

    if (window.scrollY <= scrollDist) {
        headAnimation(window.scrollY, scrollDist);
    } else {
        headAnimation(scrollDist, scrollDist);
    }
}

function headAnimation(scroll, scrollDist) {

    const carousel = document.querySelector('.carousel');
    const carousel_img = document.querySelector('.carousel_img');
    const carousel_img_img = document.querySelectorAll('.carousel_img img');
    const head_text = document.getElementById('head_text');
    const scroll_box = document.getElementById('scroll_box');

    const carousel_ctrl = document.querySelector('.carousel_ctrl');

    if (scroll <= scrollDist) {

        if (window.innerWidth <= 768) {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (scroll / scrollDist * 50) + "%";
            });
        } else {
            carousel_img_img.forEach(img => {
                img.style.width = 100 + (scroll / scrollDist * 50 * 7/4) + "%";
            });
            carousel.style.margin = '0 '+ scroll / scrollDist * 15 + '%';
        }

        carousel_img.style.opacity = 0.5 + (scroll/scrollDist * 0.5);
        carousel.style.transform = "translateY(" + scroll*2.35 + "px)";

        carousel.style.background = "radial-gradient(rgb(151 149 247 / " + (25 + scroll/scrollDist * 75) + "%), rgb(151 149 247 / " + (scroll/scrollDist * 25) + "%)) border-box";
        carousel.style.boxShadow = "rgba(151, 149, 247, " + scroll/scrollDist * 0.5 + ") 0px 0px 50px";

        head_text.style.opacity = 1 - (scroll/scrollDist);
        head_text.style.transform = "translateY(" + -scroll*2 + "px)";

        scroll_box.style.opacity = scroll/scrollDist;

        carousel_ctrl.style.opacity = (scroll/scrollDist);
    }

    if (scroll >= scrollDist - 25) {
        scroll_box.classList.add('show');
    } else {
        scroll_box.classList.remove('show');
    }
}

window.onscroll = function() {
    logoRoll();

    scrollDown();
};

function setupPageClickHandlers() {
    const pages = document.querySelectorAll('.page');
    const imgs = document.querySelectorAll('.carousel_img img');
    const txt = document.querySelectorAll('.carousel_txt');

    pages_imgs = [pages, imgs, txt];

    //console.log(pages_imgs);

    for (let i = 0; i < pages_imgs[0].length; i++) {
        
        pages_imgs[0][i].addEventListener('click', function() {
            // Remove the 'show' class from all elements with the 'page' class
            pages_imgs[0].forEach(p => p.classList.remove('show'));
            // Add the 'show' class to the clicked element
            pages_imgs[0][i].classList.add('show');

            pages_imgs[1].forEach(img => img.classList.remove('show'));

            pages_imgs[1][i].classList.add('show');

            pages_imgs[2].forEach(txt => txt.classList.remove('show'));
            pages_imgs[2][i].classList.add('show');
        });

    }

    /*pages.forEach(page => {
        page.addEventListener('click', function() {
            // Remove the 'show' class from all elements with the 'page' class
            pages.forEach(p => p.classList.remove('show'));
            // Add the 'show' class to the clicked element
            page.classList.add('show');

            
        });
    });*/
}

document.addEventListener('DOMContentLoaded', function() {
    menuIcon();

    setupPageClickHandlers();
});
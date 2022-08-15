"use strict";

// transparent navbar + home / display arrowBtn

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const arrowBtn = document.querySelector(".arrowBtn");

document.addEventListener("scroll", () => {
    if(window.scrollY > homeHeight / 3) {
        navbar.classList.add("navbar__colored");
        home.classList.add("home__transparent");
        arrowBtn.classList.add("arrowBtn__display");
    }
    else {
        navbar.classList.remove("navbar__colored");
        home.classList.remove("home__transparent");
        arrowBtn.classList.remove("arrowBtn__display");
    }
})

// move to section

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
    scrollTo(event);
})

// contact me btn

const homeBtn = document.querySelector(".home__button");

homeBtn.addEventListener("click", (event) => {
    scrollTo(event);
})

function scrollTo(event) {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// move to top when clicking arrow button

arrowBtn.addEventListener("click", (event) => {
    scrollTo(event);
})
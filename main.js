"use strict";

// transparent navbar

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if(window.scrollY > homeHeight / 3) {
        navbar.classList.add("navbar__colored");
    }
    else {
        navbar.classList.remove("navbar__colored");
    }
})

// move to section

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})
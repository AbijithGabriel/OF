'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

// Contact form

// const dialogBtn = document.querySelector(".contact-dialog");
// const modal = document.querySelector("dialog");
// const closeBtn = document.querySelector(".close-btn");
// dialogBtn.addEventListener("click", function () {
//   modal.showModal();
// });

// closeBtn.addEventListener("click", function () {
//   modal.close();
// });
// ;


// easycode
// Modal functionality
// const contactBtn = document.querySelector(".btn-primary");
// const modal = document.getElementById("contactModal");
// const closeBtn = document.getElementById("closeModal");

// contactBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   modal.style.display = "block";
// });

// closeBtn.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


//new event


// document.addEventListener("DOMContentLoaded", function() {
//   const navToggler = document.querySelector("[data-nav-toggler]");
//   const navbar = document.querySelector("[data-navbar]");
//   const overlay = document.querySelector("[data-overlay]");

//   navToggler.addEventListener("click", function() {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });

//   overlay.addEventListener("click", function() {
//     navbar.classList.remove("active");
//     overlay.classList.remove("active");
//   });
// });
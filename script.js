/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   FAVOURITE HEART BUTTONS
========================= */

const heartButtons = document.querySelectorAll(".heart-button");

heartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        formMessage.textContent = "Please fill in your name and email.";

        return;
    }

    formMessage.textContent =
        `Thanks ${name}! Your travel request has been received.`;

    contactForm.reset();

});


/* =========================
   NEWSLETTER
========================= */

const newsletter = document.querySelector(".newsletter");

newsletter.addEventListener("submit", function(event) {

    event.preventDefault();

    const input = newsletter.querySelector("input");

    if (input.value.trim() !== "") {

        alert("Thank you for subscribing to Wanderly!");

        input.value = "";

    }

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.position = "fixed";
        header.style.background = "rgba(24, 37, 31, 0.95)";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.position = "absolute";
        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});
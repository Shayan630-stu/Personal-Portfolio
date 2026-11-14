// Welcome Message

console.log("Welcome to Shayan's Portfolio!");


// Navigation Active Effect

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Project Card Animation

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", function() {
        this.style.cursor = "pointer";
    });

});


// Welcome Alert

window.addEventListener("load", function() {

    console.log("Portfolio Website Successfully Loaded!");

});
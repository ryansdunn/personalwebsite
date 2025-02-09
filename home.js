// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".music-card");

//     cards.forEach((card) => {
//         card.addEventListener("click", function () {
//             // Find the description box right after the clicked card
//             const description = this.nextElementSibling;

//             // Hide all other descriptions first
//             document.querySelectorAll(".description-box").forEach((box) => {
//                 if (box !== description) {
//                     box.classList.remove("visible");
//                 }
//             });

//             // Toggle visibility of the clicked card's description
//             description.classList.toggle("visible");
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("._menuToggle_1jf6d_23");
    const navLinks = document.querySelector("._navLinks_1jf6d_32");

    menuToggle.addEventListener("click", function (event) {
        navLinks.classList.toggle("_open_1jf6d_66");
        event.stopPropagation(); // Prevents event from bubbling up
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("_open_1jf6d_66");
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll("._navLinks_1jf6d_32 a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("_open_1jf6d_66");
        });
    });
});

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

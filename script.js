// Comment out the scroll animation logic for now

// const scrollElements = document.querySelectorAll("[data-scroll]");

// const elementInView = (el, dividend = 1) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <= 
//         (window.innerHeight || document.documentElement.clientHeight) / dividend
//     );
// };

// const displayScrollElement = (element) => {
//     element.classList.add("data-scroll-visible");
// };

// const hideScrollElement = (element) => {
//     element.classList.remove("data-scroll-visible");
// };

// const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//         if (elementInView(el, 1.25)) {
//             displayScrollElement(el);
//         } else {
//             hideScrollElement(el);
//         }
//     });
// }

// window.addEventListener("scroll", () => {
//     handleScrollAnimation();
// });

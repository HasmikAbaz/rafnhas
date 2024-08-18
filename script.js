// Countdown Timer
const weddingDate = new Date('September 20, 2024 00:00:00').getTime();
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const timeUntilWedding = weddingDate - now;

    const days = Math.floor(timeUntilWedding / (1000 * 60 * 60 * 24));

    countdownEl.innerText = days;
}

setInterval(updateCountdown, 1000);

// Scroll Animation
const scrollElements = document.querySelectorAll("[data-scroll]");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("data-scroll-visible");
};

const hideScrollElement = (element) => {
    element.classList.remove("data-scroll-visible");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

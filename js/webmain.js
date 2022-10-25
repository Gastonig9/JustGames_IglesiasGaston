let button = document.querySelector(".menuButton")

button.addEventListener("click", () => {
    document.querySelector(".navMenu").classList.toggle("show");
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newscards', {delay: 500});
ScrollReveal().reveal('.bannernews', {delay: 500});
ScrollReveal().reveal('.bar', {delay: 500});
ScrollReveal().reveal('.newscards-two', {delay: 500});
ScrollReveal().reveal('.bardos', {delay: 500});
ScrollReveal().reveal('.topjuegos', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500}); 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 3000,
  effect: "slider",
  loop: true,
  autoplay: { delay: 3000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// javascript for mobile device

const hambergEl = document.querySelector(".fa-bars");
const menuEl = document.querySelector(".menu");

hambergEl.addEventListener("click", () => {
  menuEl.classList.toggle("open");
});

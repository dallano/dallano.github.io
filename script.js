const animatedElements = document.querySelectorAll(".upSlide, .leftSlide, .rightSlide, .imageSlide, .logoSlide, .profileSlide, .projectCard");
const splashTitles =
[
    "Software Developer",
    "Game Developer",
    "Competitive Programmer",
    "Bonsai Enthusiast",
    "Avid Linguist",
    "Cat Dad",
];

const value = document.getElementById("splashTextRotate");
let index = 0;

setInterval(() => {
  value.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % splashTitles.length;
    value.textContent = splashTitles[index];
    value.style.opacity = 1;
  }, 250); // wait for fade-out before updating
}, 1500); // total time = fade + display

// Set up an IntersectionObserver to detect when a section scrolls into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2 // Trigger when 10% of the section is visible
  }
);

// Observe each section
animatedElements.forEach(el => observer.observe(el));
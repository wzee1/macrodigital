// ----------
// ----------
// Navigation
// ----------
// ----------

// Selecting navigation links and the triggered toggle
const navLinks = document.querySelectorAll(".nav-links");
const navToggle = document.getElementById("page-nav-toggle");
const openPhased = document.getElementById("open-phased");

// Looping through each link
navLinks.forEach((link) => {
   // If you click a link the menu will disappear
   link.addEventListener("click", () => {
      if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
   });
});

openPhased.addEventListener("click", () => {
   if (navToggle.checked == true) { navToggle.checked = !navToggle.checked }
});

// -------------
// -------------
// Scroll Reveal
// -------------
// -------------

if (screen.width <= 320) {
   ScrollReveal({
      mobile: false
   });
} else {
   ScrollReveal({
      origin: 'top',
      distance: '32px',
      duration: 2000,
      delay: 400,
   });
}

ScrollReveal().reveal('.hero__text');

ScrollReveal().reveal('.features__card',
                     {delay: 500, origin: 'bottom'})

ScrollReveal().reveal('.hero__illustration',
            {delay: 1000, origin: 'right'});

ScrollReveal().reveal('.bestSeller__text, .subOnly__image--container, .upComing__text, .signUp__image',
            {delay: 500, origin: 'right'});

ScrollReveal().reveal('.bestSeller__illustration, .subOnly__text, .upComing__image, .signUp__text',
            {delay: 500, origin: 'left'});

ScrollReveal().reveal('.subOnly__text::before, .subOnly__text::after, .signUp__text::before, signUp__text::after',
         {delay: 1000, origin: 'left'});
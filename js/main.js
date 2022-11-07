// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
        
    autoplay: {
          delay: 5000,
        },
        
  });
// CHANGE NAVBAR STYLE

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
         faq.classList.toggle('open');

        //  change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
           icon.className = "uil uil-minus";
         } else{
            icon.className = "uil uil-plus";
         }
    })
})


// slider
var swiper = new Swiper(".home-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     loop:true,
//   });
addEventListener('DOMContentLoaded',()=>{

    const btn = document.querySelector('.btn-menu');
    btn.addEventListener('click',()=>{
        const menu = document.querySelector(".navbar__items")
        menu.classList.toggle('show')
    })

    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        loop: true,
        spaceBetween:10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
          // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }
      });
    // const elementCarousel = document.querySelectorAll('.carousel');
    // M.Carousel.init(elementCarousel,{
    //     duration:150,
    //     dist:-80,
    //     shift:5,
    //     numVisible:4,
    //     indicators:true,
    //     noWrap:true
    // })
})
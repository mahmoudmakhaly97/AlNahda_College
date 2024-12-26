// latest offers carousel 
$('.banner-carousel').owlCarousel({
    loop:true,
    rtl:true,

    autoplay:true,

    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"], 

    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 
// academic programs carousel
$('.academic-programs-carousel').owlCarousel({
    loop:true,
    rtl:true,

    autoplay:true,

    navText: [" <img src='../images/academic-programs/prev.svg' class='next-icon' alt=''>"," <img class='prev-icon' src='../images/academic-programs/next.svg' alt=''>"],

    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 
// academic programs carousel
$('.events-carousel').owlCarousel({
    loop:true,
    rtl:true,

    autoplay:true,

    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"], 

    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// start data aos animation
   window.addEventListener('load', () => {
      AOS.init({
  duration: 1000, 
  once: true,    
  offset: 120,   
});
  });
// end data aos animation
//start   navbar scroll logic

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });


// end navbar scroll logic


const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY-10}px`;
  cursor.style.left = `${e.clientX-5}px`;
});

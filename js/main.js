// latest offers carousel
$(".banner-carousel").owlCarousel({
  loop: true,
  rtl: true,

  autoplay: true,

  navText: [
    "<i class='fas fa-chevron-right'></i>",
    "<i class='fas fa-chevron-left'></i>",
  ],

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// academic programs carousel in desktop
$(".academic-programs-carousel-desktop").owlCarousel({
  loop: true,
  rtl: true,

  autoplay: true,

  navText: [
    " <img src='../images/academic-programs/prev.svg' class='next-icon' alt=''>",
    " <img class='prev-icon' src='../images/academic-programs/next.svg' alt=''>",
  ],

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// academic programs carousel in mobile
$(".academic-programs-carousel-mobile").owlCarousel({
  loop: true,
  rtl: true,

  autoplay: true,

  navText: [
    " <img src='../images/academic-programs/prev.svg' class='next-icon' alt=''>",
    " <img class='prev-icon' src='../images/academic-programs/next.svg' alt=''>",
  ],

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// academic programs carousel
$(".events-carousel").owlCarousel({
  loop: true,
  rtl: true,

  autoplay: true,

  navText: [
    "<i class='fas fa-chevron-right'></i>",
    "<i class='fas fa-chevron-left'></i>",
  ],

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// start data aos animation
window.addEventListener("load", () => {
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
  const dropdowns = document.querySelectorAll(".dropdown-menu.show");

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
    document.querySelector(".topbar-links").style.display = "none";
    dropdowns.forEach((dropdown) => {
      const dropdownToggle = dropdown.previousElementSibling;
      if (
        dropdownToggle &&
        dropdownToggle.classList.contains("dropdown-toggle")
      ) {
        dropdownToggle.click();
      }
    });
  } else {
    navbar.classList.remove("shrink");
    document.querySelector(".topbar-links").style.display = "block";
  }
});

        	// scrolled navbar 
var scrollWindow = function () {
  
    $(window).scroll(function () {
    var navbar = document.querySelector(".navbar");
			var $w = $(this),
        st = $w.scrollTop(),
          

        
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');
 			if (st > 80) {
				if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                  
              //  document.getElementById("logo").src = "../images/home/navbar/colored-logo.svg";

				}
                
			} 
			if (st < 80) {
				if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                                  //  document.getElementById("logo").src = "../images/home/navbar/logo.svg";

				}
			} 
			if ( st > 80 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 250) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
scrollWindow();
  

// end navbar scroll logic
// // start cursor shape logic
// const cursor = document.querySelector(".custom-cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.top = `${e.clientY - 0}px`;
//   cursor.style.left = `${e.clientX}px`;
// });
// // relax plugin
// window.onload = function () {
//   var rellax = new Rellax(".rellax");
// };

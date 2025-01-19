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
  // Refresh AOS animations
  document.querySelector(".next-button").addEventListener("click", () => {
    AOS.refresh();
  });

  document.querySelector(".prev-button").addEventListener("click", () => {
    AOS.refresh();
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
      navbar = $(".ftco_navbar"),
      sd = $(".js-scroll-wrap");
    if (st > 80) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");

        //  document.getElementById("logo").src = "../images/home/navbar/colored-logo.svg";
      }
    }
    if (st < 80) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
        //  document.getElementById("logo").src = "../images/home/navbar/logo.svg";
      }
    }
    if (st > 80) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }

      if (sd.length > 0) {
        sd.addClass("sleep");
      }
    }
    if (st < 250) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
      if (sd.length > 0) {
        sd.removeClass("sleep");
      }
    }
  });
};
scrollWindow();

// banner logic
document.addEventListener("DOMContentLoaded", function (e) {
  const nextButton = document.querySelector(".owl-prev");
  e.preventDefault();
  if (nextButton) {
    setTimeout(() => {
      nextButton.click();
    }, 1000);
  }
});

// Loader logic
window.addEventListener("load", function (e) {
  e.preventDefault();
  const loader = document.getElementById("loader");
  if (loader) {
    const minLoadTime = 600; // Minimum time in milliseconds
    const loadStart = performance.now();

    // Ensure the loader remains for a consistent duration
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300); // Smooth fade-out
    }, Math.max(0, minLoadTime - (performance.now() - loadStart)));
  }
});

// accordion in admission and resgistration page
document.querySelectorAll(".accordion-collapse").forEach((collapse) => {
  collapse.addEventListener("show.bs.collapse", function () {
    const accordionItem = this.closest(".accordion-item");
    accordionItem.style.borderRight = "7px solid #3ab64b";
  });

  collapse.addEventListener("hide.bs.collapse", function () {
    const accordionItem = this.closest(".accordion-item");
    accordionItem.style.borderRight = "7px solid transparent";
  });
});

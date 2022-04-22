// ! TODO: Replace with slick
$('.project-slider-active').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 10_000,
  autoplaySpeed: 2000,
  margin: 10,
  autoHeight: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

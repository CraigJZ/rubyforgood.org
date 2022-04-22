// ! TODO: Replace with slick
$('.clients-active').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
    0: {
      items: 2
    },
    320: {
      items: 2
    },
    480: {
      items: 3
    },
    767: {
      items: 4
    },
    991: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
})

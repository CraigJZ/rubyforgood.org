function mainSlider() {
  var mainSlider = $('.slider-active')
  // ? TODO: Do we need this function?
  mainSlider.on('init', function () {
    var $firstAnimatingElements = $('.single-slider:first-child').find(
      '[data-animation]'
    )
    doAnimations($firstAnimatingElements)
  })
  // TODO: Create loop for infinite slideshow
  mainSlider.on('beforeChange', function (nextSlide) {
    var $animatingElements = $(
      '.single-slider[data-slick-index="' + nextSlide + '"]'
    ).find('[data-animation]')
    doAnimations($animatingElements)
  })
  mainSlider.slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,
    easing: 'linear',
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    mobileFirst: true,
    respondTo: 'min',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          touchThreshold: 4
        }
      }
    ]
  })

  // ? TODO: Revisit whatever this is
  function doAnimations(elements) {
    var animationEndEvents =
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    elements.each(function () {
      var $this = $(this)
      var $animationDelay = $this.data('delay')
      var $animationType = 'animated ' + $this.data('animation')
      $this.css({
        animationDelay: $animationDelay,
        webkitAnimationDelay: $animationDelay
      })
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType)
      })
    })
  }
}

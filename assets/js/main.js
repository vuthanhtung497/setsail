var headerModal = document.querySelector('.header-modal')
var barBtn = document.querySelector('.header__btn-bar');
var headerQuick = document.querySelector('.header__quick')
var quickClose = document.querySelector('.quick-close')
var btnSearch = document.querySelector('.js-btn-search')
var modalSearch = document.querySelector('.js-modal-search')
barBtn.onclick = function(){
    headerModal.classList.add('open')
}

headerModal.onclick = function(e){
    if(!e.target.closest('.header__quick') || e.target.closest('.quick-close')){
        headerModal.classList.remove('open')
    }
}

btnSearch.addEventListener('click', function(){
  modalSearch.classList.add('open')
})

modalSearch.addEventListener('click', function(){
  modalSearch.classList.remove('open')
})

document.querySelector('.modal__search-container').addEventListener('click', function(e){
  e.stopPropagation()
})

$(document).ready(function(){
  $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        // prevArrow: false,
        // nextArrow: false,
        // pauseOnHover: false,
        prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow pull-right'><i class='fas fa-chevron-right'></i></button>",
  });
});

  $(document).ready(function(){
    $('.plan__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
    });
  });
  $(document).ready(function(){
    $('.feedback__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow pull-right'><i class='fas fa-chevron-right'></i></button>",
    });
  });
  $(document).ready(function(){
    $('.review__author').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          // {
          //   breakpoint: 480,
          //   settings: {

          //   }
          // }
        ]
    });
  });
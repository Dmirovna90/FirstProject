$(".slider").slick({
  dots: true,
  dotsClass: 'slick-dots',
  Infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500
});

let nav = document.querySelector(".navigation");
let burger = document.querySelector(".fa-bars");
burger.addEventListener("click", function (){
  nav.classList.toggle("active");
})
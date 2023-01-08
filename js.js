$(document).ready(function ($) {
  //external plagin for adaptive (changing block position after changing resolution)
  const da = new DynamicAdapt("max");
  da.init();

  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 2,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
  });

  let OS_tag = undefined;

  //menu
  $(".menu__btn-show").click(function () {
    $(this).toggleClass("menu__btn-show-alternative");
    $(".logo__img").toggleClass("logo__img-alternative");
    $(".header").toggleClass("header-alternative");
    $(".navbar").toggleClass("navbar-alternative");
    $(".m-menu-footer").toggleClass("m-menu-footer-alternative");
  });

  //open modal form and os div
  $(".header-info__btn-upgrade").click(function () {
    $(".modal-form").css({ display: "flex" });
    $(".choose-OS").css({ display: "block" });
  });

  //close os div and modal form
  $(".choose-OS__btn-back").click(function () {
    $(".modal-form").css({ display: "none" });
    $(".choose-OS").css({ display: "none" });
  });

  //open modal form
  $(".btn-start").click(function () {
    $(".modal-form").css({ display: "flex" });
    $(".choose-OS").css({ display: "block" });
  });

  //get tag of choosen OS
  $(".OS__link").click(function () {
    OS_tag = $(this).attr("tag");
    $(".choose-OS").css({ display: "none" });
    $(".registration").css({ display: "block" });
  });

  //close registration form
  $(".registration__btn-back").click(function () {
    $(".choose-OS").css({ display: "block" });
    $(".registration").css({ display: "none" });
  });

  //open authorization form
  $(".btn-open-authorization").click(function () {
    $(".registration-content__reg").css({ display: "none" });
    $(".registration-content__log-in").css({ display: "block" });
    $(".btn-open-authorization__text").css({
      color: "rgba(255, 255, 255, 1)",
    });

    $(".btn-open-registration__text").css({
      color: "rgba(255, 255, 255, 0.5)",
    });
  });

  //open registration form
  $(".btn-open-registration").click(function () {
    $(".registration-content__reg").css({ display: "flex" });
    $(".registration-content__log-in").css({ display: "none" });
    $(".btn-open-authorization__text").css({
      color: "rgba(255, 255, 255, 0.5)",
    });

    $(".btn-open-registration__text").css({
      color: "rgba(255, 255, 255, 1)",
    });
  });
});

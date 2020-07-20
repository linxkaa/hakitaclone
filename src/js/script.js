$(document).ready(function () {
  $(".js-tilt").tilt({
    scale: 1.1,
  });

  $(".navbar-elementbtn").click(function () {
    $(".navbarcollapze").show();

    $(".navbarcollapze").css({
      display: "block",
      "background-color": "rgba(0,0,0,0.3)",
    });
  });
  $(".navbar-elementbtnn").click(function () {
    $(".navbarcollapze").css({
      "background-color": "transparent",
    });
    $(".navbarcollapze").hide(
      "slide",
      {
        direction: "left",
      },
      500
    );
  });
  $(".navDir").click(function () {
    $(".navbarcollapze").show();

    $(".navbarcollapze").css({
      display: "block",
      "background-color": "rgba(0,0,0,0.3)",
    });
  });
  $(".navDir").click(function () {
    $(".navbarcollapze").css({
      "background-color": "transparent",
    });
    $(".navbarcollapze").hide(
      "slide",
      {
        direction: "left",
      },
      500
    );
  });
});

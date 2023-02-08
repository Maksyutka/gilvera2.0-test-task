const mobileMenuToggle = () => {
  $(".burger").click(function () {
    $(".sidebar").toggleClass("sidebar_hidden");
    $(".burger").toggleClass("burger_active");
    $("html").toggleClass("overflowed");
  });
};

$(document).ready(function () {
  mobileMenuToggle();
});

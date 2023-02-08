const mobileMenuToggle = () => {
  $(".burger").click(function () {
    $(".sidebar").toggleClass("sidebar_hidden");
    $(".burger").toggleClass("burger_active");
  });
};

$(document).ready(function () {
  mobileMenuToggle();
});

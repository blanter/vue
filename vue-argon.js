/* Search */
$(document)
  .ready(function() {
    $(".show-search,.close-search")
      .click(function() {
        $("#search-box")
          .slideToggle("normal");
        $(".tombol-utama")
          .slideToggle("normal");
      });
  });

/* Navigation */
$(document)
.ready(function() {
  $('.navigation li.sub-menu')
    .click(function() {
$('.navigation li.sub-menu.active',this)
.removeClass("active");
      $(this)
        .toggleClass("active");
    });
});
$(document)
  .ready(function() {
    $(".show-navigation,.close-navigation")
      .click(function() {
        $(".navigation")
          .slideToggle("normal");
        $(".close-navigation")
          .slideToggle("normal");
      });
  });
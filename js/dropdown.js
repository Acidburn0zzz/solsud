(function($){
  $("ul.menu li").hover(function() {
    $(this).addClass("hover");
    $("ul:first", this).css("visibility", "visible");
  }, function() {
    $(this).removeClass("hover");
    $("ul:first", this).css("visibility", "hidden");
  });
})(jQuery);

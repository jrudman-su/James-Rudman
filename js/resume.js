var $elements_50 = $(".bar-50");
var $elements_100 = $(".bar-100");
var $elements_75 = $(".bar-75");
var $skills = $(".skills-div");

var $window = $(window);

$window.on("scroll", checkView);

function checkView() {
  let window_height = $window.height();
  let window_top_position = $window.scrollTop();
  let window_bottom_position = window_top_position + window_height;

  $.each($skills, function() {
    let $element = $(this);
    let element_height = $element.outerHeight();
    let element_top_position = $element.offset().top;
    let element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $.each($elements_50, function() {
        let $element = $(this);
        $element.addClass("full-50");
      });
      $.each($elements_75, function() {
        let $element = $(this);
        $element.addClass("full-75");
      });
      $.each($elements_100, function() {
        let $element = $(this);
        $element.addClass("full-100");
      });
    } else {
      $.each($elements_50, function() {
        let $element = $(this);
        $element.removeClass("full-50");
      });
      $.each($elements_75, function() {
        let $element = $(this);
        $element.removeClass("full-75");
      });
      $.each($elements_100, function() {
        let $element = $(this);
        $element.removeClass("full-100");
      });
    }
  });
}

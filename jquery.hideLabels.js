(function($) {
  $.fn.hideLabels = function() {
    this.each(function() {
      $(this).siblings('input').bind('focus', function() {
        $(this).prev().hide();
      }).bind('blur', function() {
        if (!this.value) {
          $(this).prev().show();
        }
      });
//      $(this).siblings("input").focus(function() {
//        return $(this).prev().hide();
//      });
//      $(this).siblings("input").blur(function() {
//        if (!this.value) {
//          return $(this).prev().show();
//        }
//      });
//      $(this).siblings("input").each(function() {
//        if (this.value) {
//          return $(this).prev().hide();
//        }
//      });
    });
  };
})(jQuery);

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
    });
  };
})(jQuery);

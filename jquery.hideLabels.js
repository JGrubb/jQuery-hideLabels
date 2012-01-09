(function() {
  jQuery.fn.hideLabels = function() {
    return this.each(function() {
      $(this).siblings("input").focus(function() {
        return $(this).prev().hide();
      });
      $(this).siblings("input").blur(function() {
        if (!this.value) {
          return $(this).prev().show();
        }
      });
      return $(this).siblings("input").each(function() {
        if (this.value) {
          return $(this).prev().hide();
        }
      });
    });
  };
}).call(this);

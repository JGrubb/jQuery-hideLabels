/**
 * jQuery hideLabels()
 * Authored by: John Grubb
 * http://ignoredbydinosaurs.com
 * Jan 9, 2012
 * 
 * @file
 * I got tired of looking for the code to hide form labels that nest inside
 * of text form inputs.  So I wrote my first plugin to do it for me.
 *
 * Usage
 * Expects the selector of the label that you want to hide, ie. something like
 * $('label.overlay').hideLabels();
 * Will hide label upon focus, and show again if form field is empty.
 */

jQuery.fn.hideLabels = function() {
  return this.each(function() {
    $(this).siblings('input').focus(function() {
      $(this).prev().hide();
    });
    $(this).siblings('input').blur(function() {
      if (!this.value) {
        $(this).prev().show();
      }
    });
    $(this).siblings('input').each(function() {
      if (this.value) {
        $(this).prev().hide();
      }
    });
  });
};
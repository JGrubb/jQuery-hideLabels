jQuery.fn.hideLabels = ->
  @each ->
    $(this).siblings("input").focus ->
      $(this).prev().hide()

    $(this).siblings("input").blur ->
      $(this).prev().show()  unless @value

    $(this).siblings("input").each ->
      $(this).prev().hide()  if @value
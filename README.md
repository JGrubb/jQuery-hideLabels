##jQuery HideLabels

I got tired of writing the code to hide and show form labels that were nested inside of form inputs on tightly spaced forms.  So after about the 12th time, I wrote my first jQuery plugin to do it for me.

###Usage

Currently only takes the selector of the label you want to hide.  This plugin doesn't do it all.  In other words, you still have to write the CSS to position your labels and inputs where you want them --

*Given I have such markup:*

    <div class="form-item">
        <label for="firstName" class="overlay">First Name</label>
        <input type="text" name="firstName" />
    </div>

*And I have this in my stylesheet*

    .form-item
        position: relative
    label
        position: absolute
        left: 5px
        top: 2px

*This will hide and show the form labels on input focus*

    $('label.overlay').hideLabels();
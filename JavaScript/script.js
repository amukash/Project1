// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#email').on('focus', function() {
    $('#input-email label').addClass('active');
  });
  $('#email').on('blur', function() {
    if ($('#email').val().length == 0) {
      $('#input-email label').removeClass('active');
    }
  });
});

  // JavaScript to handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Optionally, you can handle form data here (e.g., validation, AJAX submission)

    // Reset the form fields
    this.reset(); // Resets the form fields to their initial values

  });

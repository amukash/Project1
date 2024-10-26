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
  function handleSubmit() {
    // Reset the form
    document.getElementById('volunteerForm').reset();
    // Optionally, you can show a success message or perform other actions
    alert('Form submitted successfully!'); // Example success message
    return false; // Prevent default form submission
  }

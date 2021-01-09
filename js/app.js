$(document).ready(function() {
  // cripples
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.03,
  });
  // magnific poppup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
      enabled:true
    }
    // other options
  });
});
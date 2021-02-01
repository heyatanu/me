

var btn = $('#onclickgoup');

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    btn.addClass('show');

    
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




$(window).scroll(function() {
  if ($(window).scrollTop() < 650) {
    homefun()
  }
  if ($(window).scrollTop() >= 650) {
    aboutfun()
  }
  if ($(window).scrollTop() >= 1350) {
    skillfun()
  }
  if ($(window).scrollTop() >= 2650) {
    projectfun()
  }

  if ($(window).scrollTop() > 3350) {
    workfun()
  }


});
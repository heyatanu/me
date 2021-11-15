(function ($) {

  "use strict";
    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

        // SELECT MODE
      var mot="(Selected)";

        $('.filterbtn').click(function(e){
          var x = document.querySelectorAll(".filterbtn");
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].innerHTML=x[i].innerHTML.replace(mot, "");
          }
          e.currentTarget.innerHTML=e.currentTarget.innerHTML+mot;
      })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);



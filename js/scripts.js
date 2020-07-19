/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  $(
    "#contactForm input,#contactForm textarea,#contactForm button"
).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
        // additional error messages or events
    },
    submitSuccess: function ($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var adress = $("input#adress").val();
        var moving = $("input#moving").val();
        var Postal = $("input#Postal").val();
        var CT_Main_0_ctl16_drpValue = $("input#CT_Main_0_ctl16_drpValue").val();
        var City = $("input#City").val();
        var CT_Main_0_ctl10_drpValue = $("input#CT_Main_0_ctl10_drpValue").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(" ") >= 0) {
            firstName = name.split(" ").slice(0, -1).join(" ");
        }
        $this = $("#sendMessageButton");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        $.ajax({
            url: "./assets/mail/contact_me.php",
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email,
                adress: adress,
                moving: moving,
                Postal: Postal,
                CT_Main_0_ctl16_drpValue: CT_Main_0_ctl16_drpValue,
                City: City,
                CT_Main_0_ctl10_drpValue: CT_Main_0_ctl10_drpValue,
                message: message,
            },
            cache: false,
            success: function () {
                // Success message
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-success").append(
                    "<strong>Your message has been sent. </strong>"
                );
                $("#success > .alert-success").append("</div>");
                //clear all fields
                $("#contactForm").trigger("reset");
            },
            error: function () {
                // Fail message
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-danger").append(
                    $("<strong>").text(
                        "Sorry " +
                            firstName +
                            ", it seems that my mail server is not responding. Please try again later!"
                    )
                );
                $("#success > .alert-danger").append("</div>");
                //clear all fields
                $("#contactForm").trigger("reset");
            },
            complete: function () {
                setTimeout(function () {
                    $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                }, 1000);
            },
        });
    },
    filter: function () {
        return $(this).is(":visible");
    },
});

$('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
});
$("#name").focus(function () {
  $("#success").html("");
});
})(jQuery); 
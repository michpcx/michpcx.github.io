$( document ).ready(function() {

    var strings = {
      strings: ['programming.', 'cyber&nbsp;security.', 'travelling.', 'politics.', 'video&nbsp;games.', 'history.'],
      typeSpeed: 100,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };

    var strings_pl = {
      strings: ['programowaniu.', 'bezpieczeństwie&nbsp;cybernetycznym.', 'podróżowaniu.', 'polityce..', 'grach&nbsp;komputerowych.', 'historii.'],
      typeSpeed: 100,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };


    if( $('.interest_list').length )
    {

    var typed = new Typed('.interest_list', strings);

    } else if( $('.interest_list_pl').length )
    {

    var typed = new Typed('.interest_list_pl', strings_pl);

    }


    // isotope
    var $gallery = $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });



});

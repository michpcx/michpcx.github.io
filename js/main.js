$( document ).ready(function() {

    var business_list_strings = {
      strings: ['cloud', 'web', 'mobile app'],
      typeSpeed: 150,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };

    var business_list_strings_pl = {
      strings: ['aplikacji w chmurze ', 'strony web', 'aplikacji mobilnej'],
      typeSpeed: 75,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };

    var interst_list_strings = {
      strings: ['programming.', 'cyber&nbsp;security.', 'travelling.', 'politics.', 'video&nbsp;games.', 'history.'],
      typeSpeed: 100,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };

    var interst_list_strings_pl = {
      strings: ['programowaniu.', 'bezpieczeństwie&nbsp;cybernetycznym.', 'podróżowaniu.', 'polityce..', 'grach&nbsp;komputerowych.', 'historii.'],
      typeSpeed: 100,
      backDelay: 1500,
      loop: true,
      startDelay: 200,
      backSpeed: 50
    };


    if( $('.interest_list').length )
    {
    var typed = new Typed('.interest_list', interst_list_strings);
    } else if( $('.interest_list_pl').length )
    {
    var typed = new Typed('.interest_list_pl', interst_list_strings_pl);
    }

    if( $('.business_list').length )
    {
    var typed = new Typed('.business_list', business_list_strings);
  } else if( $('.business_list_pl').length )
    {
    var typed = new Typed('.business_list_pl', business_list_strings_pl);
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


    var number1 = new counterUp({
    // duration in milliseconds
    duration: 1000,
    // string to prepend to the value
    prepend: '',
    // string to apend to the value
    append: '',
    // selector used to find elements on wich applycountUp
    selector: '#number_1',
    // default start
    start: 0,
    // default end
    end: 10,
    // should we display integer values only
    intvalues: true,
    // default counting interval
    interval: 100
});

    var number2 = new counterUp({
    // duration in milliseconds
    duration: 1000,
    // string to prepend to the value
    prepend: '',
    // string to apend to the value
    append: '',
    // selector used to find elements on wich applycountUp
    selector: '#number_2',
    // default start
    start: 0,
    // default end
    end: 11,
    // should we display integer values only
    intvalues: true,
    // default counting interval
    interval: 100
});

    var number3 = new counterUp({
    // duration in milliseconds
    duration: 1000,
    // string to prepend to the value
    prepend: '',
    // string to apend to the value
    append: '',
    // selector used to find elements on wich applycountUp
    selector: '#number_3',
    // default start
    start: 0,
    // default end
    end: 7,
    // should we display integer values only
    intvalues: true,
    // default counting interval
    interval: 100
});

    var number4 = new counterUp({
    // duration in milliseconds
    duration: 800,
    // string to prepend to the value
    prepend: '',
    // string to apend to the value
    append: '',
    // selector used to find elements on wich applycountUp
    selector: '#number_4',
    // default start
    start: 0,
    // default end
    end: 3,
    // should we display integer values only
    intvalues: true,
    // default counting interval
    interval: 20
});


    var start_counting = new Waypoint({
      element: document.getElementsByClassName('stat_box'),
      handler: function(direction) {
        number1.start();
        number2.start();
        number3.start();
        number4.start();
      },
      offset: '100%'
    });

    $('.scroll').click(function(event) {
      $('html, body').animate({ scrollTop: $(this).offset().top+85 }, 550);
    });


});

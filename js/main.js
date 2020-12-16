$( document ).ready(function() {

    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });



    function mainLoopPL(){
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("podróżowaniu."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("strategii wojennej."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("tworzeniu gier."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("politice."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("gier wideo."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("historii."); $(this).dequeue()})
            .animate({opacity:1});
        $("#listItemPL").delay(2000).animate({opacity:0}, 500)
            .queue(function(){$(this).text("eksploracją kosmosu."); $(this).dequeue()})
            .animate({opacity:1}, mainLoopPL);
      }

    var words = document.querySelectorAll(".word");
    words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
    });
    var currentWordIndex = 0;
    var maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";
    var rotateText = function () {
        var currentWord = words[currentWordIndex];
        var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        // rotate out letters of current word
        Array.from(currentWord.children).forEach(function (letter, i) {
            setTimeout(function () {
                letter.className = "letter out";
            }, i * 80);
        });
        // reveal and rotate in letters of next word
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach(function (letter, i) {
            letter.className = "letter behind";
            setTimeout(function () {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
        currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };
    rotateText();
    setInterval(rotateText, 4000);
});

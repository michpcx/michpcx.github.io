$( document ).ready(function() {

  function mainLoop(){
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("travelling."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("war strategy."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("game making."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("politics."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("video games."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("history."); $(this).dequeue()})
          .animate({opacity:1});
      $("#listItem").delay(2000).animate({opacity:0}, 500)
          .queue(function(){$(this).text("space exploration."); $(this).dequeue()})
          .animate({opacity:1}, mainLoop);
    }

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
            .animate({opacity:1}, mainLoop);
      }

    if($("#listItem").length){
      mainLoop();
    }

    if($("#listItemPL").length){
      mainLoopPL();
    }
});

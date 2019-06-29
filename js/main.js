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

    mainLoop();
});

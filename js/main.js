$( document ).ready(function() {
    setInterval(Showlist, 0);
});


function Showlist()
{
  $("#listItem1").fadeIn(1000).delay(2000).fadeOut(1000).delay(12000);
  $("#listItem2").delay(4000).fadeIn(1000).delay(2000).fadeOut(1000).delay(8000);
  $("#listItem3").delay(8000).fadeIn(1000).delay(2000).fadeOut(1000).delay(4000);
  $("#listItem4").delay(12000).fadeIn(1000).delay(2000).fadeOut(1000);
}

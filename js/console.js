$( document ).ready(function() {

  $('.command_input').on('keydown',function search(e) {
		if(e.keyCode == 13) {
      var message = $('<div />').text($(this).val()).html();
    	//$('.history').append('<span>' + message + '<br/></span>');

      if(message.substring(0, 4) === 'help'){
  			//$('.path').html($(this).val().substring(3)+'&nbsp;>&nbsp;');
        $('.history').append('<span> <br/></span>');
        $('.history').append('<span> This puzzle is unfortunetely still under construction. <br/></span>');
        $('.history').append('<span> Feel free to check it out soon to see if you can crack it! <br/></span>');
        $('.history').append('<span> Current command list: <br/></span>');
        $('.history').append('<span> <span class="orange">help</span> - shows this help message <br/></span>');
        $('.history').append('<span> <span class="orange">clear</span> - clears the screen <br/></span>');
      }else if(message.substring(0, 5) === 'clear'){
        $(".history span").remove();
      }else{
        $('.history').append('<span> Sorry, that command is not recognised! <br/></span>');
      }

      $('.command_input').val('');
    }
  });

  $('.terminal').on('click', function(){
	    $('.command_input').focus();
  });


});

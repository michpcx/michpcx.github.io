$( document ).ready(function() {

  home = ["mich"];
  bin = ["app1", "app2"];
  mnt = [];
  share = [];
  directory_list = [home, bin, mnt, share];
  directory_list_names = ["home", "bin", "mnt", "share"];
  current_position = [0, 0];

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
        $('.history').append('<span> <span class="orange">ls</span> - lists the content of the current directory <br/></span>');
        $('.history').append('<span> <span class="orange">cd</span> - allows to change the current directory <br/></span>');
        $('.history').append('<span> <span class="orange">pwd</span> - prints current working directory <br/></span>');
      }else if(message.substring(0, 2) === 'ls'){
        if(current_position[0] == 0){
          $('.history').append('<span> ' + "/" + directory_list_names.join(" /") + ' <br/></span>');
        }else if(current_position[1] == 0){
          $('.history').append('<span> ' + "/" + directory_list[current_position[0]-1].join(" /") + ' <br/></span>');
        }else{
          $('.history').append('<span> ' + "/" + directory_list[current_position[0]-1][current_position[1]-1].join(" /") + ' <br/></span>');
        }
      }else if(message.substring(0, 5) === 'clear'){
        $(".history span").remove();
      }else if(message.substring(0, 2) === 'cd'){
        var parameters = message.split(" ");
        if(directory_list_names.indexOf(parameters[1]) >= 0){
          current_position[0] = directory_list_names.indexOf(parameters[1]) + 1;
          $('.history').append('<span> <span class="red">root</span>@<span class="blue">server</span>:~$&nbsp; <br/></span>');
        }else if(directory_list_names.indexOf(parameters[1].substring(1)) >= 0){
          current_position[0] = directory_list_names.indexOf(parameters[1].substring(1)) + 1;
          $('.history').append('<span> <span class="red">root</span>@<span class="blue">server</span>:~$&nbsp; <br/></span>');
        }else if(parameters[1] == ".."){
          if(current_position[0] > 0){
            if(current_position[1] > 0){
              current_position[1] = 0;
              $('.history').append('<span> <span class="red">root</span>@<span class="blue">server</span>:~$&nbsp; <br/></span>');
            }else{
              current_position[0] = 0;
              $('.history').append('<span> <span class="red">root</span>@<span class="blue">server</span>:~$&nbsp; <br/></span>');
            }
          }else{
            $('.history').append('<span> <span class="red">root</span>@<span class="blue">server</span>:~$&nbsp; <br/></span>');
          }
        // }else if(){

        }else{
          $('.history').append('<span> Sorry, the folder requested could not be found! <br/></span>');
        }
      }else if(message.substring(0, 5) === 'pwd'){
        if(current_position[0] > 0){
          if(current_position[1] > 0){
            $('.history').append('<span> /' + directory_list_names[current_position[0]-1] + '/' + directory_list[current_position[1]-1] + ' <br/></span>');
          }else{
            $('.history').append('<span> /' + directory_list_names[current_position[0]-1] + ' <br/></span>');
          }
        }else{
            $('.history').append('<span> / <br/></span>');
        }
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

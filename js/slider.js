$(document).ready(function() {

    var bgArray = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg'];
    var arrChecker = new Array();
    var path = 'assets/backImages/';

    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    arrChecker.push(bg);
    $('#image1').css('background-image', 'url('+path+bg+')');


    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    if (arrChecker.includes(bg)) {
      do {
          bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        }
        while (arrChecker.includes(bg));
    }
    $('#image2').css('background-image', 'url('+path+bg+')');

    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    if (arrChecker.includes(bg)) {
      do {
          bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        }
        while (arrChecker.includes(bg));
    }
    $('#image3').css('background-image', 'url('+path+bg+')');

    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    if (arrChecker.includes(bg)) {
      do {
          bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        }
        while (arrChecker.includes(bg));
    }
    $('#image4').css('background-image', 'url('+path+bg+')');

    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    if (arrChecker.includes(bg)) {
      do {
          bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        }
        while (arrChecker.includes(bg));
    }
    $('#image5').css('background-image', 'url('+path+bg+')');

    bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    if (arrChecker.includes(bg)) {
      do {
          bg = bgArray[Math.floor(Math.random() * bgArray.length)];
        }
        while (arrChecker.includes(bg));
    }
    $('#image6').css('background-image', 'url('+path+bg+')');


});

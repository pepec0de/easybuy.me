/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('background'), {
    dotColor: '#FFFFFF',
    lineColor: '#FFFFFF'
  });
  var intro = document.getElementById('main');
  //intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  intro.style.marginTop = - intro.offsetHeight + 100 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/

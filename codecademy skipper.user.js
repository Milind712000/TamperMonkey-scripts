// ==UserScript==
// @name         codecademy skipper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  please hug me, I'm breaking down
// @author       Me
// @include      *.codecademy.*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==
// click run-button

// press 1 to run the code
// press 2 to click solution button and then 'give me solution button'
// press 3 to click next
// press 4 to checkoff all the tasks in a codecademy project
// normal order for lesson => 1, 1, 2, 3
// normal order for project => 4,2

function a(){
	$('#run-button').click();
};

// click solution button and then 'give me solution button'
function s(){
	$('.btn-yellow__yMHS2uJ7H7WrTgbujzcMr').click();
	$('.outline__1jukYfNsJOsNuah6o7d8HZ.button__3EGKNLNuZFJ33B2zcQ5_l6').click();
};

// click next button
function d(){
	$('#discovery-next').click();
};

$(document).keypress(function(e) {
  if(e.charCode == 49 ) {
    a();
  }
});
$(document).keypress(function(e) {
  if(e.charCode == 50 ) {
    s();
  }
});
$(document).keypress(function(e) {
  if(e.charCode == 51 ) {
    d();
  }
});
//check off all the tasks
function aa(){
        $('.fcn-task__number').each(function(){ $(this).click();
                                              })
};
$(document).keypress(function(e) {
  if(e.charCode == 52 ) {
    aa();
  }
});
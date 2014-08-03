// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

var firstTime = true;
var msg = 'Enter your email address...';

function submitEmail($emailInput, $response) {
	$.ajax({
		url: '/api/users',
		type: 'post',
		data: {
			email: $emailInput.val()
		}
	}).always(function(){
		$response.animate({
			height: '1.5em'
		}, 500);
	}).success(function(e){
		$response.text('Stay tuned for updates!');
<<<<<<< HEAD
		$('#email').attr('disabled', 'disabled');
=======
		$emailInput.attr('disabled', 'disabled');
>>>>>>> 52150c5919222bb014060d917f36fd0b8d6e417f
	}).error(function(e){
		$response.text('Please enter a valid email address.');
	});
}

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 1000);
        return this;
    }
})(jQuery);

function registerScroll(el) {
	$('.scroll-to-' + el).click(function(){
		console.log('scrolling to ' + el);
		$('.' + el).goTo();
	});
}

$(function(){
<<<<<<< HEAD
	var field = $('#email'),
		button = $('#submit-button'),
		$response = $('.response');

	field.val(msg);
=======
	var field = $('#email-input'),
		button = $('.submit-button');
>>>>>>> 52150c5919222bb014060d917f36fd0b8d6e417f

	field.click(function(){
		if (firstTime) {
			field.val('');
			firstTime = false;
		}
	});

	field.focusout(function(){
		if (field.val() == '') {
			field.val(msg);
			firstTime = true;
		}
	});

	button.click(function(){
<<<<<<< HEAD
		submitEmail(field.val(), $response);
=======
		submitEmail(field, $('.response'));
>>>>>>> 52150c5919222bb014060d917f36fd0b8d6e417f
	});

	registerScroll('features');
	registerScroll('pricing');
	registerScroll('invites');
})
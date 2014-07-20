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

function submitEmail(email, $response) {
	$.ajax({
		url: '/api/users',
		type: 'post',
		data: {
			email: email
		}
	}).success(function(e){
		$response.text('Stay tuned for updates!');
	}).error(function(e){
		$response.text('This email is invalid.');
	});
}

$(function(){
	var field = $('.email-form-field'),
		button = $('.notify-me')
	    form = $('#email-form');

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
		console.log('click');
		var emailField = $('.email-form-field');
		submitEmail(emailField.val(), $('.response'));
	});
})
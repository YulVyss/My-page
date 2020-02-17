"use strict"
$(function(){
	const div = $('.header__icon, .nav_mobile');
	const button = $('.header__button');
	const menu = $('.nav_mobile');

	div.click(function(){
		button.toggleClass('open');
		menu.slideToggle(600);
	});
	const button_orange = $('.button_orange, .close_form');
	const form_more = $('.form_contact');
	const input = $('input');

	button_orange.click(function(){
		form_more.slideToggle(600);
		input.value = "";
	});

	const button_call = $('.call-block__button, .close_call');
	const form_call = $('.form_call');

	button_call.click(function(){
		form_call.slideToggle(600);
		input.value = "";
	});


	const fetchSend = (formData) => {
	    fetch('mail.php', { // файл-обработчик 
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
	        },
	        body: formData
	    .then(response => console.log('Сообщение отправлено'))
	    .catch(error => console.error(error))
	})

	const forms = document.getElementsByTagName('form');
	for (let i = 0; i < forms.length; i++) {
	    forms[i].addEventListener('submit', function(e){
	        e.preventDefault();
	        const formData = new FormData(this);
	        fetchSend(formData);
	        this.reset(); // очищаем поля формы 
	        document.location.reload(true);
		    });
		};
	};

//  (function (d, w, c) {
//    (w[c] = w[c] || []).push({formId:116565,host:"formdesigner.ru",formHeight:0, el: "form_116565_1", center: 0});
//    var s = d.createElement("script"), g = "getElementsByTagName";
//    s.type = "text/javascript"; s.charset="UTF-8"; s.async = true;
//    s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
//    var h=d[g]("head")[0] || d[g]("body")[0];
//    h.appendChild(s);
// })(document, window, "fdforms")

  
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	$('#up').addClass('show');
	} else {
	$('#up').removeClass('show');
	}
});

$('#up').click(function(e) {
	e.preventDefault();
	$('body, html').animate({scrollTop:0}, '300');
});
  
});

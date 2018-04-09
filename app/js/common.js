$(function() {
	$('nav#menu').mmenu({
		extensions: [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-black', 'theme-black', 'border-none' ],
		iconPanels	: true,
		navbar : {
			title : '<img src="../img/logo.png">'
		}
	});
	$(".hamburger").click(function() {
		$(".hamburger").addClass('is-active');
	});

	$("#mm-blocker").click(function() {
		$(".hamburger").removeClass('is-active');
	});

	$(".mm-listview li").click(function() {
		$(".hamburger").removeClass('is-active');
	});

	$("#mnu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$('.events_reservation').height('.reservation');
	console.log($('.events_reservation').outerHeight());

});
	


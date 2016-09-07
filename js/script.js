$(document).ready(function(){
	var $menuBtn = $('.header .glyphicon.glyphicon-menu-hamburger'),
		$menu = $('.header__menu');

	$menuBtn.on('click', function(){
		$menu.slideToggle();
	});

	$(window).resize(function(){
		if (window.matchMedia('(max-width: 992px)').matches && $($menu).is(':visible')) {
			$($menu).hide();
		} else if (window.matchMedia('(min-width: 992px)').matches) {
			$($menu).show();
		}
	});
});
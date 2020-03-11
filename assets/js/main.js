$('.header-nav--wrapper').on('click', function() {
	$('.header-nav--wrapper').addClass('header-nav--close');
	$('.header-nav--close').removeClass('header-nav--wrapper');

	$('.nav--responsive').addClass('is-open');
	$('.header-nav-burger').addClass('is-animate');
	setTimeout(() => {
		$('.overlay').addClass('is-open');
	}, 300);
	$('.overlay').toggle();
	$('body').addClass('overflow');
});

$('.header-nav--close').on('click', function() {
	$('.header-nav--close').addClass('header-nav--wrapper');
	$('.header-nav--wrapper').removeClass('header-nav--close');

	$('.nav--responsive').removeClass('is-open');
	$('.overlay').removeClass('is-open');
	$('.header-nav-burger').removeClass('is-animate');
	setTimeout(() => {
		$('.overlay').toggle();
	}, 300);

	$('body').removeClass('overflow');
});

$('.overlay').on('click', function() {
	$('.header-nav--close').addClass('header-nav--wrapper');
	$('.header-nav--wrapper').removeClass('header-nav--close');

	$('.nav--responsive').removeClass('is-open');
	$('.overlay').removeClass('is-open');
	$('.header-nav-burger').removeClass('is-animate');
	setTimeout(() => {
		$('.overlay').toggle();
	}, 300);

	$('body').removeClass('overflow');
});

$(function() {

    $('#my-menu').mmenu({
        extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });

   	$('.slider').owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navText: ['<i class="fa fa-long-arrow-alt-left"></i>','<i class="fa fa-long-arrow-alt-right"></i>'],
			infinity: true,
			smartSpeed: 700
	});

   	$('.owl-dot').each (function () {
			$ (this).children('span').text($(this).index() + 1);
	});

		 $('.about__item').on('click', function(e){
		 		e.preventDefault();
		    $('.about__item.active').removeClass('active');
		    $(this).addClass('active');
		});
});





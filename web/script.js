var windowWidth = jQuery(window).width();
jQuery(document).ready(function($) {
	if($('.tabs').length) {
		$('.tabHead').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				let tab = '.t' + $(this).attr('data');
				$(this).parent().parent().find(tab).hide().removeClass('vis');
			} else {
				$(this).addClass('active');
				let tabNav = '[data="t' + $(this).attr('data') + '"]';
				$(tabNav).addClass('active');
				let tab = '.t' + $(this).attr('data');
				$(this).parent().parent().find(tab).addClass('vis').fadeIn();
			}
		})
		$('.tabNavEl').on('click', function() {
			if($(this).hasClass('active')) {
				$(this).parent().children().removeClass('active');
				$(this).parent().parent().find('.tabHead').removeClass('active');
				$(this).parent().parent().find('.tabEl.vis').hide().removeClass('vis')
			} else {
				$(this).parent().children().removeClass('active');
				$(this).parent().parent().find('.tabHead').removeClass('active');
				$(this).parent().parent().find('.tabEl.vis').hide().removeClass('vis');  
				$(this).addClass('active');
				let tab = '.' + $(this).attr('data');
				$(this).parent().parent().find(tab).addClass('vis').fadeIn();
		}
		})
	}
})

jQuery(window).resize(function () {
	var oldWindowWidth = windowWidth;
	setTimeout(function() {
		windowWidth = jQuery(window).width();
		if((oldWindowWidth < 768) && (windowWidth > 767)) {
			jQuery('.tabNavEl').removeClass('active');
			jQuery('.tabHead').removeClass('active');
			jQuery('.tabEl.vis').hide().removeClass('vis');
		}
		if((oldWindowWidth > 767) && (windowWidth < 768)) {
			jQuery('.tabNavEl').removeClass('active');
			jQuery('.tabHead').removeClass('active');
			jQuery('.tabEl.vis').hide().removeClass('vis');
		}
	},100)
});
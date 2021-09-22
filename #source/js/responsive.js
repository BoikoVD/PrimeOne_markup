//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var headerLang=$('.header-top-lang');
		var headerNav=$('.header-bottom-menu');
	if(w<767){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo('.header-top');
		}
	}

	if(w<767){
		if(!headerNav.hasClass('done')){
			headerNav.addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($(headerNav), function(index, val){
			if($(this).hasClass('header-bottom-menu_right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();
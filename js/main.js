$(document).ready(function(){
	$('.menuBar').hover(function(){
		$(this).attr('src', 'images/menuA.png');
	},function(){
		$(this).attr('src', 'images/menu.png');
	});

	$('.menuBar').click(function(e){
		e.preventDefault();
		$('.navHide').slideToggle('slow');	
	});

	$('.navHide').click(function(){
		$('.navHide').slideToggle('slow');	
	});

	$('.hover').hover(function(){
		$(this).css('backgroundColor', '#cdcdcd');
		$('.link').css('color', '#123');
	},function(){
		$(this).css('backgroundColor', '#123');
		$('.link').css('color', '#efefef');
	});

	$('.hover2').hover(function(){
		$(this).css('backgroundColor', '#cdcdcd');
		$('.link2').css('color', '#123');
	},function(){
		$(this).css('backgroundColor', '#123');
		$('.link2').css('color', '#efefef');
	});
	$('.hover3').hover(function(){
		$(this).css('backgroundColor', '#cdcdcd');
		$('.link3').css('color', '#123');
	},function(){
		$(this).css('backgroundColor', '#123');
		$('.link3').css('color', '#efefef');
	});
	$('.hover4').hover(function(){
		$(this).css('backgroundColor', '#cdcdcd');
		$('.link4').css('color', '#123');
	},function(){
		$(this).css('backgroundColor', '#123');
		$('.link4').css('color', '#efefef');
	});
	$('.hover5').hover(function(){
		$(this).css('backgroundColor', '#cdcdcd');
		$('.link5').css('color', '#123');
	},function(){
		$(this).css('backgroundColor', '#123');
		$('.link5').css('color', '#efefef');
	});
});
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
});
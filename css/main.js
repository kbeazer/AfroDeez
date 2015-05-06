$(document).ready(function(){
	console.log('Im working....kind of....')
	$('.menuBar').hover(function(){
		$(this).attr('src', 'images/menuA.png');
	},function(){
		$(this).attr('src', 'images/menu.png');
	});

	$('.menuSlide').click(function(e){
		e.preventDefault();

		if($('featImage img').is(':visible')){
			$('featImage img').hide();
		}
		else{
			$('featImage img').show();
		}
		// $('.navHide').slideToggle('slow');	
	});
});
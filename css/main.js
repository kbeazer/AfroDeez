$(document).ready(function(){
	$('.menuBar').hover(function(){
		$(this).attr('src', 'images/menuA.png');
		console.log('hover In!!!!!');
	},function(){
		$(this).attr('src', 'images/menu.png');
		console.log('hover Out!!!!!');
	})

	$('.menuSlide').click(function(e){
		e.preventDefault();
		$('.navHide').slideToggle('slow');
		console.log('Im working bitches!!!!!');
	})
});
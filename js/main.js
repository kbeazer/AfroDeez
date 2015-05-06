$(document).ready(function(){
	$('.menuBar').hover(function(){
		$(this).attr('src', 'images/menuA.png');
	},function(){
		$(this).attr('src', 'images/menu.png');
	})
});
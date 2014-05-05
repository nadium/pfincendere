$(document).ready(function() {
	/* MENU HOVER
	************************************************/
	$('#menu-guy div').hover(
		function() {
			$('#circle-guy').addClass('hover');
		},function(){
			$('#circle-guy').removeClass('hover');
		}
	);
	$('#menu-stuff div').hover(
		function() {
			$('#circle-stuff').addClass('hover');
		},function(){
			$('#circle-stuff').removeClass('hover');
		}
	);
	$('#menu-cat div').hover(
		function() {
			$('#circle-cat').addClass('hover');
		},function(){
			$('#circle-cat').removeClass('hover');
		}
	);


	/* One page Scroll
	************************************************/
	$(".main").onepage_scroll();

	/* MENU Click
	************************************************/
	$('#menu-stuff div').click(function() {
		$(".main").moveDown();
	});
	
	$('#circle-stuff').click(function() {
		$(".main").moveDown();
	});

	

});
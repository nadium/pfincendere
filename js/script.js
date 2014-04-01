$(document).ready(function() {
	$('#menu-guy a').hover(
		function() {
			$('#circle-guy').addClass('hover');
		},function(){
			$('#circle-guy').removeClass('hover');
		}
	);
	$('#menu-stuff a').hover(
		function() {
			$('#circle-stuff').addClass('hover');
		},function(){
			$('#circle-stuff').removeClass('hover');
		}
	);
	$('#menu-cat a').hover(
		function() {
			$('#circle-cat').addClass('hover');
		},function(){
			$('#circle-cat').removeClass('hover');
		}
	);
});
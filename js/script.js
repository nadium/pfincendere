$(document).ready(function() {

	$("nav ul li a").hover(
	  function () {
	    $(this).addClass("hover");
	  },
	  function () {
	    $(this).removeClass("hover");
	  }
	);

	$("nav ul li a").click(function() {
		 $(this).addClass("selected");
	});
});

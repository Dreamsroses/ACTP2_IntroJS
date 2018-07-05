$(document).ready(function(){
	$('.img').on('click', function(){
		console.log(this);
		$(this).toggleClass("img--color");
	});
});
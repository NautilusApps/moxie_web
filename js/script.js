$(function() {

	 var player=$f($('.vim')[0]);

	$(".play-btn").click(function(){
		$("#modal").removeClass('modal-hide').addClass('modal-show');
	   
    player.api('play');
	});
	$(".modal-bg").click(function(){
		$("#modal").removeClass('modal-show').addClass('modal-hide');
		player.api('pause');
	});
});
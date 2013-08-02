$(function() {

	$(".play-btn").click(function(){
		event.preventDefault();
		$("#modal").removeClass('modal-hide').addClass('modal-show');
         
	});
	$(".modal-bg").click(function(){
		$("#modal").removeClass('modal-show').addClass('modal-hide');
		$('#VidPlayer').get(0).stopVideo();
	});
});
$(function() {

	$(".play-btn").click(function(){
		event.preventDefault();
		$("#modal").removeClass('modal-hide').addClass('modal-show');
         $("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});
	$(".modal-bg").click(function(){
		$("#modal").removeClass('modal-show').addClass('modal-hide');
		$('#VidPlayer').get(0).stopVideo();
	});
});
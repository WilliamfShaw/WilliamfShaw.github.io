$(function () {
	$('.about').on('click', renderAbout);
});

function renderAbout() {
	$('.info-container').empty();
	$('.info-container').css('visibility', 'visible');
}
$(document).ready(function () {
	$('.races').click(function () {
		$('.guide-topics li').removeClass('active');
		$(this).addClass('active');
		$('.guide-page').hide()
			.load('/gameguidepages/races.html')
			.fadeIn();
	});

	$('.professions').click(function () {
		$('.guide-topics li').removeClass('active');
		$(this).addClass('active');
		$('.guide-page').hide()
			.load('/gameguidepages/professions.html')
			.fadeIn();
	});

	$('.game-mechanics').click(function () {
		$('.guide-topics li').removeClass('active');
		$(this).addClass('active');
		$('.guide-page').hide()
			.load('/gameguidepages/gamemechanics.html')
			.fadeIn();
	});
});
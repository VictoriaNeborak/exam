
$(document).ready(function () {
	$('.ba-top-content__slider').bxSlider({
		auto: true,
		stopAutoOnClick: true
	});

	$('[data-toggle="datepicker"]').datepicker({
		autoHide: true,
		zIndex: 2048,
		format: "dd/mm/yyyy",
		language: "ru-RU"
	});

	var $map = $('#map');
	// The location of Kremenchuk
	var Kremenchuk = { lat: 49.063618, lng: 33.402771 };

	// The map, centered at Kremenchuk
	var map = new google.maps.Map(
		$map[0],
		{ zoom: 18, center: Kremenchuk });

	// The marker, positioned at Kremenchuk
	var marker = new google.maps.Marker({
		position: Kremenchuk, 
		map: map,
		title: 'Kremen',
		animation: google.maps.Animation.BOUNCE,
	});
});
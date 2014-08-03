var palette = [
	'rgb(200, 42,102)', 'rgb(232,157, 52)', 'rgb(206, 98,195)', 'rgb(178,223, 75)', 'rgb( 97,223,181)', 'rgb(255,135, 83)', 'rgb(255,255,111)',
	'rgb(223, 38, 65)', 'rgb(185,202,246)', 'rgb(217,142,  0)', 'rgb(255,255,  1)', 'rgb( 70,138,126)', 'rgb(255,189,211)', 'rgb(161, 38,148)',
	'rgb( 88,150, 62)', 'rgb(237,185, 52)', 'rgb( 85, 78,148)', 'rgb(255,198,187)', 'rgb(128,128,  0)', 'rgb(128 , 0, 64)', 'rgb(255,255,195)'
];

function getPaletteColor(index) {
	index = ko.unwrap(index);
	return palette[index % palette.length];
}

$(function() {
	var game = ko.observable(new Game('?', '?', []));
	Games.load('x').then(function(result) {
		game(result);
	});
	ko.applyBindings({
		game: game,
		pref: {
			instructions: ko.observable(false),
			grid:         ko.observable(true),
			rektCoords:   ko.observable(true),
			refs:         ko.observable(false),
		},
		getPaletteColor: getPaletteColor
	});
});
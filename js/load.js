var palette = [
	'rgb(200, 42,102)', 'rgb(232,157, 52)', 'rgb(206, 98,195)', 'rgb(178,223, 75)', 'rgb( 97,223,181)', 'rgb(255,135, 83)', 'rgb(255,255,111)',
	'rgb(223, 38, 65)', 'rgb(185,202,246)', 'rgb(217,142,  0)', 'rgb(255,255,  1)', 'rgb( 70,138,126)', 'rgb(255,189,211)', 'rgb(161, 38,148)',
	'rgb( 88,150, 62)', 'rgb(237,185, 52)', 'rgb( 85, 78,148)', 'rgb(255,198,187)', 'rgb(128,128,  0)', 'rgb(128 , 0, 64)', 'rgb(255,255,195)'
];

function ignoreId(id) {
	return id === "id" || id === "desc";
}

function parseHierarchy(parent, data, parseChildFn) {
	var children = [];
	ko.utils.objectForEach(data, function(childName, childData) {
		if (ignoreId(childName)) return;
		children.push(parseChildFn(parent, childName, childData));
	});
	ko.utils.arrayPushAll(parent.children, children);
}

function parseGame(data) {
	var game = new Game(data.game, data.game_name, new Rect(data.bounds));
	parseHierarchy(game, data.coords, parseCategory);
	return game;
}

function parseCategory(game, categName, categData) {
	var category = new Category(game, categData.id, categName);
	parseHierarchy(category, categData, parseMenu);
	return category;
}

function parseMenu(category, menuName, menuData) {
	var menu = new Menu(category, menuData.id, menuName);
	parseHierarchy(menu, menuData, parseButton);
	return menu;
}

function parseButton(menu, buttonName, buttonData) {
	var refs = [],
		rawRefs = buttonData.ref;
	rawRefs = typeof rawRefs === "string" ? [rawRefs] : rawRefs || [];
	ko.utils.arrayForEach(rawRefs, function(rawRef) {
		var ref = parseRef(menu.root, rawRef);
		ref && refs.push(ref);
	});
	var button = new Button(menu, buttonData.id, buttonName, new Rect(buttonData.coords), refs);
	return button;
}

function parseRef(game, ref) {
	if (ref === "NEW") {
		return Ref.NEW;
	} else if (ref === "END") {
		return Ref.END;
	} else if (/^\s*$/.test(ref)) {
		return null;
	} else {
		return new MenuRef(game, ref);
	}
}

$(function() {
	var input = {
		game: game,
		game_name: game_name,
		bounds: bounds,
		coords: coords,
	}
	ko.applyBindings({
		game: ko.observable(parseGame(input)),
		pref: {
			instructions: ko.observable(false),
			grid:         ko.observable(true),
			rektCoords:   ko.observable(true),
			refs:         ko.observable(false),
		},
		getPaletteColor: function(index) {
			index = ko.utils.unwrapObservable(index);
			return palette[index % palette.length];
		}
	});
});
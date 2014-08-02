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
	var refs = [];
	ko.utils.arrayForEach(buttonData.refs || [], function(rawRef) {
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

function testParse() {
	var input = {
		game: game,
		game_name: game_name,
		bounds: bounds,
		coords: coords,
	}
	return parseGame(input);
}
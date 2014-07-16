'use strict';

/* Models */
var palette = [
	'rgb(200, 42,102)', 'rgb(232,157, 52)', 'rgb(206, 98,195)', 'rgb(178,223, 75)', 'rgb( 97,223,181)', 'rgb(255,135, 83)', 'rgb(255,255,111)',
	'rgb(223, 38, 65)', 'rgb(185,202,246)', 'rgb(217,142,  0)', 'rgb(255,255,  1)', 'rgb( 70,138,126)', 'rgb(255,189,211)', 'rgb(161, 38,148)',
	'rgb( 88,150, 62)', 'rgb(237,185, 52)', 'rgb( 85, 78,148)', 'rgb(255,198,187)', 'rgb(128,128,  0)', 'rgb(128 , 0, 64)', 'rgb(255,255,195)'
];

var State = {
	HIT:	{ id: 'HIT',	next: null },
	MISS:	{ id: 'MISS',	next: null },
	IGNORE:	{ id: 'IGNORE',	next: null },
};
State.HIT.next		= State.MISS;
State.MISS.next		= State.IGNORE;
State.IGNORE.next	= State.HIT;

function Rectangle(x1, y1, x2, y2) {
	if (angular.isArray(x1)) {
		return Rectangle.apply(this, x1);
	}

	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
};
angular.extend(Rectangle.prototype, {
	w: function () {
		return this.x2 - this.x1 + 1;
	},
	h: function () {
		return this.y2 - this.y1 + 1;
	},
	p1: function () {
		return [this.x1, this.y1];
	},
	p2: function () {
		return [this.x2, this.y2];
	},
	toXYWH: function () {
		return [this.x1, this.y1, this.w(), this.h()];
	}
});

function Game(id, data) {
	this.id = data.id;
	this.name = data.name;
	this.bounds = new Rectangle(data.bounds);

	this.categories = [];
	this.categoryById = {};
	for (var name in data.coords) {
		var category = new Category(this, name, data.coords[name]);
		this.categories.push(this.categoryById[category.id] = category);
	}
};
angular.extend(Game.prototype, {
	getCategory: function (categoryId) {
		return this.categoryById[categoryId];
	},
	getMenu: function (menuId) {
		var category = this.getCategory(menuId.substr(0, 1));
		return category && category.getMenu(menuId.substr(1));
	},
	getButton: function (buttonId) {
		var category = this.getCategory(menuId.substr(0, 1));
		return category && category.getButton(menuId.substr(1));
	}
});

function Category(game, name, data) {
	this.game = game;
	this.id = data.id;
	this.name = name;

	this.menus = [];
	this.menuById = {};
	for (var name in data) {
		if (name === 'id') continue;
		var menu = new Menu(this, name, data[name]);
		this.menus.push(this.menuById[menu.id] = menu);
	}
};
angular.extend(Category.prototype, {
	getId: function () {
		return this.id;
	},
	getGame: function () {
		return this.game;
	},
	getTitle: function () {
		return this.name;
	},
	getMenu: function (menuId) {
		return this.menuById[menuId];
	},
	getButton: function (buttonId) {
		var menu = this.getMenu(buttonId.substr(0, 1));
		return menu && menu.getButton(buttonId.substr(1));
	}
});

function Stateful() {
	this.state = State.IGNORE;
}
angular.extend(Stateful.prototype, {
	isHit: function () {
		return this.state === State.HIT;
	},
	isMiss: function () {
		return this.state === State.MISS;
	},
	isIgnore: function () {
		return this.state === State.IGNORE;
	},
	setState: function(newState) {
		this.state = newState;
	},
	setHit: function () {
		this.setState(State.HIT);
	},
	setMiss: function () {
		this.setState(State.MISS);
	},
	setIgnore: function () {
		this.setState(State.IGNORE);
	},
	nextState: function () {
		this.setState(this.state.next);
	}
});

function Menu(category, name, data) {
	Stateful.apply(this, arguments);
	this.category = category;
	this.id = data.id;
	this.name = name;

	var colorIdx = 0;
	this.buttons = [];
	this.buttonById = {};
	for (var name in data) {
		if (name === 'id') continue;
		var button = new Button(this, name, data[name]);
		button.color = palette[colorIdx++ % palette.length];
		this.buttons.push(this.buttonById[button.id] = button);
	}
};
Menu.prototype = Object.create(Stateful.prototype);
angular.extend(Menu.prototype, {
	getId: function () {
		return this.category.getId() + this.id;
	},
	getGame: function () {
		return this.category.getGame();
	},
	getTitle: function () {
		return this.category.getTitle() + " \u2192 " + this.name;
	},
	getImage: function () {
		return '/data/' + this.getGame().id + '/screens/' + this.category.name + '/' + this.name + '.png';
	},
	getButton: function (buttonId) {
		return this.buttonById[buttonId];
	},
	setState: function (newState) {
		Stateful.prototype.setState.apply(this, arguments);
		angular.forEach(this.buttons, function(button) {
			button.setState(newState);
		});
	}
});

function Button(menu, name, data) {
	Stateful.apply(this, arguments);
	this.menu = menu;
	this.id = data.id;
	this.name = name;
	this.coords = new Rectangle(data.coords);
	this.color = null;
	this.ref = angular.isArray(data.ref) ? data.ref : [data.ref];
};
Button.prototype = Object.create(Stateful.prototype);
angular.extend(Button.prototype, {
	getId: function () {
		return this.menu.getId() + this.id;
	},
	getGame: function () {
		return this.menu.getGame();
	},
	getTitle: function () {
		return this.menu.getTitle() + " \u2192 " + this.name;
	},
	getRefs: function () {
		if (this._refs) return this._refs;
		var refs = [];
		angular.forEach(this.ref, function(ref) {
			if (ref === "NEW") {
				refs.push(NewRef);
			} else if (ref === "END") {
				refs.push(EndRef);
			} else if (/^\s*$/.test(ref)) {
				// Ignore
			} else {
				var menu = this.getGame().getMenu(ref);
				if (menu) {
					refs.push(new MenuRef(menu));
				}
			}
		}, this);
		return this._refs = refs;
	}
});

function Ref(name, link, title, refClass) {
	this.name = name;
	this.link = link || "";
	this.title = title || "";
	this.refClass = refClass || "";
};
var NewRef = new Ref("NEW", "", "Unimplemented (TODO)", "NEW");
var EndRef = new Ref("END", "", "End of flow", "END");

function MenuRef(menu) {
	Ref.call(this, menu.name, "#" + menu.getId(), menu.getTitle());
	this.menu = menu;
};
MenuRef.prototype = Object.create(Ref.prototype);

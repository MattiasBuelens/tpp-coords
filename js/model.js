var State2 = {
	HIT:    { id: 'HIT',    checked: true,  indeterminate: false },
	MISS:   { id: 'MISS',   checked: false, indeterminate: true  },
	IGNORE: { id: 'IGNORE', checked: false, indeterminate: false },
};
State2.HIT.next    = State2.MISS;
State2.MISS.next   = State2.IGNORE;
State2.IGNORE.next = State2.HIT;

var Rect = function(x1, y1, x2, y2) {
	if (x1.length) return Rect.apply(this, x1);
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
};
ko.utils.extend(Rect.prototype, {
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
	}
});

var Node = function(parent, id) {
	this.parent = parent || null;
	this.root = this.parent ? this.parent.root : this;
	this.id = id;
	this.state = ko.observable(State2.IGNORE);

	this.fullId = (this.parent ? this.parent.fullId : "") + id;
	// Individual checkers
	this.isState = {};
	for (var stateId in State2) {
		this.isState[stateId] = ko.computed(this._stateComparator(State2[stateId]), this);
	}
};
ko.utils.extend(Node.prototype, {
	nextState: function() {
		return this.state(this.state().next);
	},
	_stateComparator: function(compareState) {
		return function() {
			return this.state() === compareState;
		};
	},
});

var Parent = function(parent, id) {
	Node.call(this, parent, id);
	this.children = ko.observableArray([]);
	
	this.state.subscribe(function(newState) {
		ko.utils.arrayForEach(this.children(), function(child) {
			child.state(newState);
		});
	}, this);
	this.leafs = ko.computed(this._getLeafs, this);
};
Parent.prototype = Object.create(Node.prototype);
ko.utils.extend(Parent.prototype, {
	getChild: function(id) {
		var child = this._getChild(id.substr(0, 1)),
			rest = id.substr(1);
		return child && (rest ? child.getChild(rest) : child);
	},
	_getChild: function(id) {
		return ko.utils.arrayFirst(this.children(), function(child) {
			return child.id === id;
		});
	},
	_getLeafs: function() {
		var children = this.children(), res;
		if (children.length && children[0] instanceof Parent) {
			res = [];
			ko.utils.arrayForEach(children, function(child) {
				res.push.apply(res, child.leafs());
			});
		} else {
			res = children.slice();
		}
		return res;
	},
});

var Game = function(id, name, bounds) {
	Parent.call(this, null, "");
	this.id = id;
	this.name = name;
	this.bounds = bounds;

	// Buttons grouped by state
	this.buttons = {};
	this.buttonIDs = {};
	for (var stateId in State2) {
		this.buttons[stateId] = ko.computed(this._buttonFilter(State2[stateId]), this);
		this.buttonIDs[stateId] = ko.computed(this._buttonIDs(this.buttons[stateId]));
	}
};
Game.prototype = Object.create(Parent.prototype);
ko.utils.extend(Game.prototype, {
	_buttonFilter: function(filterState) {
		return function() {
			return ko.utils.arrayFilter(this.leafs(), function(child) {
				return child.isState[filterState.id]();
			});
		};
	},
	_buttonIDs: function(buttonsObservable) {
		return function() {
			return ko.utils.arrayMap(buttonsObservable(), function(button) {
				return button.fullId;
			});
		};
	},
});

var Category = function(game, id, name) {
	Parent.call(this, game, id);
	this.name = name;
	this.title = this.name;
};
Category.prototype = Object.create(Parent.prototype);

var Menu = function(category, id, name, desc) {
	Parent.call(this, category, id);
	this.name = name;
	this.desc = desc || null;
	this.title = this.parent.name + " \u203A " + this.name;
};
Menu.prototype = Object.create(Parent.prototype);

var Button = function(menu, id, name, coords, refs) {
	Node.call(this, menu, id);
	this.name = name;
	this.coords = coords;
	this.refs = refs;
	
	this.title = this.parent.name + " \u203A " + this.name;
};
Button.prototype = Object.create(Node.prototype);

var Ref = function(name, link, title, refClass) {
	this.name = ko.observable(name);
	this.link = ko.observable(link || "");
	this.title = ko.observable(title || "");
	this.refClass = ko.observable(refClass || "");
};
Ref.NEW = new Ref("NEW", "", "Unimplemented (TODO)", "NEW");
Ref.END = new Ref("END", "", "End of flow", "END");

function MenuRef(game, menuId) {
	this.menu = ko.computed(function() {
		return game.getChild(menuId);
	});
	this.name = this._menuGetter("name");
	this.link = this._menuGetter("fullId");
	this.title = this._menuGetter("title");
};
MenuRef.prototype = Object.create(Ref.prototype);
ko.utils.extend(MenuRef.prototype, {
	_menuGetter: function(prop) {
		return ko.computed(function() {
			var menu = this.menu();
			return menu && menu[prop];
		}, this);
	},
});

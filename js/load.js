var Games = (function(window, document, $) {

	var loader = {
		loading: {},
		loadGame: function(gameId) {
			var deferred = this.loading[gameId], s;
			if (!deferred) {
				deferred = this.loading[gameId] = $.Deferred();
				currentLoadId = gameId;
				s = document.createElement('script');
				s.src = 'data/' + gameId + '/data.js';
				s.onerror = function(e) {
					var e = new Error("Invalid game id '" + game + "'");
					deferred.reject(e);
				};
				document.head.appendChild(s);
			}
			return deferred.promise();
		},
		onLoad: function(data) {
			var game = parser.parseGame(data);
			this.loading[game.id].resolve(game);
		}
	};
	window.loadGame = loader.onLoad.bind(loader);
	
	var parser = {
		ignoreId: function(id) {
			return id === "id" || id === "desc";
		},
		parseHierarchy: function(parent, data, parseChildFn) {
			var children = [], childData;
			for (var childName in data) {
				if (this.ignoreId(childName)) continue;
				childData = data[childName];
				children.push(parseChildFn.call(this, parent, childName, childData));
			}
			ko.utils.arrayPushAll(parent.children, children);
		},
		parseGame: function(data) {
			var game = new Game(data.game, data.game_name, new Rect(data.bounds));
			this.parseHierarchy(game, data.coords, this.parseCategory);
			return game;
		},
		parseCategory: function(game, categName, categData) {
			var category = new Category(game, categData.id, categName);
			this.parseHierarchy(category, categData, this.parseMenu);
			return category;
		},
		parseMenu: function(category, menuName, menuData) {
			var menu = new Menu(category, menuData.id, menuName);
			this.parseHierarchy(menu, menuData, this.parseButton);
			return menu;
		},
		parseButton: function(menu, buttonName, buttonData) {
			var refs = [],
				rawRefs = buttonData.ref;
			rawRefs = typeof rawRefs === "string" ? [rawRefs] : rawRefs || [];
			ko.utils.arrayForEach(rawRefs, function(rawRef) {
				var ref = this.parseRef(menu.root, rawRef);
				ref && refs.push(ref);
			}.bind(this));
			var button = new Button(menu, buttonData.id, buttonName, new Rect(buttonData.coords), refs);
			return button;
		},
		parseRef: function(game, ref) {
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
	};
	
	return {
		load: loader.loadGame.bind(loader),
		parse: parser.parseGame.bind(parser)
	};

})(window, document, jQuery);
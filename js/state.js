var defaultGame = 'x';

var State = (function() {
	var gameId = ko.observable(defaultGame),
		game = ko.observable(null),
		coords = ko.observable([]),
		image = ko.observable('');

	var _State = {
		split: undefined,
		parsed: {},

		replaceState: function() {
			window.history.replaceState(this.getState(), null, this.getUrl() + window.location.hash);
		},
		getState: function() {
			return {
				gameId: this.getGameId(),
				hit: game() && game().buttonIDs.HIT().slice(0),
				ignore: game() && game().buttonIDs.IGNORE().slice(0),
				coords: this.getCoords(),
				image: this.getImage()
			};
		},
		getGameId: function() {
			return gameId();
		},
		getCoords: function() {
			return coords.slice(0);
		},
		getImage: function() {
			return image();
		},
		getUrl: function(state) {
			var currentState = this.getState();
			if (state === undefined)
				state = currentState;
			else
				for (var i in currentState)
					if (state[i] === undefined)
						state[i] = currentState[i];

			return '?' + [                        state.gameId,
				this._join('+', Encode.groupStars(state.hit.sort())),
				this._join('-', Encode.groupStars(state.miss).sort())),
				this._join(';',                   state.coords),
				this._join('@',                   state.image),
			].join('');
		},
		_split: function(s) {
			return s === undefined ? [] : s.split(',');
		},
		_join: function(prefix, s) {
			var joined = ('string' === typeof s) ? s : s.join(',');
			return s.length === 0 ? '' : prefix + joined;
		},

		setSplitFromUrl: function(search) {
			return this.split = this.splitUrl(search);
		},
		setAllFromUrl: function(search) {
			if (this.split === undefined)
				this.setSplitFromUrl(search);
			this.parseAllSplit();
			return this.setAll(this.parsed);
		},
		splitUrl: function(search) {
			if (search === undefined)
				search = decodeURIComponent(window.location.search);

			if (search === '')
				window.location.search = '?' + this.getGameId();

			// '?hg+a,b-c,d;x,y@z'
			//                      ? hg      + a,b           - c,d           ; x,y          @ z
			//                      ^ 1--     ^ 2-------      ^ 3-------      ^ 4------      ^ 5--
			var m = search.match(/^\?(\w+)(?:\+([\w,.*]+))?(?:-([\w,.*]+))?(?:;(\d+,\d+))?(?:@(\w+))?$/);

			if (!m)
				throw 'Invalid query string: ' + search;

			return {
				gameId:    m[1],
				hit:       m[2],
				miss:      m[3],
				coords:    m[4],
				image:     m[5],
			};
		},
		_identity: function(v) { return v; },
		_ungroup_split: function(v) { return Encode.ungroup(this._split(v)); },
		parse: {
			gameId:        '_identity',
			checked:       '_ungroup_split',
			indeterminate: '_ungroup_split',
			coords:        '_identity',
			image:         '_identity',
		},
		parseSplit: function(k, m) {
			return this.parsed[k] = this[this.parse[k]](this.split[k]);
		},
		parseAllSplit: function() {
			for (var k in this.parse)
				if (!(k in this.parsed))
					this.parseSplit(k);
			return this.parsed;
		},
		setAll: function(state) {
			this.setAll1(state);
			this.setAll2(state);
			this.setAll3(state);
		},
		setAll1: function(state) {
			this.setGameId(state.game);
		},
		setAll2: function(state) {
			this.setStates(BoxState.HIT,  state.hit);
			this.setStates(BoxState.MISS, state.miss);
			if (state.coords !== undefined) {
				try {
					var r = text2coords(state.coords);
					this.setCoords(r);
				}
				catch (e) {
					console.error(e);
				}
			}
		},
		setAll3: function(state) {
			this.setImage(state.image);
			this.parsed = undefined;
		},

		setGameId: function(newGameId) {
			gameId(newGameId);
		},
		setGame: function(newGame) {
			game(newGame);
			this.setGameId(newGame.id);
		},
		setCoords: function(newCoords) {
			if (newCoords.length === 0) {
				coords(newCoords);
				return;
			}

			if (newCoords[0] < bounds[0] || newCoords[0] > bounds[2] || newCoords[1] < bounds[1] || newCoords[1] > bounds[3])
				throw 'Coordinate out of bounds. Bounds are from ' +
					bounds[0] + ',' + bounds[1] + ' to ' + bounds[2] + ',' + bounds[3] + '.';
			coords(newCoords);
		},
		setImage: function(newImage) {
			image(newImage || '');
		},
		setStates: function(state, ids) {
			for (var i = 0; i < ids.length; i ++)
				this.setState(state, ids[i]);
		},
		setState: function(state, id) {
			game().getChild(id).state(state);
		},
		rotateState: function(id) {
			game().getChild(id).nextState();
		},
		updateState: function(recomposite) {
			this.replaceState();
			if (recomposite)
				recomposite_main();
			list_overlaps(this.getCoords());
		},
	};

	var State = {
		getCoords:     _State.getCoords.bind(_State),
		getImage:      _State.getImage.bind(_State),
		getUrl:        _State.getUrl.bind(_State),

		setSplitFromUrl:   _State.setSplitFromUrl.bind(_State),
		parseSplit:        _State.parseSplit.bind(_State),

		replaceState:  _State.replaceState.bind(_State),
		setAll:        _State.setAll.bind(_State),
		setAllFromUrl: _State.setAllFromUrl.bind(_State),
		setGame:       _State.setGame.bind(_State),
		setGameId:     _State.setGameId.bind(_State),
		setCoords:     _State.setCoords.bind(_State),
		setImage:      _State.setImage.bind(_State),
		setState:      _State.setState.bind(_State),
		setStates:     _State.setStates.bind(_State),
		rotateState:   _State.rotateState.bind(_State),
		rotateStates:  _State.rotateStates.bind(_State),
	};

	return State;
})();

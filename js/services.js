'use strict';

/* Services */

angular.module('tppCoords.services', []).
factory('tppGames', ['$http', function ($http) {
	return {
		getGames: function () {
			return $http.get('/data/games.json');
		},
		getGame: function (gameId) {
			return $http.get('/data/' + gameId + '/data.json', {
				transformResponse: function(data) {
					return new Game(gameId, angular.fromJson(data));
				}
			});
		}
	};
}]);

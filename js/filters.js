'use strict';

/* Filters */

angular.module('tppCoords.filters', []).
filter('point', [function() {
	return function(point) {
		return point[0] + "," + point[1];
	};
}]);

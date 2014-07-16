'use strict';

/* Directives */

angular.module('tppCoords.directives', []).
directive('tppInd', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.prop('indeterminate', true);
		}
	}
}).
directive('tppNoClick', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.on('click', function(ev) {
				ev.preventDefault();
			});
		}
	}
}).
directive('tppRotate', ['$parse', function($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var getter = $parse(attrs.tppRotate);

			// Render
			function render() {
				var model = getter(scope);
				element.prop('checked', model.isHit());
				element.prop('indeterminate', model.isMiss());
			}
			scope.$watch(function() {
				return getter(scope).state;
			}, render);

			// Update model
			element.on('change', function() {
				scope.$apply(function() {
					var model = getter(scope);
					model.nextState();
				});
			});
		}
	};
}]);

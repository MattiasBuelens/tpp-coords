'use strict';


// Declare app level module which depends on filters, and services
angular.module('tppCoords', [
	'tppCoords.filters',
	'tppCoords.services',
	'tppCoords.directives',
	'tppCoords.controllers'
]).
config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

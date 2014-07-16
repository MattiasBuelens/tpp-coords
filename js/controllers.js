'use strict';

/* Controllers */

function GameController($scope, tppGames) {
  	$scope.games = {};
  	$scope.gameId = undefined;
  	$scope.game = undefined;

  	tppGames.getGames().success(function (games) {
  		$scope.games = games;
  	});''

  	$scope.$watch('games', function (games) {
  		if($scope.gameId && games[$scope.gameId]) return;
  		for(var gameId in games)  {
  			$scope.gameId = gameId;
  			break;
  		}
  	});
  	$scope.$watch('gameId', function (gameId) {
  		if(!gameId) return;
  		tppGames.getGame(gameId).success(function (game) {
  			$scope.game = game;
  		});
  	});
};

function MenuController($scope) {

}

function ButtonController($scope) {

}

angular.module('tppCoords.controllers', []).
controller('GameController', ['$scope', 'tppGames', GameController]).
controller('MenuController', ['$scope', MenuController]).
controller('ButtonController', ['$scope', ButtonController]);
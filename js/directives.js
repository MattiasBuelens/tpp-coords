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
}]).
directive('tppCanvasImg', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var canvas = element[0],
				ctx = canvas.getContext('2d'),
				currImg = null;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;

			// Render
			function render(imgUrl) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				if (imgUrl) {
					var img = new Image();
					currImg = img;
					img.onload = function() {
						if (currImg === img) {
							ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
						}
					};
					img.src = imgUrl;
				} else {
					currImg = null;
				}
			}
			scope.$watch(attrs.tppCanvasImg, render);
		}
	}
}).
directive('tppCanvasGrid', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var canvas = element[0],
				ctx = canvas.getContext('2d');

			function render() {
				var scale = scope.getGameScale(canvas),
					cw = scope.getGameWidth(),
					ch = scope.getGameHeight(),
					fontSize = 22,
					left = scale, top = fontSize - scale / 2;

				ctx.strokeStyle = ctx.fillStyle = '#888';
				ctx.lineWidth = 1;
				ctx.font = fontSize + 'px Alto Pro';
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				for (var x = 64; x <= cw; x += 64) {
					ctx.textAlign = 'right';
					ctx.fillText(x, scale * (x - 1), top);
					ctx.moveTo     (scale * x + 0.5, 0);
					ctx.lineTo     (scale * x + 0.5, scale * ch);

					ctx.textAlign = 'left';
					ctx.fillText(x, left,            scale * (x - 1));
					ctx.moveTo     (0,               scale * x + 0.5);
					ctx.lineTo     (scale * cw,      scale * x + 0.5);
				}
				ctx.fillText  ('0', left,            top);
				ctx.stroke();
			}
			scope.$watch(function() {
				scope.getGameScale(canvas);
			}, render);
		}
	}
});

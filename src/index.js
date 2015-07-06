'use strict';

module.exports = angular.module('ng-if-bootstrap-grid', [])
	.directive('ngIfBootstrapGrid', ['ngIfDirective', '$window', function(ngIfDirective, $window) {
		var ngIf = ngIfDirective[0];
		return {
			transclude: ngIf.transclude,
			priority: ngIf.priority,
			terminal: ngIf.terminal,
			restrict: ngIf.restrict,
			link: function($scope, $element, $attr) {

				var yourCustomValue = $window.innerWidth === undefined ? $window.clientWidth : $window.innerWidth;
				angular.element($window).bind('resize', function() {
					yourCustomValue = $window.innerWidth === undefined ? $window.clientWidth : $window.innerWidth;
					$scope.$apply();
				});

				$attr.ngIf = function() {
					var render = false;
					var splitArr = $attr.ngIfBootstrapGrid.split(/[, ]+/g); // allows runtime changes

					for(var i = 0; i < splitArr.length; i++) {
						switch(splitArr[i].toLowerCase()) {
							case 'xs':
								render = yourCustomValue <= 767;
								break;
							case 'sm':
								render = yourCustomValue >= 768 && yourCustomValue <= 991;
								break;
							case 'md':
								render = yourCustomValue >= 992 && yourCustomValue <= 1199;
								break;
							case 'lg':
								render = yourCustomValue >= 1200;
								break;
							default:
								throw 'Unknown bootstrap grid class: ' + splitArr[i];
						}
						if(render === true) {
							break;
						}
					}
					return render;
				};
				ngIf.link.apply(ngIf, arguments);
			}
		};
	}])
	.directive('ngIfNotBootstrapGrid', ['ngIfDirective', '$window', function(ngIfDirective, $window) {
		var ngIf = ngIfDirective[0];
		return {
			transclude: ngIf.transclude,
			priority: ngIf.priority,
			terminal: ngIf.terminal,
			restrict: ngIf.restrict,
			link: function($scope, $element, $attr) {

				var yourCustomValue = $window.innerWidth === undefined ? $window.clientWidth : $window.innerWidth;
				angular.element($window).bind('resize', function() {
					yourCustomValue = $window.innerWidth === undefined ? $window.clientWidth : $window.innerWidth;
					$scope.$apply();
				});

				$attr.ngIf = function() {
					var render = false;
					var splitArr = $attr.ngIfNotBootstrapGrid.split(/[, ]+/g); // allows runtime changes

					for(var i = 0; i < splitArr.length; i++) {
						switch(splitArr[i].toLowerCase()) {
							case 'xs':
								render = yourCustomValue > 767;
								break;
							case 'sm':
								render = yourCustomValue < 768 || yourCustomValue > 991;
								break;
							case 'md':
								render = yourCustomValue < 992 || yourCustomValue > 1199;
								break;
							case 'lg':
								render = yourCustomValue < 1200;
								break;
							default:
								throw 'Unknown bootstrap grid class: ' + splitArr[i];
						}
						if(render === true) {
							break;
						}
					}
					return render;
				};
				ngIf.link.apply(ngIf, arguments);
			}
		};
	}]);

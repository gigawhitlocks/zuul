'use strict';

angular.module('Zuulio.index', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/index', {
	    templateUrl: 'index.html',
	    controller: 'IndexCtrl'
	});
    }])

    .controller('IndexCtrl', ['$scope', function($scope) {
	$scope.stream = "stream";

    }]);

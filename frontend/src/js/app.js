'use strict';

// Declare app level module which depends on views, and components
angular.module('Zuulio', [
  'ngRoute',
  'Zuulio.index'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);

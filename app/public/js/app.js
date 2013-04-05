'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hello', {templateUrl: 'partials/hello.html', controller: HelloCtrl});
    $routeProvider.when('/contribute', {templateUrl: 'partials/contribute.html', controller: ContributeCtrl});
    $routeProvider.otherwise({redirectTo: '/hello'});
  }]);
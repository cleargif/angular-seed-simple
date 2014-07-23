'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  //'ui.bootstrap',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/partials/home.html',
      controller: 'CtrlHome'
    });
    $routeProvider.when('/about', {
      templateUrl: 'views/partials/about.html',
      controller: 'CtrlAbout'
    });
    $routeProvider.when('/contact', {
      templateUrl: 'views/partials/contact.html',
      controller: 'CtrlContact'
    });
    $routeProvider.when('/404', {
      templateUrl: 'views/partials/404.html',
      controller: 'Ctrl404'
    });
    $routeProvider.when('/', {
      redirectTo: '/home'
    });
    $routeProvider.otherwise({
      redirectTo: '/404'
    });
  }
]);

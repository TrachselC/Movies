'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about/:unChiffre', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/films/:chiffre', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'films'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

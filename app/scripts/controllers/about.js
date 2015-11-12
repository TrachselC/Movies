'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('AboutCtrl', function ($scope, $routeParams) {
    var about = this;
    about.unChiffre = $routeParams.unChiffre;
    
/*
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
  });

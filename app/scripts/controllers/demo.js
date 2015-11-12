'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('DemoCtrl', function ($routeParams, data) {
    this.c = $routeParams.chiffre;
    this.data = data;

    this.addMovie = function (){
      data.addMovie(this.input);
    }

  });

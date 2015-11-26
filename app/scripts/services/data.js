'use strict';

/**
 * @ngdoc service
 * @name moviesApp.data
 * @description
 * # data
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('data', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    //code pour charger depuis localstorage

//setItem --> strigify --> json parse

    this.movies = [];

   // this.addMovie = function (el){
    //  this.movies.push(el);
      
      //save to localstorage 
  //  };
  });

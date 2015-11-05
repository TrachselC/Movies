'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('MainCtrl', function () {
    var main = this;
    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    main.messageCool = function(){
      //ajouter texte à la liste
      var main = this;
      main.awesomeThings.push(main.message);
      //main.message = 'Hello ' + main.message + ' super cool !';
    };

    main.isMessageVisible = function(){
      return main.message.length % 2 === 0;
    };

    main.deleteElement = function(el, array){
      //supprimer élément de la liste 
      var ind = array.indexOf(el);
      array.splice(ind, 1);
  
      //slice 
      //index of //--> index
    };

    main.message = 'Hello';
  });

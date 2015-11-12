'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('MainCtrl', function (data) {
    var main = this;
    main.data = data;
    
    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    main.ajouterElement/*messageCool*/ = function(){
      //ajouter texte à la liste
      var main = this;
      main.data.movies.push(main.message);
      //main.message = 'Hello ' + main.message + ' super cool !';
    };

    main.isMessageVisible = function(){
      return 1;
      //return main.message.length % 2 === 0;
    };

    main.deleteElement = function(el, array){
      //supprimer élément de la liste 
      var ind = array.indexOf(el);
      array.splice(ind, 1);
  
    };

    main.message = 'Hello';

    main.mafonctiontri = function(value){
      if(!isNaN(value)){
        return Number(value) % 2 === 0;
      }
      return false;
    };
  });

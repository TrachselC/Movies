'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('MainCtrl', function (data, $http) {
    var main = this;
    main.data = data;
    

    main.getMovies = function(){
      var promise = $http.get('http://amc.ig.he-arc.ch:3003/discover/movie?sort_by=popularity.desc');
      promise.then(function(result){
        //console.log(result);
        main.moviesPopulaire = result.data.results;
      })
    }
    /*data.movies = [
      {
        id:1,
        name:"Matrix",
        detail:"c'est une film trois ptits points."
      }
    ];*/

    main.getMovies();
    
    if(localStorage.getItem('Films')){
        main.data.movies = JSON.parse(localStorage.getItem('Films'));
    }

    main.ajouterElement = function(){
      //ajouter texte à la liste
      var main = this;
      main.data.movies.push({
//        id:main.filmId,
        name:main.filmName,
        detail:main.filmDetail
        });
      //main.message = 'Hello ' + main.message + ' super cool !';
      localStorage.setItem('Films', JSON.stringify(main.data.movies));

    };

    main.isMessageVisible = function(){
      return 1;
      //return main.message.length % 2 === 0;
    };

    main.deleteElement = function(el, array){
      //supprimer élément de la liste 
      var ind = array.indexOf(el);
      array.splice(ind, 1);

      localStorage.setItem('Films', JSON.stringify(main.data.movies));
  
    };

    main.message = 'Hello';

    main.mafonctiontri = function(value){
      if(!isNaN(value)){
        return Number(value) % 2 === 0;
      }
      return false;
    };
  });

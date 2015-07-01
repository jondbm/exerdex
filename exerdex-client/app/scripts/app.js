'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/exercises.html',
        controller: 'ExercisesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/exercises', {
        templateUrl: 'views/exercises.html',
        controller: 'ExercisesCtrl'
      })
      .when('/create/exercise', {
        templateUrl: 'views/exercise-add.html',
        controller: 'ExerciseAddCtrl'
      })
      .when('/exercise/:id', {
        templateUrl: 'views/exercise-view.html',
        controller: 'ExerciseViewCtrl'
      })
      .when('/exercise/:id/edit', {
        templateUrl: 'views/exercise-edit.html',
        controller: 'ExerciseEditCtrl'
      })
      .when('/exercise/:id/delete', {
        templateUrl: 'views/exercise-delete.html',
        controller: 'ExerciseDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ExerciseRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Exercise', function(ExerciseRestangular) {
    return ExerciseRestangular.service('exercise');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

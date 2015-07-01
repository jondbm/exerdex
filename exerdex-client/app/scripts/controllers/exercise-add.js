'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExerciseAddCtrl
 * @description
 * # ExerciseAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExerciseAddCtrl', function (
  $scope,
  $routeParams,
  Exercise,
  $location
) {
  $scope.exercise = {};
  $scope.saveExercise = function() {
    Exercise.post($scope.exercise).then(function() {
      $location.path('/exercises');
    });
  };
});

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExerciseDeleteCtrl
 * @description
 * # ExerciseDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExerciseDeleteCtrl', function (
  $scope,
  $routeParams,
  Exercise,
  $location
) {
  $scope.exercise = Exercise.one($routeParams.id).get().$object;
  $scope.deleteExercise = function() {
    $scope.exercise.remove().then(function() {
      $location.path('/exercises');
    });
  };
  $scope.back = function() {
    $location.path('/exercise/' + $routeParams.id);
  };
});

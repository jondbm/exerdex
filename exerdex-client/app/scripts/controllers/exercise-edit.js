'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExerciseEditCtrl
 * @description
 * # ExerciseEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExerciseEditCtrl', function (
  $scope,
  $routeParams,
  Exercise,
  $location
) {
  $scope.editExercise = true;
  $scope.exercise = {};
  Exercise.one($routeParams.id).get().then(function(exercise) {
    $scope.exercise = exercise;
    $scope.saveExercise = function() {
      $scope.exercise.save().then(function() {
        $location.path('/exercises/');
      });
    };
  });
});

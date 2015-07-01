'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExerciseViewCtrl
 * @description
 * # ExerciseViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ExerciseViewCtrl', function (
  $scope,
  $routeParams,
  Exercise
) {
  $scope.viewExercise = true;
  $scope.exercise = Exercise.one($routeParams.id).get().$object;
});

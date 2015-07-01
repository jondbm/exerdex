'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExercisesCtrl
 * @description
 * # ExercisesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ExercisesCtrl', function (
    $scope,
    Exercise
  ) {
    $scope.exercises = Exercise.getList().$object;
  });

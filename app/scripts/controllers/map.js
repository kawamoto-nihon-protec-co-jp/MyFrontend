'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('MapCtrl', function ($scope,$http) {
        $scope.map = {
            center: {
                latitude: 35.681382,
                longitude: 139.766084
            },
            zoom: 14
        };
    });
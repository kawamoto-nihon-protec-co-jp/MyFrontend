'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('MapCtrl', function ($scope,$http,$rootScope) {
        $scope.map = {
            center: {
                latitude: $rootScope.gpsLatitude,
                longitude: $rootScope.gpsLongitube
            },
            zoom: 14
        };
        $scope.options = {scrollwheel: false};
        $scope.coordsUpdates = 0;
        $scope.dynamicMoveCtr = 0;
        $scope.marker = {
            id: 0,
            coords: {
                latitude: $rootScope.gpsLatitude,
                longitude: $rootScope.gpsLongitube
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    var lat = marker.getPosition().lat();
                    var lon = marker.getPosition().lng();
                    $log.log(lat);
                    $log.log(lon);

                    $scope.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };
        $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
            if (_.isEqual(newVal, oldVal))
                return;
            $scope.coordsUpdates++;
        });
    });
'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('ChartsCtrl', function ($scope,$http,$resource,$rootScope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.chartData = [];

    var $uri = 'http://54.64.73.55:8000/webservice/api/resource/getChartData';
//        var $uri = 'http://192.168.0.23:8080/testapp/api/resource/getChartData';

        $http.get($uri).success(function (data) {
            console.log("getHealthData");
            $scope.chartData = data;
            $scope.heartRateChart = createChart();
        }).error(function (response) {
        });

        function createChart() {
            console.log("createChart");
            var chart = {};
            chart.type = "LineChart";
            chart.data = $scope.chartData;
            chart.options = {
                title: '【心拍数推移】',
                dataOpacity: 0.5,
                height: 400,
                isStacked: true,
                animation: { duration: 3000, easing: 'linear'},
                hAxis: {
                    slantedText: true,
                    viewWindowMode: 'pretty',
                    textPosition:'out',
                    title:'測定日'
                },
                vAxis: {
                    textPosition:'out',
                    title:'心拍数',
                    ticks:[110,105,100,95,90,85,80,75,70,65,60,55,50]
                },
                seriesType: "line"

            }
            return chart;
        }
    });
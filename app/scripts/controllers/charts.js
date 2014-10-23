'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
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
//        $scope.charData =
//
//        {
//            "cols": [
//            {"id":"","label":"heartRate","pattern":"","type":"string"},
//            {"id":"","label":"Aさん","pattern":"","type":"number"},
//            {"id":"","label":"Bさん","pattern":"","type":"number"}
//        ],
//            "rows": [
//            {"c":[{"v":"10/19"},{"v":"63"},{"v":"73"}]},
//            {"c":[{"v":"10/20"},{"v":"71"},{"v":"68"}]},
//            {"c":[{"v":"10/21"},{"v":"71"},{"v":"65"}]},
//            {"c":[{"v":"10/22"},{"v":"61"},{"v":"69"}]},
//            {"c":[{"v":"10/23"},{"v":"62"},{"v":"73"}]}
//        ]
//        };
    var $uri = 'http://54.64.73.55/testapp/api/products/getChart';
//        var $uri = 'http://192.168.0.23:8080/testapp/api/products/getChart';

        $http.get($uri).success(function (data) {
            console.log("getHealthData");
            $scope.chartData = data;
            $scope.testchart = createChart();
        }).error(function (response) {
            // alert("err");
        });

        function createChart() {
            console.log("createChart");
            var chart = {};
            chart.type = "LineChart";
            chart.data = JSON.stringify($scope.chartData);
            chart.options = {
               // title: '心拍数推移',
                dataOpacity: 0.5,
                height: 500,
                isStacked: true,
                hAxis: {
                    slantedText: true,
                    viewWindowMode: 'pretty',
                    textPosition:'out',
                    title:'日付'
                },
                vAxis: {
                    textPosition:'out',
                    title:'心拍数',
                    ticks:[90,85,80,75,70,65,60,55,50]
                },
                seriesType: "line"

            }
            return chart;
        }
    });
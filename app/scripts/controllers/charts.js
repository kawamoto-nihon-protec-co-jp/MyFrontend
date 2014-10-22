'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('ChartsCtrl', function ($scope,$http,$rootScope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.testchart = createChart();
        function createChart() {
            var chart = {};
            chart.type = "LineChart";
            chart.data = {
                "cols": [
                    {"id":"","label":"heartRate","pattern":"","type":"string"},
                    {"id":"","label":"Aさん","pattern":"","type":"number"},
                    {"id":"","label":"Bさん","pattern":"","type":"number"}
                ],
                "rows": [
                    {"c":[{"v":"10/19","f":null},{"v":63,"f":null},{"v":73,"f":null}]},
                    {"c":[{"v":"10/20","f":null},{"v":71,"f":null},{"v":68,"f":null}]},
                    {"c":[{"v":"10/21","f":null},{"v":71,"f":null},{"v":65,"f":null}]},
                    {"c":[{"v":"10/22","f":null},{"v":61,"f":null},{"v":69,"f":null}]},
                    {"c":[{"v":"10/23","f":null},{"v":62,"f":null},{"v":73,"f":null}]}
                ]
            };
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
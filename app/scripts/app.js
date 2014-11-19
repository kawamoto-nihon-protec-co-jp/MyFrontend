'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
var cnt = 0;
angular
    .module('appApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngGrid',
        'ui.bootstrap',
        'googlechart',
        'google-maps'.ns()
    ])
    // 画面遷移
    .config(function ($routeProvider) {
        $routeProvider
            // home画面
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            // 測定結果一覧画面
            .when('/grid', {
                templateUrl: 'views/grid.html',
                controller: 'GridCtrl'
            })
            // グラフ画面
            .when('/charts', {
                templateUrl: 'views/charts.html',
                controller: 'ChartsCtrl'
            })
            // map画面
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapCtrl'
            })
            // その他
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller( 'TabCtrl', ['$scope', function ($scope) {
        $scope.isHomeActive = true;
        $scope.tabHomeClick = function () {
            $scope.isHomeActive=true;
            $scope.isGridActive=false;
            $scope.isChartsActive=false;
        };
        $scope.tabGridClick = function () {
            $scope.isHomeActive=false;
            $scope.isGridActive=true;
            $scope.isChartsActive=false;
        };
        $scope.tabChartClick = function () {
            $scope.isHomeActive=false;
            $scope.isGridActive=false;
            $scope.isChartsActive=true;
        };
    }]);

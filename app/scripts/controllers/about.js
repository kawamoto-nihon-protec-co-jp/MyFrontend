'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('AboutCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.myData = [{}];
    $scope.pagingOptions = {
        pageSizes: [10, 20, 100],
        pageSize: 10,
        currentPage: 1
    };
    $scope.gridOptions = {
        data: 'myData',

        enablePaging: true,
        showFooter: true,
        rowHeight:30,
        showFilter:true,
        enableColumnResize:true,

        pagingOptions: $scope.pagingOptions,
        totalServerItems: 'size',

        columnDefs: [
            { displayName: "#",width: 60,cellTemplate: '<div align="right">{{row.rowIndex+startCount}}</div>'},
            { field: 'userId', displayName: 'ユーザ', width: 90 },
            { field: 'heartRate', displayName: '心拍数', width: 90 },
            { field: 'assayDate', displayName: '測定日', width: '*', cellTemplate: '<div><a href="#/charts" ng-click="doChart(\'{{row.entity[col.field]}}\')">{{row.entity[col.field]}}</a></div>' }
        ]
    };
    var $uri = 'http://54.64.73.55:8000/testapp/api/products/getMessage';
    getHealthData();
//    var $call_api = $http.get($uri).success(function(response) {
//                        // alert("success");
//                        $scope.myData = response.data;
//                    }).error(function(response) {
//                        // alert("err");
//                    });
    $scope.doSearch = function() {
        getHealthData();
    };
    $scope.doChart = function (val) {
        $scope.selData = val;
    }
    function getHealthData() {
        $http.get($uri).success(function(response) {
            // alert("success");
            $scope.myData = response.data;
        }).error(function(response) {
            // alert("err");
        });
    }
//         var $uri = 'http://192.168.0.23:8080/jersey2_sample/admin/getMessage';
//        var $uri ='http://54.64.73.55:8000/jersey2_sample/admin/getMessage';
        //var $uri ='http://localhost:8080/jersey2_sample/admin/getMessage';
        //var $uri ='data/sample.json';
//        var $uri ='http://54.64.73.55:8000/testapp/api/products/getMessage';
       // app.controller('testCtrl', function($scope, $http) {
//            $scope.doSearch = function() {
//                $call_api;
//            };
      //  });
  });

//var $uri ='http://54.64.73.55:8000/jersey2_sample/admin/getMessage';
//var $uri ='http://localhost:8080/jersey2_sample/admin/getMessage';
//var $uri ='data/sample.json';
/*app.controller('testCtrl', function($scope, $http) {
    $scope.doSearch = function() {
        $http.get($uri).success(function(response) {
            //alert("success");
            $scope.results = response.data;
        }).error(function(response) {
            //alert("err");
        });
    };
});*/
'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('GridCtrl', function ($scope,$http,$rootScope) {
    var $uri = 'http://54.64.73.55/testapp/api/products/getMessage';
//    var $uri = 'http://192.168.0.23:8080/testapp/api/products/getMessage';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };
    // 全件数
    $scope.totalServerItems = 0;
    // ページ切り替え
    $scope.pagingOptions = {
        pageSizes: [5, 10, 20, 30],
        pageSize: 10,
        currentPage: 1
    };
    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get($uri).success(function(largeLoad) {
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                }).error(function(largeLoad) {
                });
            } else {
                $http.get($uri).success(function(largeLoad) {
                    var pagedData = largeLoad.data.slice((page - 1) * pageSize, page * pageSize);
                    $scope.setPagingData(largeLoad.data,page,pageSize);
                }).error(function(largeLoad) {
                });
            }
        }, 100);
    };
    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && (newVal.currentPage !== oldVal.currentPage || newVal.pageSize !== oldVal.pageSize)) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.mySelections = [];

    $scope.hrefMap ='<a href="#/map" ng-click="doChart(row)">地図</a>';

    $scope.gridOptions = {
        data: 'myData',

        enablePaging: true,
        showFooter: true,
        showFilter:true,
        enableColumnResize:true,
        enableRowSelection:true,
        multiSelect:false,
        totalServerItems:'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        selectedItems: $scope.mySelections,

        // 項目
        columnDefs: [
            { displayName: "#",width: 30, cellTemplate: '<div align="right">{{row.rowIndex+startCount+1}}</div>'},
            { field: 'userId', displayName: 'ユーザ', width: 90 },
            { field: 'heartRate', displayName: '心拍数', width: 60 },
            { field: 'assayDate', displayName: '測定日', width: 200 },
            { field: 'gpsLatitude', displayName: '測定場所', width: '*', cellTemplate:$scope.hrefMap }
        ]
    };
    // 更新ボタン押下時
    $scope.doSearch = function () {
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    };
    // map画面呼び出し
    $scope.doChart = function (row) {
        $rootScope.gpsLatitude = row.entity.gpsLatitude;   // 緯度
        $rootScope.gpsLongitube = row.entity.gpsLongitude; // 経度
    };
  });
'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.myData = [{zipcode: "Moroni", address: 50},
                        {zipcode: "Tiancum", address: 43},
        {zipcode: "Jacob", address: 27},
        {zipcode: "Nephi", address: 29},
        {zipcode: "Enos", address: 34}];
    $scope.pagingOptions = {
        pageSizes: [10, 20, 100],
        pageSize: 10,
        currentPage: 1
    };
    $scope.gridOptions = {
        data: 'myData',

        enablePaging: true,
        showFooter: true,
        rowHeight:20,
        showFilter:true,
        enableColumnResize:true,

        pagingOptions: $scope.pagingOptions,
        totalServerItems: 'size',

        columnDefs: [
            { displayName: "#",width: 60,cellTemplate: '<div align="right">{{row.rowIndex+startCount}}</div>'},
            { field: 'zipcode', displayName: '郵便番号', width: 90 },
            { field: 'address', displayName: '住所', width: '*', cellTemplate: '<div><a href="{{row.entity[\'link\']}}">{{row.entity[col.field]}}</a></div>' }
        ]
    };
  });

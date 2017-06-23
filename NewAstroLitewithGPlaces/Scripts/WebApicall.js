/// <reference path="angular.min.js" />

var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {
    var urlBase = "http://localhost:57529/api";
    var EmpApi = {};

    EmpApi.getEmployees = function () {
        return $http.get(urlBase + '/Employees');
    };

    return EmpApi;
});
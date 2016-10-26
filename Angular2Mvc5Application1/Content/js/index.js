﻿//main app module
var tourcityapp = angular.module('tourcityapp', ['ngRoute']);


//Routes
tourcityapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Profile/index'
        })
       .when('/categories', {
           templateUrl: 'Profile/categories'
       })
        .when('/facebook/register', {
            templateUrl: 'facebookmanager/register'
        })
          .when('/space/welcome', {
              templateUrl: 'Space/Welcome'
          })

        .otherwise({
            template: '404'
        });
}]);


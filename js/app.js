// insert 'ngRoute' to make it available for use
var app = angular.module('CalendarApp', ['ngRoute']);

// define the app's routes
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'DayController', 
      templateUrl: 'views/day.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
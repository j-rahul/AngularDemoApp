'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/newEvent',
            {
                foo: 'bar',
                templateUrl: 'templates/NewEvent.html',
                controller: 'NewEventController'
            }

        );

        $locationProvider.html5Mode(true);
    });
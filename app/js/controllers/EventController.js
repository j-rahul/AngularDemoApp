/**
 * Created by jainrx on 12/24/2016.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {
        $scope.message = "Hello world!";
        $scope.boolVal = true;
        $scope.myStyle = {color: 'red'};
        $scope.myClass = "blue";
        $scope.myButton = false;
        $scope.sortOrder = 'name';
        $scope.snippet = '<span>hi there!</span>';
        eventData.getEvent()
            .success(function(event, status, headers, config){
                $log.warn(event, status, headers(), config);
                $scope.event = event;
            })
            .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config)
            });

    }
);

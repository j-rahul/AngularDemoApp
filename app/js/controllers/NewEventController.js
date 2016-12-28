'use strict';

eventsApp.controller("NewEventController", function($scope){
    $scope.saveEvent = function(event, newEventForm){
        console.log(newEventForm);
        if(newEventForm.$valid) {
            window.alert("Saved Event with event name: " + event.name);
        }
    }

    $scope.cancelEdit = function(){
        window.location = "/EventDetails.html";
    }
});
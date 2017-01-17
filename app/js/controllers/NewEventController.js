'use strict';

eventsApp.controller("NewEventController", function($scope, eventData, $route){

    //accessing the customized parameter :"foo" set in the route provider in app.js
    console.log($route.current.foo);

    //accessing the query params (http://localhost:8000/#/newEvent?foo=hi)
    console.log("query param: " + $route.current.params.foo);

    $scope.saveEvent = function(event, newEventForm){
        console.log(newEventForm);
        if(newEventForm.$valid) {
            eventData.saveEvent(event)
                .$promise.then(
                    function(response){console.log("success response: " + response)},
                    function(response){console.log("error response: " + response)}
            );


            window.alert("Saved Event with event name: " + event.name);
        }
    }

    $scope.cancelEdit = function(){
        window.location = "/EventDetails.html";
    }

    //reloaad only the current page without reloading the entire app.
    $scope.reload = function(){
        $route.reload();
    }

});
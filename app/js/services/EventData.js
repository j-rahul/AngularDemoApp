eventsApp.factory('eventData', function($http, $resource){
    var resource = $resource('/data/event/:id', {id: '@id'});
    return{

        getEvent: function(){
            return $http({method: 'GET', url: '/data/event/1'});
        },

        getResourceServiceEvent: function(){
            return resource.get({id: 2});
        },

        saveEvent: function(event){
            resource.save(event);
        }
    };
});
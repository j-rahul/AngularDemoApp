/**
 * Created by jainrx on 12/24/2016.
 */

'use strict';

eventsApp.controller('EventController', function EventController($scope){
    $scope.message = "Hello world!";
    $scope.boolVal=true;
    $scope.myStyle={color:'red'};
    $scope.myClass = "blue";
    $scope.myButton = false;
    $scope.sortOrder='name';
    $scope.event = {
        name: 'Angular Demo App',
        date: '12/24/2016',
        time: '5.00pm',
        modules:[
            {
                name: 'Controllers and Markup',
                duration: 1,
                upVoteCount: 0
            },
            {
                name: 'Angular Routing',
                duration: 2,
                upVoteCount: 0

            },
            {
                name: 'Angular Directives',
                duration: 3,
                upVoteCount: 0
            }
        ]
    };
    $scope.snippet = '<span>hi there!</span>';
});

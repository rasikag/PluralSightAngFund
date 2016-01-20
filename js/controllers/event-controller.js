'use strict';

eventsApp.controller('eventController',
        function eventController($scope , eventData){

            $scope.event = eventData.event;
            
            $scope.upVoteSession = function(session){
                session.upVoteCount++;
            };
            
            $scope.downVoteSession = function (session){
                session.upVoteCount--;
            };
});
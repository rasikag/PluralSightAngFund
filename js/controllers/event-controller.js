'use strict';

eventsApp.controller('eventController',
    function eventController($scope, eventData, $log , $anchorScroll) {

        eventData.getEvent()
            .$promise
            .then(function (event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function (responce) {
                console.log(responce);
            });

        $scope.scrollToSession = function(){
            $anchorScroll();
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });
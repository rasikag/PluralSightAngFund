'use strict';

eventsApp.controller('eventController',
        function eventController($scope){
            $scope.event = {
                name : 'Angular Boot Camp',
                date : '1/1/2015',
                time : '12.31 pm',
                location : {
                    address : 'Google HQ',
                    city : 'Alabama',
                    province : 'NY'
                },
                image : 'img/angularjs-logo.png',
                sessions : [
                    {
                        name : 'Directive Master Class ',
                        createrName : 'Rasika Gayan ',
                        duration : 2,
                        level:'Advance',
                        abstract : 'You will learn Directive',
                        upVoteCount : 3
                    },
                    {
                        name : 'Scope for fun and profit',
                        createrName : 'Dulanjaya Sanjana',
                        duration : 1,
                        level:'Advance',
                        abstract : 'You will learn Scope',
                        upVoteCount : 5
                    },
                    {
                        name : 'Well behaved controller',
                        createrName : 'Darsana Prasad ',
                        duration : 3,
                        level:'Advance',
                        abstract : 'You will learn Controleer',
                        upVoteCount : 19
                    }
                ]
            };
            
            $scope.upVoteSession = function(session){
                session.upVoteCount++;
            };
            
            $scope.downVoteSession = function (session){
                session.upVoteCount--;
            };
});
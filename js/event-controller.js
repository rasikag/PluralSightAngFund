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
                        duration : '1 hr',
                        level:'Advance',
                        abstract : 'You will learn Directive'
                    },
                    {
                        name : 'Scope for fun and profit',
                        createrName : 'Dulanjaya Sanjana',
                        duration : '1 hr',
                        level:'Advance',
                        abstract : 'You will learn Scope'
                    },
                    {
                        name : 'Well behaved controller',
                        createrName : 'Darsana Prasad ',
                        duration : '1 hr',
                        level:'Advance',
                        abstract : 'You will learn Controleer'
                    }
                ]
            }
});
'use strict'

eventsApp.controller('editEventController',
    function editEventController($scope){

        $scope.saveEvent = function(event , newEventForm){

            console.log(newEventForm);

            if(newEventForm.$valid){

            }

        };
        $scope.cancelEdit = function(){
            window.location = "/EventDetails.html";
        };
});
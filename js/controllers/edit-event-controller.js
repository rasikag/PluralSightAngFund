'use strict'

eventsApp.controller('editEventController',
    function editEventController($scope , eventData){

        $scope.saveEvent = function(event , newEventForm){

            console.log(newEventForm);

            if(newEventForm.$valid){
                eventData.save(event)
                    .$promise
                    .then(
                        function(response){
                            console.log('success',response);
                        },
                        function (response) {
                            console.log('failier',response);
                        }
                    );
            }

        };
        $scope.cancelEdit = function(){
            window.location = "/EventDetails.html";
        };
});
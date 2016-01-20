'user strict'

eventsApp.controller('EditProfileController',
    function eventController($scope,gravatarURLBuilder){

        $scope.getGravatarURL = function(email){
            return gravatarURLBuilder.buildGravatarURL(email);
        }



    });

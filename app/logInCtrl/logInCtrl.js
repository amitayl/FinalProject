housing.controller('logInCtrl', function($scope, logInService){

    $scope.isLogedIn = function(){
         return logInService.isLogedIn();
         
    };
});
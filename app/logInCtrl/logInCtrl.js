housing.controller('logInCtrl', function($scope, logInService, $uibModal){

    $scope.isLogedIn = function(){
         return logInService.isLoggedIn();
         
    };

     $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/loginModal/loginModalPage.html",
            controller: "loginModalCtrl"
        })
    };
});
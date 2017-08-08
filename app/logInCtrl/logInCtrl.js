housing.controller('logInCtrl', function($scope, logInService, $uibModal, accountService){

    $scope.isLogedIn = function(){
         return logInService.isLoggedIn();
         
    };

     $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/loginModal/loginModalPage.html",
            controller: "loginModalCtrl"
        })
    };

    $scope.print = function ()    {
        ///////////////////////////
        return accountService.getAll();
    }


    $scope.logout = function ()    {
        return logInService.logout();
    }
});
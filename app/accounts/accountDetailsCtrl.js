housing.controller("accountDetailsCtrl", function ($scope, $location, accountService, logInService,  $routeParams, createAccountService) {

    // If the user is not logged in going back to home screen
    if (!logInService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.account = new createAccountService(accountService.get($routeParams.accountIndex));
    $scope.account.starting_date = new Date($scope.account.starting_date);
    $scope.account.ending_date = new Date($scope.account.ending_date);

    console.log($scope.account);

    $scope.cancel = function() {
        $location.path("/accounts");
    }

    $scope.update = function() {
        accountService.update($routeParams.accountIndex, $scope.account);
        $location.path("/accounts");
    }

    $scope.remove = function() {
        accountService.remove($routeParams.accountIndex);
        $location.path("/accounts");
    }
    
})

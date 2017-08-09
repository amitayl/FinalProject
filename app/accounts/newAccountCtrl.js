housing.controller("newAccountCtrl", function ($scope, $location, accountService, createAccountService, logInService) {

    // If the user is not logged in going back to home screen
    if (!logInService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.accountTypes = accountService.getAccountTypes();

    
    $scope.account = new createAccountService({});

    $scope.cancel = function () {
        $location.path("/accounts");
    }

    $scope.create = function () {
        for (i=0;i<$scope.accountTypes.length;i++)
            {
                if ($scope.account.image == $scope.accountTypes[i].image)
                    $scope.account.service = $scope.accountTypes[i].service;
            }
        accountService.add($scope.account);
        $location.path("/accounts");
    }
});


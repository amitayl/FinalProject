housing.controller("newAccountCtrl", function ($scope, $location, accountService, createAccountService, logInService) {

    // If the user is not logged in going back to home screen
    if (!logInService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.serviceOptions = ["Cellular", "Car Insurance", "Home Insurance", "Pension"];

    $scope.account = new createAccountService({});

    $scope.cancel = function () {
        $location.path("/accounts");
    }

    $scope.create = function () {
        accountService.add($scope.account);
        $location.path("/accounts");
    }
});
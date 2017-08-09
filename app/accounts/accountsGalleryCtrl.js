housing.controller('accountsGalleryCtrl', function($scope,$http, $location, logInService, accountService, createAccountService){
    
    changeBodyBackground("img/intro-bg.jpg");

     if (!logInService.isLoggedIn()) {
         $location.path("/");
         return;
     }

    $scope.first = logInService.get().firstName;
    $scope.accountTypes = accountService.getAccountTypes();

    // Making sure that we are only loading once
    if (accountService.getAll().length === 0) {
        $scope.accountArr = [];
        $http.get(logInService.get().data).then(function(response) {
            accountService.load(response.data);
            $scope.accountArr = accountService.getAll();
        });
    } else {
        $scope.accountArr = accountService.getAll();
    }


    $scope.getIcon = function(account) {
        for (i=0;i<$scope.accountTypes.length; i++)
                {
                if (account.service == $scope.accountTypes[i].service)
                    return $scope.accountTypes[i].icon;
                }
        
    }



    $scope.newAccount = function() {
        $location.path("/accounts/newAccount");
    }


    $scope.openDetails = function(index) {
        $location.path("/accounts/" + index)
    }

    
});

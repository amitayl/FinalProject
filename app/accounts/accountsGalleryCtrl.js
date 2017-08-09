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
            iconSet();
        });
    } else {
        $scope.accountArr = accountService.getAll();
        iconSet();   
    }

   
    function iconSet() 
    {
         for (i=0;i<$scope.accountArr.length; i++)
        {
            for (j=0;j<$scope.accountTypes.length; j++)
                {
                if ($scope.accountArr[i].service == $scope.accountTypes[j].service)
                    $scope.icon = $scope.accountTypes[j].icon;
                }
        }
    }



    $scope.newAccount = function() {
        $location.path("/accounts/newAccount");
    }


    $scope.openDetails = function(index) {
        $location.path("/accounts/" + index)
    }

    
});

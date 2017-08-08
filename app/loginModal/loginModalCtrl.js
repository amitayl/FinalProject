housing.controller('loginModalCtrl', function($scope, $uibModalInstance, $http, $location, logInService, createUserService){
    
    $scope.email = "nir@nir.com";
    $scope.password = "nir123";

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new createUserService(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

  

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user != null) {
            logInService.login(user);
            $uibModalInstance.close("Logged-in");
            $location.path("/accounts")
        } else {
            $scope.failedAttempt = true;
        }




        //console.log($scope.email + " " + $scope.password)
    }

    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }

});
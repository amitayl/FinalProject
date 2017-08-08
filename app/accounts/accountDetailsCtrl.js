housing.controller("accountDetailsCtrl", function ($scope, $location, accountService, logInService,  $routeParams, createAccountService) {

    // If the user is not logged in going back to home screen
    if (!logInService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.recipe = new Recipe(recipes.get($routeParams.recipeIndex));

    $scope.cancel = function() {
        $location.path("/accounts");
    }

    $scope.update = function() {
        recipes.update($routeParams.recipeIndex, $scope.recipe);
        $location.path("/accounts");
    }

    $scope.remove = function() {
        recipes.remove($routeParams.recipeIndex);
        $location.path("/accounts");
    }
    
})

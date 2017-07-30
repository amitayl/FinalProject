var housing = angular.module('housing', ["ngRoute"]);



housing.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        })
        .when("/accounts", {
            templateUrl: "app/accounts/accountsGallery.html",
            controller: "accountsGalleryCtrl"
        })
        .when("/accounts/:accountIndex", {
            templateUrl: "app/accounts/accountDetails.html",
            controller: "accountDetailsCtrl"
        })
});
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
        .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});


function changeBodyBackground(url) {
    document.body.style.backgroundImage = "url("+url+")";
    document.body.style.padding = "100px 0";
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.color = "#f8f8f8";
    document.body.style.backgroundSize = "cover";
}
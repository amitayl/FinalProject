housing.controller('homeCtrl', function($scope, $location, logInService){
    if(logInService.isLoggedIn()) {
        $location.path('/accounts/');
    } else {
        changeBodyBackground("img/banner-bg.jpg");
    }
});
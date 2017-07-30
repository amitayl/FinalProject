housing.factory('logInfo',function(){
    
    var logIn = false;

    var isLogedIn = function() {
        return logIn;
    };

    var setLogIn = function (log){
        logIn = log;
    };

    return {
        isLogedIn: isLogedIn,
        setLogIn: setLogIn
    };   

     
});
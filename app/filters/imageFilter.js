housing.filter('imgFilter', function(obj) {
    return function(obj) {
        console.log(obj);
        if(obj) {
            return obj.image;
        }
        return "sefesf";
    };
});
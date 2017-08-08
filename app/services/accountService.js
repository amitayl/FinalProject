housing.factory("accountService", function(createAccountService, $http) {
    var accountsArr = [];
    var accountTypes = [];
    $http.get("app/data/account-types.json").then(function (result) {
         accountTypes = result.data;
    });

    

    var add = function(account) {
        accountsArr.push(account);
    }

    var update = function(index, account) {
        accountsArr[index] = account;
    }

    var remove = function(index) {
        accountsArr.splice(index, 1);
    }

    var getAccountTypes = function (){
        return accountTypes;
    }

    var load = function(accountPlainObjectArr) {
        for (var i = 0; i < accountPlainObjectArr.length; i++) {
            accountsArr.push(new createAccountService(accountPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return accountsArr;
    }

    var get = function(index) {
        return accountsArr[index];
    }

    var removeAll = function() {
        accountsArr = [];
    }

    return {
        getAccountTypes : getAccountTypes,
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
});
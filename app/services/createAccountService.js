housing.factory("createAccountService", function(){
    function Account(plainObject) {
        this.service = plainObject.service;
        this.company = plainObject.company;
        this.plan_description = plainObject.plan_description;
        this.starting_date = plainObject.starting_date;
        this.ending_date = plainObject.ending_date;
        this.rate = plainObject.rate;
        this.phone = plainObject.phone;
        this.calander_notification = plainObject.calander_notification;
    };
    
    return Account;
});

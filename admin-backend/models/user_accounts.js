class User_Account {
    constructor(id, fName, lName, DOB, contactNum, email, home_address, healthStat){
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.DOB = DOB;
        this.contactNum = contactNum;
        this.email = email;
        this.home_address = home_address;
        this.healthStat = healthStat;
    }
}
module.exports = User_Account;
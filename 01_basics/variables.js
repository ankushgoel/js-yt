const accountId = 324558
let accountEmail = "ankush@mail.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState;

// const can't be updated
// accountId = 345678

/*
Prefer not to use var
bcoz of issue in block and functional scope
*/

accountEmail = "mail@ankush.com"
accountPassword = "121212"
accountCity = "Gurgaon"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

console.log(accountState);
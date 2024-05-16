let usernames = ["Ali","Zeeshan","Amir","Hammad","Admin"]
 
usernames.forEach(oneuser=> {
    if (oneuser == "Admin"){
        console.log(`\nHi ${oneuser} would you like to see a status report?`)
    }
    else {
        console.log(`\nHi ${oneuser} thank you for logging in again.`)
    }
})
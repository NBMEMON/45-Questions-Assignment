var usernames = ["Ali", "Zeeshan", "Amir", "Hammad", "Admin"];
usernames.forEach(function (oneuser) {
    if (oneuser == "Admin") {
        console.log("\nHi ".concat(oneuser, " would you like to see a status report?"));
    }
    else {
        console.log("\nHi ".concat(oneuser, " thank you for logging in again."));
    }
});

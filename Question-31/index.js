var usernames = ["Maham", "Umair", "Feroz", "Ashraf", "Admin"];
// usernames =[]
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (oneuser) {
        if (oneuser == "Admin") {
            console.log("\nHi ".concat(oneuser, " would you like to see a status report?"));
        }
        else {
            console.log("\nHi ".concat(oneuser, " thank you for logging in again."));
        }
    });
}

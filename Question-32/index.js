var current_user = ["Hamza", "Awais", "Kaleem", "Nabeel", "Moiz"];
var new_user = ["Hamza", "Nasir", "Kaleem", "Saleem", "Moiz"];
new_user.forEach(function (each_new_user) {
    var condition = current_user.some(function (current_one_user) { return each_new_user.toLowerCase() === current_one_user.toLowerCase(); });
    if (condition) {
        console.log("\n".concat(each_new_user, " this username is already taken"));
    }
    else {
        console.log("\n".concat(each_new_user, " this username is available"));
    }
});

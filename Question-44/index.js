function makeSandwich() {
    var sandwich_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_items[_i] = arguments[_i];
    }
    console.log("\n Making A sandwich using ingredients given below :");
    sandwich_items.forEach(function (singleitems) { return console.log("\n".concat(singleitems)); });
    console.log("Enjoy Sandwichs");
}
makeSandwich("Cheese", "Yougurt", "Jalapeno");
makeSandwich("Butter", "Egg", "Chicken", "Sauces");
makeSandwich("Cheese", "Yougurt", "Jalapeno", "Butter", "Egg", "Chicken", "Sauces");

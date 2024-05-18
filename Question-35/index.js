var pet_Animals = ["Dog", "Cat", "Rabbit"];
for (var _i = 0, pet_Animals_1 = pet_Animals; _i < pet_Animals_1.length; _i++) {
    var onepet = pet_Animals_1[_i];
    console.log("\nA ".concat(onepet, " would make a good pet"));
}
console.log("All these animal would make a good pet");
pet_Animals.forEach(function (onepet) { return console.log("A ".concat(onepet)); });

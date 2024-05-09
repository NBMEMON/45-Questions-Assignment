var guestName1 = ["Shahruk", "Amir", "Salman"];
var notComing = guestName1[0];
console.log(notComing, "is not coming in party");
guestName1.splice(0, 1, "Ashraf");
guestName1.forEach(function (guestName1) { return console.log("Assalamulaiakum ".concat(guestName1, " , I have organized a dinner party you are also invited will you come?")); });

var guestName1 = ["Shahruk", "Amir", "Salman"];
var notComing = guestName1[0];
console.log("\n".concat(notComing, " , is not coming in party\n"));
guestName1.splice(0, 1, "Ashraf");
guestName1.forEach(function (guestName1) { return console.log("\nAssalamulaiakum ".concat(guestName1, " , I have organized a dinner party you are also invited will you come?\n")); });
console.log("\nGood News ! I have Found a bigger table so i can  invite more friends\n");
guestName1.unshift("Rana Faheem");
guestName1.push("Junaid");
var middle_index = Math.floor(guestName1.length / 2);
guestName1.splice(middle_index, 0, "Mudassir");
console.log("\tUpdated Guest List \t");
guestName1.forEach(function (guestName1) { return console.log("\nHi ! ".concat(guestName1, " would like to come in my party\n")); });
console.log("\n Unfortunately the newly booked dinner table will not be free on time , so i had to remove some guests ");
while (guestName1.length > 2) {
    var removed_guest = guestName1.pop();
    console.log("\nSorry! ".concat(removed_guest, " due to space issue you are not invited anymore"));
}
guestName1.forEach(function (lasttwo) { return console.log("\n ".concat(guestName1, " Fortunately you are the remaining two that are invited for the party")); });
//    Removing remaining two guest from the list 
guestName1.pop();
guestName1.pop();
console.log("\nEmpty List".concat(guestName1, "\n"));

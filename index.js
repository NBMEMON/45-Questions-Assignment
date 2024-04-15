// Welcome to My 45 Questions Assignment
var person_Name = "Ashraf";
console.log("Hello", person_Name, ", Let's learn Typescript today"); //Output : Hello Ashraf,Let's learn Typescript today
// Second Question Done
var Personname = "Naeeb sohail";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
console.log(Personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Third Question Done
console.log('Nikola Tesla once said ,"A new idea must not be judged by its immediate results"');
// Fourth Question Done
var famous_Person = "Nikola Tesla";
var message = ' once said ,"A new idea must not be judged by its immediate results"';
console.log(famous_Person + "" + message);
//  Fifth Question Done
var whitespacename = "\t\nNaeeb Sohail\n\t";
console.log(whitespacename);
var withoutwhitespacename = whitespacename.trim();
console.log(withoutwhitespacename);
// Sixth Question Done
console.log("\t", 2 + 6, "\t");
console.log("\t", 10 - 3, "\t");
console.log("\t", 4 * 2, "\t");
console.log("\t", 64 / 8, "\t");
// Seventh Question Done
var fav_Num = "10";
console.log("My Favourite Number is " + fav_Num);
// Eight&Ninth Questions Done
// Completing the assignment doing the following questions
// Tenth Question Done
var friendsName = ["Ashraf", "Nasir", "Abid"];
friendsName.forEach(function (friendsName) { return console.log(friendsName); });
// Eleventh Question Done
var friendsName1 = ["Shahruk", "Amir", "Salman"];
friendsName1.forEach(function (friendsName1) { return console.log("Hey ".concat(friendsName1, " How are you?")); });
// Twelfth Question Done
var transportationModes = ["Kawasaki Bike", "Mercedes", "Private Jet", "Yatch"];
transportationModes.forEach(function (transportationModes) { return console.log("I would like to own a ".concat(transportationModes)); });
// Thirteenth Question Done
var guestName = ["Ashraf", "Nasir", "Abid"];
guestName.forEach(function (guestName) { return console.log("Assalamulaiakum ".concat(guestName, " , I have organized a dinner party you are also invited will you come?")); });
// Fourteenth Question Done
var guestName1 = ["Shahruk", "Amir", "Salman"];
var notComing = guestName1[0];
console.log(notComing, "is not coming in party");
guestName1.splice(0, 1, "Ashraf");
guestName1.forEach(function (guestName1) { return console.log("Assalamulaiakum ".concat(guestName1, " , I have organized a dinner party you are also invited will you come?")); });

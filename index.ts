// Welcome to My 45 Questions Assignment

let person_Name = "Ashraf";
console.log("Hello", person_Name, ", Let's learn Typescript today"); //Output : Hello Ashraf,Let's learn Typescript today

// Second Question Done

let Personname = "Naeeb sohail";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
console.log(Personname.replace(/\b\w/g, (char) => char.toUpperCase()));

// Third Question Done

console.log(
  'Nikola Tesla once said ,"A new idea must not be judged by its immediate results"'
);

// Fourth Question Done

let famous_Person = "Nikola Tesla";
let message =
  ' once said ,"A new idea must not be judged by its immediate results"';
console.log(famous_Person + "" + message);

//  Fifth Question Done

let whitespacename = "\t\nNaeeb Sohail\n\t";
console.log(whitespacename);

let withoutwhitespacename = whitespacename.trim();
console.log(withoutwhitespacename);

// Sixth Question Done

console.log("\t", 2 + 6, "\t");
console.log("\t", 10 - 3, "\t");
console.log("\t", 4 * 2, "\t");
console.log("\t", 64 / 8, "\t");

// Seventh Question Done

let fav_Num = "10";
console.log("My Favourite Number is " + fav_Num);

// Eight&Ninth Questions Done

// Completing the assignment doing the following questions

// Tenth Question Done

let friendsName = ["Ashraf", "Nasir", "Abid"];       
friendsName.forEach(friendsName => console.log(friendsName));

// Eleventh Question Done

let friendsName1=["Shahruk","Amir","Salman"];
friendsName1.forEach(friendsName1 => console.log(`Hey ${friendsName1} How are you?`));

// Twelfth Question Done

let transportationModes = ["Kawasaki Bike","Mercedes","Private Jet","Yatch"];
transportationModes.forEach(transportationModes => console.log(`I would like to own a ${transportationModes}`));

// Thirteenth Question Done

let guestName = ["Ashraf","Nasir","Abid"];
guestName.forEach(guestName => console.log(`Assalamulaiakum ${guestName} , I have organized a dinner party you are also invited will you come?`));

// Fourteenth Question Done
 
let guestName1 = ["Shahruk","Amir","Salman"]
let notComing = guestName1[0];
console.log (notComing , `is not coming in party`);
guestName1.splice(0,1,"Ashraf");

guestName1.forEach(guestName1 => console.log (`Assalamulaiakum ${guestName1} , I have organized a dinner party you are also invited will you come?`))
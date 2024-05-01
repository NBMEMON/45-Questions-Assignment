let guestName1 = ["Shahruk","Amir","Salman"]
let notComing = guestName1[0];
console.log (`\n${notComing} , is not coming in party\n`);
guestName1.splice(0,1,"Ashraf");

guestName1.forEach(guestName1 => console.log (`\nAssalamulaiakum ${guestName1} , I have organized a dinner party you are also invited will you come?\n`))

console.log("\nGood News ! I have Found a bigger table so i can  invite more friends\n");

guestName1.unshift("Faheem Rana");
guestName1.push("Junaid");
 let middle_index : number = Math.floor(guestName1.length / 2);
 guestName1.splice(middle_index,0,"Mudassir")

 console.log("\tUpdated Guest List \t");
 guestName1.forEach(guestName1 => console.log(`\nHi ! ${guestName1} would like to come in my party\n`));
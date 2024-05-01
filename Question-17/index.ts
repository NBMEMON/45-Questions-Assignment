let guestName1 = ["Shahruk","Amir","Salman"]
let notComing = guestName1[0];
console.log (`\n${notComing} , is not coming in party\n`);
guestName1.splice(0,1,"Ashraf");

guestName1.forEach(guestName1 => console.log (`\nAssalamulaiakum ${guestName1} , I have organized a dinner party you are also invited will you come?\n`))

console.log("\nGood News ! I have Found a bigger table so i can  invite more friends\n");

guestName1.unshift("Rana Faheem");
guestName1.push("Junaid");
 let middle_index : number = Math.floor(guestName1.length / 2);
 guestName1.splice(middle_index,0,"Mudassir")

 console.log("\tUpdated Guest List \t");
 guestName1.forEach(guestName1 => console.log(`\nHi ! ${guestName1} would like to come in my party\n`));
  console.log(`\n Unfortunately the newly booked dinner table will not be free on time , so i had to remove some guests `);
   while(guestName1.length >2){
    let removed_guest=guestName1.pop();
    console.log(`\nSorry! ${removed_guest} due to space issue you are not invited anymore`)
   }
   guestName1.forEach(lasttwo => console.log(`\n ${guestName1} Fortunately you are the remaining two that are invited for the party`));

//    Removing remaining two guest from the list 
guestName1.pop();
guestName1.pop();
console.log(`\nEmpty List${guestName1}\n`);
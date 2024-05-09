let guestName1 = ["Shahruk","Amir","Salman"]
let notComing = guestName1[0];
console.log (notComing , `is not coming in party`);
guestName1.splice(0,1,"Ashraf");

guestName1.forEach(guestName1 => console.log (`Assalamulaiakum ${guestName1} , I have organized a dinner party you are also invited will you come?`))
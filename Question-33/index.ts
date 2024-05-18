let number =[1,2,3,4,5,6,7,8,9,];
for (let one_number of number){
    let ordinary_number :string;
    
    if (one_number == 1){
        ordinary_number ="st"
    }
    else if (one_number == 2){
        ordinary_number ="nd"
    }
    else if (one_number == 3){
        ordinary_number ="rd"
    }
    else {
        ordinary_number ="th"
    }
console.log(`${one_number}${ordinary_number}`)
}

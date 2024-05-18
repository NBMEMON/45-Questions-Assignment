let pet_Animals=["Dog","Cat","Rabbit"]

for(let onepet of pet_Animals){
    console.log(`\nA ${onepet} would make a good pet`)
}
console.log("All these animal would make a good pet")

pet_Animals.forEach(onepet => console.log(`A ${onepet}`))
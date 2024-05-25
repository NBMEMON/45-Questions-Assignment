function create_car(Manafacturer : string , Model : String , ...options : string[]){
    let car = {
        Manafacturer:Manafacturer,
        Model:Model
}
    options.forEach(option => {
        let [key,value] = option.split(":")
         car [key.trim()]  = value.trim()
    });

    return car
}


let car1 = create_car("Toyota","Corolla"," color : red")

console.log(car1)
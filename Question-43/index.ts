function show_magicians(magician_name : string[]){
    magician_name.forEach(name => console.log(name))
    }

function make_great(magician_name : string[]){
    return magician_name.map(name => `The Great Magician ${name}`)
}
    
    let magician1 = ["Tommy","Max Fosh","Elon Musk"]
    
    let copy_of_magicians = magician1.slice()

     let great_magicians = make_great(copy_of_magicians)

     show_magicians(great_magicians)

    //  Original Array
    console.log(magician1)

    // Changed Array
    console.log(great_magicians)
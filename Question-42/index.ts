function show_magicians(magician_name : string[]){
    magician_name.forEach(name => console.log(name))
    }

function make_great(magician_name : string[]){
    return magician_name.map(name => `The Great Magician ${name}`)
}
    
    let magician1 = ["Tommy","Max Fosh","Elon Musk"]
    
    let great_magician = make_great(magician1)

    show_magicians(great_magician);
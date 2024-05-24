function show_magicians(magician_name) {
    magician_name.forEach(function (name) { return console.log(name); });
}
function make_great(magician_name) {
    return magician_name.map(function (name) { return "The Great Magician ".concat(name); });
}
var magician1 = ["Tommy", "Max Fosh", "Elon Musk"];
var great_magician = make_great(magician1);
show_magicians(great_magician);

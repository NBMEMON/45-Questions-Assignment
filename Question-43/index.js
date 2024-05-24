function show_magicians(magician_name) {
    magician_name.forEach(function (name) { return console.log(name); });
}
function make_great(magician_name) {
    return magician_name.map(function (name) { return "The Great Magician ".concat(name); });
}
var magician1 = ["Tommy", "Max Fosh", "Elon Musk"];
var copy_of_magicians = magician1.slice();
var great_magicians = make_great(copy_of_magicians);
show_magicians(great_magicians);
//  Original Array
console.log(magician1);
// Changed Array
console.log(great_magicians);

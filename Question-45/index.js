function create_car(Manafacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        Manafacturer: Manafacturer,
        Model: Model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var car1 = create_car("Toyota", "Corolla", " color : red");
console.log(car1);

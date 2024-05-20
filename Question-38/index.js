function describe_city(cityname, countryname) {
    if (cityname === void 0) { cityname = "Karachi"; }
    if (countryname === void 0) { countryname = "Pakistan"; }
    console.log("".concat(cityname, " is in ").concat(countryname));
}
describe_city("Lahore");
describe_city("Peshawar");
describe_city("Beijing", "China");

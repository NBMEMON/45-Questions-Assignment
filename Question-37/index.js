function make_shirts(shirtsize, printmessage) {
    if (shirtsize === void 0) { shirtsize = "Large"; }
    if (printmessage === void 0) { printmessage = "I love typescript"; }
    console.log("\nMake a shirt of ".concat(shirtsize, " size and print ").concat(printmessage, " on it"));
}
// calling with default values
make_shirts();
// calling with custom values
make_shirts("Small", "DSA Next Goal");

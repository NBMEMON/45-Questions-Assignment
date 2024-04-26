var Personname = "Naeeb sohail";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
console.log(Personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

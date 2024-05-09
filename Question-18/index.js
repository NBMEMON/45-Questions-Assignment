var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Printing the original order list
var countriesToVisit = ["China", "USA", "Turkey", "Maldives", "Singapore"];
console.log("Countries to Visit ", countriesToVisit);
// Priniting the array copy in Alphabetical order
console.log("Countries in alphabetical order", __spreadArray([], countriesToVisit, true).sort());
//  Printing the original in its original state
console.log("Original Order list ", countriesToVisit);
// Printing the array copy in reverse order
console.log("Countries list in reverse order", __spreadArray([], countriesToVisit, true).reverse());
// Printind the array to show that array is in original state 
console.log("Original Order list ", countriesToVisit);
// Changing the original order in reverse order
console.log("Countries List in Alphabetical order", countriesToVisit.reverse());
// Reversing the list to show that array in original state
console.log("Original Order List", countriesToVisit.reverse());
// Printing the array in alphabetical order
console.log("Countries list in Alphabetical order", countriesToVisit.sort());
console.log(countriesToVisit);

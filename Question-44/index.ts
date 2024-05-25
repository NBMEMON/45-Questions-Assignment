function makeSandwich(...sandwich_items : string []){
            console.log("\n Making A sandwich using ingredients given below :")
            sandwich_items.forEach(singleitems => console.log(`\n${singleitems}`))
            console.log("Enjoy Sandwichs")
}

makeSandwich("Cheese","Yougurt","Jalapeno");
makeSandwich("Butter","Egg","Chicken","Sauces")
makeSandwich("Cheese","Yougurt","Jalapeno","Butter","Egg","Chicken","Sauces")

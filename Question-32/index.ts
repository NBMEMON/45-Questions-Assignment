let current_user = ["Hamza","Awais","Kaleem","Nabeel","Moiz"]

let new_user =["Hamza","Nasir","Kaleem","Saleem","Moiz"]

new_user.forEach(each_new_user =>
    {let condition = current_user.some(current_one_user => each_new_user.toLowerCase() === current_one_user.toLowerCase())
        if (condition){
            console.log(`\n.${each_new_user} this username is already taken`)
        }
        else{
            console.log(`\n${each_new_user} this username is available`)
        }
    }
)
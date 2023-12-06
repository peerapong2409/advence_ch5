let person = {
    "name" : "Jason Object",
    "age" : 48,
    "married" : true,
    "children" : ("Jacob","jane","joan") ,
    "website" : null ,
    "cars" : {
        "sedan" : "BMW series 3" ,
        "suv" : ("Hinda (RV" , "Toyota Fortuner") ,
        "pickup" : "Isuzu Dmax",
    
    }

}
console.log(person.name)
console.log(person['age'])
console.log(person.children[1])
console.log(person.cars.suv[0])
let obj =JSON.parse(person)
console.log(obj)
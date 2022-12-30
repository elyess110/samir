// Create a function called keyLoop that takes in an object and loops through
// each of the key values. If any of the key values are equal to "monkey", then
// return "There's a monkey!", otherwise return "There's no monkey here!".

var keyLoop;
var animals = [
    { species: 'monkey', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
    { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
    { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
];
function keyLoop (animals){
    for(var i = 0; i<animals.length; i++){
    if(animals[i].species === "monkey"){
        return "There's a monkey!"
    }else
    return "There's no monkey here!"
    }
}

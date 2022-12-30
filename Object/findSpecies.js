// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
var animals = [
    { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
    { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
    { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
];
function findSpecies(animals){
    var arr = []
    for(var i = 0; i<animals.length; i++){
        arr[i]=animals[i].species
    }return arr
}


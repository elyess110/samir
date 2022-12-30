// Create a function called getKeys that takes in the animal object and returns all
// of the key names.

var getKeys;
var animals = 
    { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'};
    function getKeys(animals){
        return (Object.keys(animals));
    }

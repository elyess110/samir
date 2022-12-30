// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal= {
    type: "cat",
    name: "samir",
    noise() { console.log("meow") }
 };
function makeNoise(animal){
    return animal["noise"]()
}



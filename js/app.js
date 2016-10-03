

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.

console.log("are we up and running?")
console.log('Well are we?')

var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}

//  INPUT: object
function reverseObject(obj){
  var reversed = []
  for (var theProp in obj) {    // theProp[obj] = obj[theProp]
     reversed[obj[theProp]] = theProp;
  }
  return reversed
//  OUTPUT:  Object with values and keys reversed
}




var reversed = reverseObject(object)
console.assert( reversed['2b'] === 'apartment_no' )

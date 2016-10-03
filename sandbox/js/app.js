

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.


var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}
//  INPUT: object
function reverseObject(obj){
  var newObj = {}
  for (var i = 0; i < obj.length; i += 1){
console.log(obj.length)


  }
  return newObj
//  OUTPUT:  Object with values and keys reversed
}




var reversed = reverseObject(object)
console.assert( reversed['2b'] === 'apartment_no' )

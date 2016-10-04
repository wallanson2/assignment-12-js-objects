

// Write a function called reverseAll(). It should take as input an array of
// objects, and it should output an array of objects with the keys and values
// reversed.
console.log("am I connected?")
var users = [
   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" }
]
//  INPUT: Array of objects =======================================


function reverseObjects(arrOfObjs) {
  var backAssWords = []
  for (var i = 0; i < arrOfObjs.length; i += 1) {
    var objHolder = {}
    for (var theProp in arrOfObjs[i]) {
      objHolder[arrOfObjs[i][theProp]] = theProp;
    }
      backAssWords.push(objHolder)
  }
  return backAssWords;
}

//  OUTPUT: Array of objects with keys and values reversed  =========


// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var flippedUsers = reverseObjects(users)

console.assert( flippedUsers[0]['president@gmail.com'] === 'willis' )
console.assert( flippedUsers[1]['bonjourben@yahoo.com'] === 'benzo' )
console.assert( flippedUsers[1].dealmaking === 'hobby' )
console.assert( flippedUsers[2].croissant === 'favoriteFood' )

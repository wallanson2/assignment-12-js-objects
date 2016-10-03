

function generateDog(str){
  var dogObj = {
    name: str,
    legs : 4,
    weight: 75,
    color: "black",
    speak : function(dogMsg){
      var arrOfWords = dogMsg.split(" ")
      if(arrOfWords.length > 1) {
        var newSentenceArr = []
        for(var i = 0 ; i < arrOfWords.length ; i++){
          var singleWord = arrOfWords[i];
          var lettersArr = singleWord.split('')
          lettersArr[0] = "r";
          var rWordStr = lettersArr.join('')
          newSentenceArr.push(rWordStr);
        }
          var newSentenceStr = newSentenceArr.join(' ')
         console.log(newSentenceStr)
        return newSentenceStr
      }
    }
  }
  return dogObj
}

var dog = generateDog('rex')

console.assert(dog.legs === 4)
console.assert(dog.name === 'rex')

var dog = generateDog('carl')
console.assert(dog.name === 'carl')

console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.speak('so hungry') === 'ro rungry')

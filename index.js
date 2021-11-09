var a= 5;
a = 8;
console.log(a)

var b;
b = 5;
a += b;
var c = "I am a ";
c = c + "String";
console.log(b);

// console.log(a)
/*
Data types:
undefined, null, boolean, string, symbol, number, object
*/

/*
Variables
let- only can be used in scope 
var- can be used throughout entire program
const- can never change, available throughout program
*/

var remainder = 11 % 3
// console.log(remainder)
b *= 2
console.log(b)



/*
Escape / will make it no longer considered end of string
*/
// var myStr = "I am a \"double quoted\" string inside \"double quotes\" "
// console.log(myStr)

/*
CODE    OUTPUT

\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*/


var myStr = "I am a \n\"double quoted\" string inside \t\"double quotes\" "
// console.log(myStr)

var str = "Jello World"

str[0] = "H"
// console.log(str)

var arr = ["J","E","L"]
// console.log(arr)
arr[0] = "H"
// console.log(arr)


function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = ""
    result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."
    return result
}

console.log(wordBlanks("dog","big","ran","quickly"))
console.log(wordBlanks("bike","slow","flew","slowly"))

//                   ******************* Arrays ********************

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12]], [23,14]]

myArray[3] = [10,00,1]
console.log(myArray)
console.log(myArray[2][1])
myArray.push(['hot soup',2])
console.log(myArray)

myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)

// push add to end o(1)
// unshift, add to front o(N)

// pop remove from end o(1)
// shift remove from front  o(N)
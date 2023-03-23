// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 1.) create a function that takes tempretures and compares the values to boiling point. 
//              2.) declare a variable  for boiling point and set it to 212
//              3.) make a conditional statment, using equalaity evaluators to compare the tempretures to boiling point.
//              4.) returns the evaluation below, at, or above boiling point.
//              5.) test the fuction if the evaluation is not a temprature

// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// Expected output: "212 is at boiling point"

// const tempArray = [42, 350, 212];
// const boilingPoint = 212
// const tempCheck = (temp) => {
//     if (temp < boilingPoint) {
//         return `${temperature1} is below boiling point`
//     } else if (temp === boilingPoint) {
//         return `${temperature2} is above boiling point`
//     } else if (temp > boilingPoint) {
//         return `${temperature3} is at boiling point`
//     } else {
//         return "Thermometer thingy is broken"
//     }
// }

// console.log(tempCheck(tempArray[0]));
// console.log(tempCheck(tempArray[1]));
// console.log(tempCheck(tempArray[2]));
// console.log(tempCheck("Theres mercury everywhere!"));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 1.) create a function that the arrays and evaluates the length of the array.
//              2.) return the sum of the arrays

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// const arrayLengthSum = (array1, array2) => {
//     return array1.length + array2.length
// }

// console.log(arrayLengthSum(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))


// // Expected output: 9

// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code: 1.) use the appropriate built in method to manipulate the variable currentCohort in relations to the data type property
//                 2.) convert  currentCohort's string value to an array
//                 3.) reverse the order of the array
//                 4.) convert the currentCohort array back to a string.

// const currentCohort = "Bravo 2023"

// console.log(currentCohort.split("").reverse().join(""))

// Expected output: "3202 ovarB"

// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Pseudo code: 1.) use a built in method to evaluate the last index givenValue1 and givenValue1 are seen at

//--------------------------

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// // // Expected output: 7
// // console.log(myNumbers.lastIndexOf(givenValue1))

// const givenValue2 = 10
// // // Expected output: 8
// // console.log(myNumbers.lastIndexOf(givenValue2))
// // -------------------------------
// const test = "Test"

// const givenValueArray = [givenValue1, givenValue2, test]

// // This was my first attempt,  I miss understood the question when i read the word return.  My mind went to creating a function.  In this approach my if statement returned the correct value, but my else if statement did not return a value.  It looks like after the loop evaluated myNumber[2] it preformed the  the expected behavior. but did not evaluate the remaindng indexes in the array.  

// const lastIndex = (array1) => {
//     for (let i = 0; i < myNumbers.length; i++) {
//     if (myNumbers[i] === array1) {
// return myNumbers.lastIndexOf(givenValue1);

// } else if (myNumbers[i] === array1) {
// return myNumbers.lastIndexOf(givenValue2);
// } 
// }
// }

// console.log(lastIndex(givenValueArray[0]));
// console.log(lastIndex(givenValueArray[1]));
// console.log(lastIndex(givenValueArray[2]));

//--------------------------

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: 1.) use a built in method to mutate arrays from largest to smallest.
//                 2.) use .sort() method to sort the array from smallest to largetst
//                 3.) use .reverse() method to flip the order of the array.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // // Expected output: [82, 80, 79, 77, 76, 73, 72]


// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // // Expected output: [68, 67, 66, 66, 62, 59, 59]


// const dog = "test"

// const combineArray = [sanDiegoSummerTemperatures, sanDiegoWinterTemperatures, dog]


// const newArray = (array1) => {
//     for (let i = 0; i < combineArray.length; i++){
//     if (array1 === sanDiegoSummerTemperatures) {
//         return sanDiegoSummerTemperatures.sort().reverse()
//     } else if (array1 === sanDiegoWinterTemperatures) {
//         return sanDiegoWinterTemperatures.sort().reverse()
//     } else {
//         return "It's raining cats and dogs!"
//     }
// }
// }
// console.log(newArray(combineArray[0]))
// console.log(newArray(combineArray[1]))
// console.log(newArray(combineArray[2]))


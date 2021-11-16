let num1 = [1,3,4];
let nums2 = [2,6,9];
//let mergedArray =[];

let mergedArray = [...num1,...nums2];
// console.log("mergedArray",mergedArray);
// console.log("mergedArray",mergedArray.length/2);

// if((mergedArray.length)/2 != 0){
//     console.log(mergedArray[Math.floor(mergedArray.length/2)]);
//     console.log(mergedArray[mergedArray.length / 2 | 0]);
// // }
// findMedian();
// let middle = Math.floor(numArray.length / 2);
// function findMedian () {
//     if(mergedArray.length % 2 === 0) {
//         console.log("middle nums when array length is even: " + mergedArray[middle - 1]  + " " + mergedArray[middle]);
//     } else {
//         console.log("middle num when array length is odd: " + mergedArray[middle]);
//     }
// }


var numArray = [2, 3, 6, 4, 8, 10, 11, 13, 1, 25, 200, 210, 60];

numArray.sort(function(a, b) {return a-b;});
//log the contents of the array
console.log(numArray);
//log the array length
console.log("array length is: " + numArray.length);
//Split the array in half
var middle = Math.floor(numArray.length / 2);
//function to find the median
function findMedian () {
    if(numArray.length % 2 === 0) {
        console.log("middle nums when array length is even: " + numArray[middle - 1]  + " " + numArray[middle]);
    } else {
        console.log("middle num when array length is odd: " + numArray[middle]);
    }
}
//call function
findMedian();
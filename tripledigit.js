let num1 = "367";
let num2 = "251";
let store=[];
let resultStore=[];
let oddOnes = [];
let evenOnes = [];

for(let i = 0; i < num1.length; i++){
    let first = Number(num1.charAt(i)) * Number(num2.charAt(2));
    if(first.toString().length <= 1){
        first = "0"+first;
    }
    store.push(first);
    let second = Number(num1.charAt(i)) * Number(num2.charAt(1));
    if(second.toString().length <= 1){
        second = "0"+second;
    }
    oddOnes.push(second);
    let third = Number(num1.charAt(i)) * Number(num2.charAt(0));
    if(third.toString().length <= 1){
        third = "0"+third;
    }
    evenOnes.push(third);
}

console.log("store",store);
console.log("oddOnes",oddOnes);
console.log("evenOnes",evenOnes);

let firstdigit = store[2].charAt(1);
let scnddigit = Number((oddOnes[0].toString()).charAt(0)) + Number((oddOnes[1].toString()).charAt(1)) + Number((evenOnes[0].toString().toString()).charAt(1));
let thirddigit = Number(oddOnes[1].toString().charAt(0)) + Number(oddOnes[2].toString().charAt(1)) + Number(evenOnes[0].toString().charAt(0))+ Number(evenOnes[1].toString().charAt(1));
let fourthdigit = Number(oddOnes[2].toString().charAt(0)) + Number(evenOnes[1].toString().charAt(0)) + Number(evenOnes[2].toString().charAt(1));
let fifthdigit = Number(evenOnes[2].toString().charAt(0));
//
// if(scnddigit.toString().length >=2){
//     thirddigit = thirddigit + Number(scnddigit.toString().substring(0,1));
//     scnddigit = scnddigit.toString().substring(1,2)
// }
//
// if(thirddigit.toString().length >=2){
//     fourthdigit = Number(fourthdigit) + Number(thirddigit.toString().substring(0,1));
//     thirddigit = thirddigit.toString().substring(1,2);
// }
//
// if(fourthdigit.toString().length >=2){
//     fifthdigit = Number(fifthdigit) + Number(fourthdigit.toString().substring(0,1));
//     fourthdigit = fourthdigit.toString().substring(1,2);
// }
//

console.log("firstdigit",firstdigit);
console.log("scnddigit", scnddigit)
console.log("thirddigit",thirddigit);
console.log("fourthdigit", fourthdigit)
console.log("fifthdigit", fifthdigit)
// resultStore = [fifthdigit,fourthdigit,thirddigit,scnddigit,firstdigit]
// console.log((resultStore.join("")));

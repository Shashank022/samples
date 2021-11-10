let num1 = "888";
let num2 = "6";
let store=[];
let resultStore=[];
let position=[];
let position1=[];

for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
        let result = (num1.charAt(i) * num2.charAt(j)).toString();
        if(result.length <= 1){
            result = "0"+result;
        }
        position.push(result.charAt(0));
        position1.push(result.charAt(1));
    }
}

console.log("position",position);
console.log("position1",position1);

let firstdigit = position1[0]
let scnddigit = Number(position[1]) + Number(position1[0]);
let thirddigit = Number(position[2]) + Number(position1[1]);
let fourthdigit = position.slice(-1)[0];  

if(scnddigit.toString().length >=2){
    thirddigit = thirddigit + Number(scnddigit.toString().substring(0,1));
    scnddigit = scnddigit.toString().substring(1,2)
    }

if(thirddigit.toString().length >=2){
    fourthdigit = Number(fourthdigit) + Number(thirddigit.toString().substring(0,1));
    thirddigit = thirddigit.toString().substring(1,2);
}

resultStore = [fourthdigit,thirddigit,scnddigit,firstdigit]
console.log((resultStore.join("")));

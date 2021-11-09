let num1 = "123";
let num2 = "6";
let store=[];
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
// position1.map((element, index)=>{
//     position.map((data, index)=>{
//        let result =  Number(element) + Number(data);
//         console.log(result);
//     })
// });

console.log("postion",position);
console.log("postion1",position1);
store.reverse();
console.log((store.join("")));

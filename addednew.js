let num1 = "123";
let num2 = "6";
let store=[];
let position=[];
let position1=[];
let resultStore=[];

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
for(let k = 0; k < position.length; k++){
    store.push(Number(position1[k])+1);
    resultStore.push(Number(position[k]) + (Number(position1[k])+1));
}
 store.reverse();
 console.log((store.join("")));

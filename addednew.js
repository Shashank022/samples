let num1 = "123";
let num2 = "56";
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
        resultStore.push(result);
        position.push(result.charAt(0));
        position1.push(result.charAt(1));
    }
}
for(let k = 0; k < position.length; k++){
    store.push(Number(position1[k])+1);
}
console.log("resultStore",resultStore)
console.log("position",position);
console.log("position1",position1);

const rowLen = store.length;
store.map((element, i, array) => {
    if (rowLen === i + 1) {
        element = position1[0];
        delete array[0];
        array.splice(0, 0, Number(element))
    } else{
        console.log("elementelementelement",element)
    }
});
store.reverse();
console.log((store.join("")));

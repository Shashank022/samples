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
for(let k = 0; k < position.length; k++){
    store.push(Number(position1[k])+1);
}

const rowLen = store.length;
store.map((element, i, array) => {
    if (rowLen === i + 1) {
        element = position1[0];
        delete array[0];
        array.splice(0, 0, Number(element))
    }
})
store.reverse();
console.log((store.join("")));

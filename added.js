
let num1 = "123";
let num2 = "6";
let store=[];

for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
        const result = num1.charAt(i) * num2.charAt(j);
        let result1 = result.toString();
        if (result1.length >= 1) {
            let temp = result1.charAt(1);
            for(let k=-1; k<result1.length;k++){
                temp = Number(temp) + Number(result1.charAt(k));
            }
            store.push(temp);
        }
    }
}
store.reverse();
console.log((store.join("")));

let num1 = "123";
let num2 = "6";
let store=[];

for (let i = num1.length - 1; i >= 0; i--) {
	for (let j = num2.length - 1; j >= 0; j--) {
		const result = num1.charAt(i) * num2.charAt(j);
		let result1 = result.toString();
		for(let k=-1; k<result1.length;k++){
			if (result1.length >= 1) {
				let temp = result1.charAt(k);
				console.log("temptemptemptemp",temp)
				console.log(Number(result1.charAt(1)))
				temp = Number(temp) + Number(result1.charAt(1));
				store.push(temp);
			}
			//let temp = Number(temp) + Number(result1.charAt(k));
		}
	}
}
//store.reverse();
console.log((store.join("")));
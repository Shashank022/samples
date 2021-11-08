let num1="123";
let num2="6";

for(let i=num1.length-1;i>=0;i--){
	for(let j=num2.length-1;j>=0;j--){ 
			const result = num1.charAt(i) * num2.charAt(j);
			console.log("result =", result,"POSITION OF I:",num1.charAt(i),"POSITION OF J",num2.charAt(j));
			let result1 = result.toString();
			let result2 = []; 
			if(result1.length > 1){
 			console.log("result1.length ", result1.length);
				let temp = result1.charAt(0);
				temp = Number(result1)+Number(temp);
				result2.push(temp);
			}
			console.log("result2 ", result2);
		}
	}

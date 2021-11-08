let num1="123";
let num2="456";

for(let i=0;i<num1.length;i++){ 
	for(let j=num2.length-1;j>=0;j--){ 
			console.log("num1.charAt(i)I:", num1.charAt(i) , "num2.charAt(j)J:", num2.charAt(j));
			const result = num1.charAt(i) * num2.charAt(j);
			console.log("result =",num1.charAt(i),num2.charAt(j));
		}
	}

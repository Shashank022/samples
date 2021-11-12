let num1 = "849";
let num2 = "88";
let store=[];
let resultStore=[];
let oddOnes = [];
let evenOnes = [];

for (let i = num1.length - 1; i >= 0; i--) {
	for (let j = num2.length - 1; j >= 0; j--) {
		let result = (num1.charAt(i) * num2.charAt(j)).toString();
		if(result.length <= 1){
			result = "0"+result;
		}
		store.push(result);
	}
}
for (let k = 0; k < store.length; k += 2) {
	oddOnes.push(store[k]);
	store[k+1] && evenOnes.push(store[k + 1]);
}

let firstdigit = oddOnes[0].charAt(1);
 let scnddigit = Number(oddOnes[0].charAt(0)) + Number(oddOnes[1].charAt(1)) + Number(evenOnes[0].charAt(1));
 let thirddigit = Number(oddOnes[1].charAt(0)) + Number(oddOnes[2].charAt(1)) + Number(evenOnes[0].charAt(0))+ Number(evenOnes[1].charAt(1));
let fourthdigit = Number(oddOnes[2].charAt(0)) + Number(evenOnes[1].charAt(0)) + Number(evenOnes[2].charAt(1));
let fifthdigit = Number(evenOnes[2].charAt(0));

if(scnddigit.toString().length >=2){
	thirddigit = thirddigit + Number(scnddigit.toString().substring(0,1));
	scnddigit = scnddigit.toString().substring(1,2)
}

if(thirddigit.toString().length >=2){
	fourthdigit = Number(fourthdigit) + Number(thirddigit.toString().substring(0,1));
	thirddigit = thirddigit.toString().substring(1,2);
}

if(fourthdigit.toString().length >=2){
	fifthdigit = Number(fifthdigit) + Number(fourthdigit.toString().substring(0,1));
	fourthdigit = fourthdigit.toString().substring(1,2);
}

resultStore = [fifthdigit,fourthdigit,thirddigit,scnddigit,firstdigit]
console.log((resultStore.join("")));

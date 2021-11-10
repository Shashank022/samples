let num1="123";
let num2="456";

for(let i=0;i<num1.length;i++){ 
	for(let j=num2.length-1;j>=0;j--){ 
			console.log("num1.charAt(i)I:", num1.charAt(i) , "num2.charAt(j)J:", num2.charAt(j));
			const result = num1.charAt(i) * num2.charAt(j);
			console.log("result =",num1.charAt(i),num2.charAt(j));
		}
	}

// position1.map((element, index)=>{
//     result.push(element);
//     for(let k=1;k<position.length;k++){
//         let resultSet =  Number(element) + Number(position[k]);
//         result.push(resultSet);
//         console.log("position[k]",position[k])
//     }
// });



let num1 = "123";
let num2 = "6";
let store=[];
let position=[];
let position1=[];
let result=[];
let resultStore=[];

for (let i = num1.length - 1; i >= 0; i--) {
	for (let j = num2.length - 1; j >= 0; j--) {
		let result = (num1.charAt(i) * num2.charAt(j)).toString();

		if(result.length <= 1){
			result = "0"+result;
		}
		//store.push(result);
		position.push(result.charAt(0));
		position1.push(result.charAt(1));
	}
}
for(let k = 0; k < position.length; k++){
	console.log("position[k]", position[k]);
	console.log("position[k+1]", (Number(position1[k])+1));
	store.push(Number(position1[k])+1);
	resultStore.push(Number(position[k]) + (Number(position1[k])+1));
}

//numberStore = [...result,...position1];
//console.log("resultSet",result);
// console.log("store",store);
// console.log("resultStore",resultStore);
// console.log("postion",position);
//56088
//console.log("postion1",position1);
store.reverse();
console.log((store.join("")));

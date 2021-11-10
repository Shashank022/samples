let num1 = "888";
let num2 = "6";
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
        position.push(result.charAt(0));
        position1.push(result.charAt(1));
    }
}

console.log("position",position);
console.log("position1",position1);

let first = position1[0]
let xylist = Number(position[1]) + Number(position1[0]);
let listxy = Number(position[2]) + Number(position1[1]);
let lastItem = position.slice(-1)[0];

if(xylist.toString().length >=2){
    listxy = listxy + Number(xylist.toString().substring(0,1));
    xylist = xylist.toString().substring(1,2)
    }

if(listxy.toString().length >=2){
    lastItem = Number(lastItem) + Number(listxy.toString().substring(0,1));
    listxy = listxy.toString().substring(1,2);
}

resultStore = [lastItem,listxy,xylist,first]
console.log((resultStore.join("")));

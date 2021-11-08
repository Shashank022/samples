function reducer(theNumArray) {
    var i, sum = 1;
    for (i = 0; i < theNumArray.length; i++) {
        sum *= theNumArray[i];
    }
    return sum;
}

function persistence(num) {
    var numArray = num.toString().split('').map(Number);
    return reducer(numArray);
}

console.log(persistence(485));
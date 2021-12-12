function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['Shaikh', 'Mohammed', 'Shahazad']);
strArray.push('Rahul');
numArray.push(25);
console.log(strArray);
console.log(numArray);

var fruits = ['mango', 'jack fruit', 'orange', 'lichi'];

console.log(fruits);

// add a value on the array at the end by using push  //

fruits.push('apple');
console.log(fruits);


// remove an item at the end by using pop //

fruits.pop();
fruits.pop();
console.log(fruits);

// find a removed item //

var returnFruits = fruits.pop();

console.log(fruits);
console.log(returnFruits);

// remove a value of an array at the start // 

fruits.shift('berry');
console.log(fruits);

// add a new value to the first  //

fruits.unshift('banana');
console.log(fruits);


// ------------------trying again to understand better-------------------- //

var scores = [20, 40, 50, 90, 100];

console.log(scores);

// add item on last position of array by using push //

scores.push(150);
scores.push(160);

console.log(scores);

// remove Item from array by using pop //

scores.pop();
scores.pop();

console.log(scores);

// find the last removed items from array by remove using var 

var test = scores.pop();
console.log(scores);
console.log(test);


// add a value to array in as first item //

scores.unshift(200);
console.log(scores);

// remove the first items from array //

scores.shift();
console.log(scores);




var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'mango';
console.log(fruits);
fruits.pop();
fruits.push('watermelon');
console.log(fruits);
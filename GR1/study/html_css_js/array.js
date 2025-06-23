const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

const found = numbers.find(n => n > 3);
console.log(found); // 4

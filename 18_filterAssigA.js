const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(`---------------------------------------------------------------------------`);
console.log(`1. Find out all the numbers which are greater than 50 and log on console`);
let newArray = arrayNumbers.filter((element) => element > 50);
console.log(newArray);
console.log(`---------------------------------------------------------------------------`);
console.log(`2. Find out all the even number and log on console`);
newArray = arrayNumbers.filter((element) => element % 2 == 0 );
console.log(newArray);
console.log(`---------------------------------------------------------------------------`);
console.log(`3. Find out all the odd numbers and log on console`);
newArray = arrayNumbers.filter((element) => element % 2 != 0 );
console.log(newArray);
console.log(`---------------------------------------------------------------------------`);
console.log(`4. Find out all the numbers which are multiple of 5`);
newArray = arrayNumbers.filter((element) => element % 5 === 0);
console.log(newArray);
console.log(`---------------------------------------------------------------------------`);
console.log(`5. Find out all numbers which are between 20 and 50`);
newArray=arrayNumbers.filter((element)=>element>=20 && element <= 50)
console.log(newArray);

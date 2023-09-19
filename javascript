// First Task
// here are the add, minus, divide,into
function mindGame (number){
let sum = number*3 ;
let sumAdd = sum + 10;
let sumDivide = sumAdd /2;
let sumMinus = sumDivide - 5;
return sumMinus;
}
const input = 2;
const output = mindGame(input);
console.log(output);
// Second problem
// here are even and odd number
function evenOdd(name)
{
const check = name.length;
if( check % 2 === 0){
console.log('even')
}
else{console.log('odd')}
return check;
}
const inputName = 'abul';
const outputName = evenOdd(input);
// Third Task
function isLGSeven(digit){
const different = digit -7;
if( different < 7){
console.log(different);
}
else{console.log(digit*2)}
return different;
}
const userInput = 14;
const userOutput =isLGSeven(userInput);
// Fouth Task
// How to search negative data
let ages = [12, 54, -5, -8, 50, 01, -20];
function findingBadData(ages){
let badData = [];
const finnalData = badData.length;
for (let i = 0; i < ages.length; i++){
const data = ages[i];
if( i > 0){
console.log('bad data');
badData.push(i);
}
else{ console.log('good data')}
}
return finnalData;
}
const inputData = findingBadData(ages);
// five Task
// How to convert
function gemsToDiamond (gems1, gems2, gems3){
let firstGemsCapacity = gems1 * 21;
let secondGemsCapacity = gems2 * 32;
let thirdGemsCapacity = gems3 * 43;
let totalDimond = firstGemsCapacity + secondGemsCapacity + thirdGemsCapacity;
if(totalDimond < 1000*2){
console.log(totalDimond)
}
else {
const anotherDimond = totalDimond - 2000;
return anotherDimond;
}
}
const gemsList = gemsToDiamond(20, 3, 50);
console.log(gemsList);
// the task is ended.............

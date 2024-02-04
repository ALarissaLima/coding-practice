let arrayNum = [1, 3, 4, -4, 2, 3, 8, 2, 5 - 7, 54, 76, 789, 23, 98]
let arrayPar1= [];
let arrayImpar = [];
let arrayTemp = [1];
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 == 0) {
        arrayPar1 = arrayNum[i]
        arrayTemp.push(arrayPar1);
        console.log(`par ${arrayTemp.indexOf(arrayPar1)} = ${arrayPar1}`)
    } 
}

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 !== 0) {
        arrayImpar = arrayNum[i]
        arrayTemp.push(arrayImpar);
        console.log(`Impar ${arrayTemp.indexOf(arrayImpar)} = ${arrayImpar}`)
    } 
}


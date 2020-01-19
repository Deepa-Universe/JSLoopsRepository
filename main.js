"use strict"; //Javascript to be executed in "strict mode"

//Loop

//Array
let arrayObj = [111, 222, 333, "Universe", true, "Abundance", "Magic", 444, 555, "Miracles"];

//for loop
for (let counter = 0; counter <= arrayObj.length - 1; counter++) {
    console.log(arrayObj[counter]);
}

console.log("*****************************************************************************");

//for-of (Works like foreach)
for (let itemsOfArrayObj of arrayObj) {
    console.log(itemsOfArrayObj); //Values present in each position of the loop
}

console.log("*****************************************************************************");

//for-in (works like foreach)
for (let itemsInArrayObj in arrayObj) {
    console.log(itemsInArrayObj); //Values of the position of the loop
}

console.log("*****************************************************************************");

for (let itemsOfArrayObj of arrayObj) //Prints each values at each position //Not desired O/P
{
    for (let itemsInArrayObj in arrayObj) {
        console.log(itemsInArrayObj + "-" + itemsOfArrayObj);
    }
}

console.log("*****************************************************************************");

for (let itemsOfArrayObj of arrayObj) {
    let counterPosition = 0;
    //counterPosition++;
    console.log(itemsOfArrayObj + " " + counterPosition); //It does not loop through, it is printing the value on the whole.
    //counterPosition++;
}

console.log("*****************************************************************************");

// For and If Statement
let arrayObjNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let data1 of arrayObjNumber) {

    if (data1 % 2 === 0) {
        console.log("Even number- " + data1);
    }
    else {
        console.log("Odd number- " + data1);
    }
}

console.log("*****************************************************************************");

//Assignment Work (To print the reverse list of array- using for loop)
let arrayObj1 = [111, 222, 333, "Universe", true, "Abundance", "Magic", 444, 555, "Miracles", "Breakthroughs"];

//for loop
for (let counter = arrayObj1.length - 1; counter >= 0; counter--) {
    console.log(arrayObj1[counter]);
}

//Assignment Work 2 (Print comma separated even no. and Odd no.s using only 1 loop)
let arrayObject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let OddNo = null;
let EvenNo = null;
for (let count = 0; count <= arrayObject.length - 1; count++) {

    if (arrayObject[count] % 2 === 0) {
        if (EvenNo === null) {
            EvenNo = arrayObject[count];
        }
        else {
            EvenNo = EvenNo + "," + arrayObject[count];
        }
    }
    else {
        if (OddNo === null) {
            OddNo = arrayObject[count];
        }
        else {
            OddNo = OddNo + "," + arrayObject[count];
        }
    }
}
console.log(` ${EvenNo} ; ${OddNo} `);

console.log("*****************************************************************************");

// Break Statement in loop

let arrayObj11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let data2 of arrayObj11) {
    console.log(data2); //1,2,3,4,5 //Since it is checking the values at various positions
    if (data2 === 5) {
        break;
    }

}
console.log("**********************************************");
// Continue Statement
for(let data3 of arrayObj11){
    if(data3===5){
        continue;
    }
    console.log(data3);  //It will print all the data
}
console.log("****************");
for(let data3 of arrayObj11){
    if(data3===5){
        console.log(data3); //5
        continue;
        console.log(data3); //It wont print anything, since the control leaves from continue to forloop
    }
      //It will print all the data
}
//Note: When a continue statement executes, it breakouts the current loop's iteration and continues to the next loop's iteration.







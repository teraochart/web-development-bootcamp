console.log("Print all numbers between -10 and 19")
var ex1 = -10

while( ex1 < 20) {
    console.log(ex1);
    ex1++;
}

console.log("Print all even numbers between 10 and 40")

var ex2 = 1

while(ex2 <=40) {
    if(ex2 >= 10 && ex2 % 2 === 0){
        console.log(ex2);
    }
    ex2++;
}

console.log("Print all odd numbers between 300 and 333")

var ex3 = 1

while(ex3 < 334) {
    if (ex3 > 299 && ex3 % 2 !== 0) {
        console.log(ex3);
    }
    ex3++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

var ex4 = 1

while(ex4 < 51) {
    if(ex4 > 4 && ex4 % 5 === 0 && ex4 % 3 === 0) {
        console.log(ex4);
    }
    ex4++;
}


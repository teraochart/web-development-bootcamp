console.log("Print all numbers between -10 and 19")

for(var ex1 = -10; ex1 < 20; ex1++) {
    console.log(ex1)
}

console.log("Print all even numbers between 10 and 40")

for (var ex2 = 1; ex2 < 41; ex2++) {
    if(ex2 > 9 && ex2 % 2 === 0) {
        console.log(ex2);
    }
}

console.log("Print all odd numbers between 300 and 333")

for (var ex3 = 1; ex3 < 334; ex3++) {
    if (ex3 > 299 && ex3 % 2 !== 0) {
        console.log(ex3);
    }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

for (var ex4 = 1; ex4 < 51; ex4++) {
    if (ex4 > 4 && ex4 % 5 === 0 && ex4 % 3 === 0) {
        console.log(ex4);
    }
}
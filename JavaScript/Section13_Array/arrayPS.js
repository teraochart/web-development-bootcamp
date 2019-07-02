
/*PRINT REVERSE (Use loop)
takes an array as an argument
and prints out the elements in the array in reverse order*/


function printReverse(array){
    //var rev = [1,2,3,4,5,6];
    for(var i = array.length - 1; i >=0; i--){
        console.log(array[i]);
    }
}

// Solution: Same as mine!



/*IS UNIFORM (Return true false, use loop, variable that keeps track of 1st item in index and compares)
takes an array as an argument
and returns true if all elements in array are the same*/

function isUniform(uni){
    //var uni = [1,1,1,1]
    var result = "True!"  

    uni.forEach(function(same){
        var first = uni[0]
        if(first !== same) {
            result = "False!"
        }

    })
    console.log(result)
}

/*Solution: 
function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < array.length, i++){
        if(arr[i] !== first){
        return false
        }
    }
    return true;
}*/


/*SUM ARRAY (Use loop, have a var that stores the sum that you keep adding to)
Accepts array of numbers and returns the sum of all the numbers in the array*/

function sumArray(num){
    //var num = [1,5,2];
    var sum = 0

    num.forEach(function(add){
        sum = sum + add;
    })

    console.log(sum)

}

/*Solution: 
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}*/



/*MAX (Use loop, use a var that stores the max number)
Accepts array of numbers and returns maximum (largest) number in the array*/

function max(maxArray){
    //var maxArray = [1,12,3];
    var largest = 0

    maxArray.forEach(function(compare){
        if(compare > largest){
            largest = compare;
        }
    })
    console.log(largest);
}

/*Solution:
function max(arr){
    var max = arr[0];
    for(var i = 1; i < array.length, i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}*/
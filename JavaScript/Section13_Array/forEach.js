var nums = [1,2,3,4,5]

function myForEach(arr,func) {
    //loops through array
    for(var i = 0; i < arr.length; i++){
    //call func for each item in array
    func(arr[i]);
    }
}

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++){
        //call func for each item in array
        func(this[i]);
}

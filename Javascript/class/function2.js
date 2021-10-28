function add(a,b){
    //declaring sum and initialising it with the sum of parameters
    var sum = a +b;
    //returning sum to any calling function
    return sum;
}

function sub(){
    //assigning result with the value of function add minus 10
    var result = add(5,8) - 10;
    //displaying the values of result
    console.log(result);
}
sub();

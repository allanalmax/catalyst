// function myfunction(){
//     // let count = 10;
//     //for var = 10, if item is < 5: print(item+1)
//     for(var item = 0; item < 5; item ++){

//         console.log('item', item);

//     }
// }
// myfunction()
// console.log(item);

// for(var item = 0; item < 4; item++){
//     console.log(item);
// }
// console.log('outside the loop', item)

//static function
function add(){
    let num1 = 10, num2 = 20, ans = num1 + num2;
    console.log(ans);
    return num1;
    // console.log(ans);
}
add();
console.log(add())

// parameters, dynamic functions
function add(a, b){  //a and b are parameters
    let ans = a + b;
    return ans;
}
console.log(add(2, 5))  //2 and 5 are arguments
console.log(add(10, 9))
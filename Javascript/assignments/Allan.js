/**This is a dynamic funtion
 * declaration of greater and assigning it with the two parameters
 * the function determines which is the bigger parameter
 * returning the larger parameter to any calling function
 */

function tests(test1, test2) {
    let greater = test1 > test1 ? test1 : test2;
    return greater;
}

/**Declaring coursework with cs as a parameter
 * assigning it with the sum of cswork and the result of the above function
 * displaying the value of coursework
 * 
*/
function coursework(cswork) {
    let coursework = cswork + tests(80, 80);

    console.log(coursework);
    return coursework;
}

/**This is a function avg with a parameter a
 * assigning avg to the result of function coursework divided by parameter a
 * returning the value of the function
 * 
*/
function avg(a) {
    let avg = coursework(90) / a;
    return avg;
}

/**dynamic function
 * declaring exm and assigning it to multiplication of result of the above 
 * function and percentage of a
 * returning the value of exm
*/
function crsmark(a) {
    let exm = avg(2) * (a / 100);
    return exm;
}

function exam(a) {
    let fexam = (60 / 100) * a;
    return fexam;

}
/**below is a static function 
 * declaring fmark and assigning it to sum of result of function exam and result of  
 * function crsmark
 * displaying the value
 * calling the function fnal
*/
function fnal() {
    let fmark = exam(75) + crsmark(40);
    console.log(fmark);

}
fnal();
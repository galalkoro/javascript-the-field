/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var n = document.getElementById("number").value
        result = factorial(n)
       
        alert("The factorial of " + n + " is " + result);
        //console.log("The factorial of " + n + " is " + result); 
        // for developer tool, open your brouser and inspect the console in oede to see the orint result you can uncomment the console log.
        
    function factorial(n){
        //base case  when we return the final element of the factorial, which is 1.
        if(n == 0 || n == 1){
            return 1;
            //recursive case a recursive function is a nonleaf function that calls itself.
        }else{
            return n * factorial(n-1);
        }
    }
    });
})();

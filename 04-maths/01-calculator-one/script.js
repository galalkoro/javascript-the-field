/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var operandOne = parseInt(document.getElementById("op-one").value);
        var operandTow = parseInt(document.getElementById("op-two").value);
        var addition = operandOne + operandTow;
        alert(addition);
     
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

        var operandOne = parseInt(document.getElementById("op-one").value);
        var operandTow = parseInt(document.getElementById("op-two").value);
        var substraction = operandOne - operandTow;
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

        var operandOne = parseInt(document.getElementById("op-one").value);
        var operandTow = parseInt(document.getElementById("op-two").value);
        var multiplication = operandOne * operandTow;
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        var operandOne = parseInt(document.getElementById("op-one").value);
        var operandTow = parseInt(document.getElementById("op-two").value);
        var division = operandOne / operandTow;
        alert(division);
    });
  
})();

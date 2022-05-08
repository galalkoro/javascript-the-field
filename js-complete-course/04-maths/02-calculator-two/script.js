/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation

        var result = 0;
        var operandOne = parseInt(document.getElementById("op-one").value);
        var operandtwo = parseInt(document.getElementById('op-two').value);
        switch (operation){
            case "addition":
                result = (operandOne + operandtwo);
                alert(result);
                break;
                case "substraction":
                    result = (operandOne - operandtwo);
                    alert(result);
                    break;
                    case "multiplication":
                        result = (operandOne * operandtwo);
                        alert(result);
                        break;
                        case "division":
                            result = (operandOne / operandtwo);
                            alert(result);
                            break;
        }     
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

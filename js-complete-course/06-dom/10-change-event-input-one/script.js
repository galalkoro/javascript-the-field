/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   document.getElementById("pass-one").addEventListener("keydown", () => {
        var elementCounter = document.getElementById("counter");
        var elementPassOne = document.getElementById("pass-one");
        var passWordLength = elementPassOne.value.length;

        elementCounter.innerHTML = passWordLength.toString() + "/10";
        console.log(elementCounter.innerHTML);

        if (elementCounter.innerHTML==="10/10"){
            document.getElementById("pass-one").setAttribute("disabled", " ");
        }
    }) 
   
})();

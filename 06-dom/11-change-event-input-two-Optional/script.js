/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("pass-one").addEventListener("keydown", () => {

        const fieldPassWord = document.getElementById("pass-one");
        const valiDity = document.getElementById("validity");
        const passWordLength = fieldPassWord.value.length;
        const amountNum = (fieldPassWord.value.match(/\d/g) || []).length;

        if (passWordLength > 5 && amountNum > 2){
            valiDity.innerText = " Ok"
             } else {
          
                valiDity.innerText = " not OK"
        }



    })

})();

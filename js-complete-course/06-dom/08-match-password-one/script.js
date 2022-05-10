/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var PassWord = document.getElementById("pass-one");
        var reEnterPassword = document.getElementById("pass-two");

        if (PassWord.value !== reEnterPassword.value){
            PassWord.style.borderColor = "red";
            reEnterPassword.style.borderColor = "red";
                 } else {
                    PassWord.style.borderColor = "green";
                  reEnterPassword.style.borderColor = "green";
             }
    })


})();

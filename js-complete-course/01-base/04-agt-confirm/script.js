/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function proces() {

    // your code here
    var age = window.prompt("How old are you?");
    var gender = window.prompt("Whats is your gender?");
    var town = window.prompt("which city do you live?");
    document.write("" + age + "" + gender+ "" +town);
    if (confirm(`is this correct ? ${age} ${gender} ${town}`) == true){

        alert("thanks");
    }
    else{
        proces();
    }

})();

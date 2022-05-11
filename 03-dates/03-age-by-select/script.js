/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   var jaar = document.getElementById("dob-year");
   var knop = document.querySelector('button');

   knop.onclick = function(){
       alert(2022 - jaar.value)

       // for developer tool when they are using console  to print the result 
       console.log(2022 - jaar.value)
   }


})();

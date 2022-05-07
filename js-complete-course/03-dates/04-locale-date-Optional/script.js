/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let today = new Date();
    let MM = String(today.getMonth() + 1).padStart (2, "0");
    let DD = String(today.getDate()).padStart(2, "0");
   // let WW = String(today.getDay() + 7).padStart(7, "0"); I want to get week days as well but I could not 
   // need help from couches 


    let year = today.getFullYear();

    today =  DD + '_' + MM + '_' + year;
    document.getElementById("target").innerHTML = today;
    
})();

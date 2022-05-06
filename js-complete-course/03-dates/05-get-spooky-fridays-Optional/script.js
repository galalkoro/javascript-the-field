/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var moon    = ["January", "February", "March", "April",
                        "May", "June", "July", "August",
                       "September", "October", "November", "December"];

    var day       = 13;
    var run       = document.getElementById('run');
    var twelvemonth     = document.getElementById('year');
   
    var date = new Date();

    function  myFunction(){

        var year = twelvemonth.value;
        var fridays = []; // Square brackets You're telling the interpreter to create a new runtime array.

        date.setFullYear(year);
        date.setDate(day);

        for (month = 0; month < moon.length; month++) {
            date.setMonth(month)
            if (date.getDay() == 5) {
                fridays.push(moon[month])
            }
        }

        var result = "In: " + year + " ";
        for (i = 0; i < fridays.length; i++) {
            alert(fridays[i] + " has a Friday 13th.")
        }
    }

    //The addEventListener() method allows you to add event listeners on any HTML DOM object
    run.addEventListener('click', myFunction)
})();

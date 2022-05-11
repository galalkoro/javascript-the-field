/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        var i;
        const td = new Array();
        td[0] = '0';
        td[1] = '1';
        td[2] = '2';
        td[3] = '3';
        td[4] = '4';
        td[5] = '7';
        td[6] = '8';
        td[7] = '9';
        td[8] = '10';
        
        
        console.log(td);
        
        const numberConverter = td.map(Number);
        
        const sum = numberConverter.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
        
        const average = numberConverter.reduce(
          (accumulator, currentvalue, index, numArray) => {
            return accumulator + currentvalue / numArray.length;
          },
          0
        );
        
        const average2 =
          numberConverter.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) / numberConverter.length;
        
        for (i = 99; i < 100; i++) {
          console.log(
            `The sum of all the elements is: ${sum}. <br> The average of all the elements is: ${average2}`
          );}

    });

})();

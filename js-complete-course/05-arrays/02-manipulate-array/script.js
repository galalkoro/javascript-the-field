/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    const withoutFirstAndLast = fruits.slice(1, -1);
    console.log(withoutFirstAndLast);
    //alert(withoutFirstAndLast); on console is match better to see the results
    fruits.unshift("banana");
    let newArry = fruits.push("kiwi");
    console.log(fruits);
    console.log(newArry);
alert(fruits)

})();

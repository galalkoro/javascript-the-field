/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function getRandom() {

    // your code here
    let randomC_olor = ("#")
    function randomColor() {
        const random = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomC_olor + random;
        
    }
    run.addEventListener('click', randomColor);
   
})();
 
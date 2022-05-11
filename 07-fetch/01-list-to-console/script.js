/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
  
    async function fetchData() {
        let response = await fetch('/js-complete-course/_shared/api.json');
        let data = await response.json(); // if you replace json with text then you will get full text data
        console.log(data);
    }

    fetchData();
    
})();

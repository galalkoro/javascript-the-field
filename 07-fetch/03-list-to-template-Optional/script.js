/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", fetchFunction)
   async function fetchFunction() {
     const resData = await fetch("/_shared/api.json");
     const conData = await resData.json();
    // console.log(conData);
    var targetData = document.getElementById("target");

    conData.heroes.forEach(element => {
        var list = document.createElement('li');
       var header = document.createElement('h4')
       var paragrapgh  = document.createElement('p');
       var  emphasis = document.createElement('em')
       target.append(list);
       target.append(paragrapgh);
       list.append(header);
       list.append(emphasis);
       header.innerHTML = element.name;
       paragrapgh.innerHTML = element.abilities;
       emphasis.innerHTML = element.alterEgo;
        
    });
     
  
   }

})();

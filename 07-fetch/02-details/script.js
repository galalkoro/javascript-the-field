/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", fetchData)
       
   async function fetchData() {
       const res = await fetch("/_shared/api.json");
       const heroData = await res.json();
    //console.log(heroData);

    var inPut = document.getElementById("hero-id").value; 
   
   // console.log(inPut);
   heroData.heroes.forEach(element => {


    if (element.id == inPut) { 
       // console.log(element.name);
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
    } else{
       console.log(heroData); // on console log 
    }
       
   });
    }
})();

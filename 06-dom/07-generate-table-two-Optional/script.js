/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
 
    
  
    function createTables(maxNum,limit){
       
        const table = document.createElement('table');
        for(let i = 0;i<maxNum + 1;i++){
            
            const row = document.createElement('tr');
            for(let j = 0;j<limit + 1;j++){
                const td = document.createElement('td');
                //Below four lines are new
                if(i === 0 && j === 0) td.innerHTML = '';
                else if(i === 0) td.innerHTML = j;
                else if(j === 0) td.innerHTML = i; 
                else td.innerHTML = i*j;
                row.appendChild(td);
                row.setAttribute("bgcolor", "white");
               
              
            }
            table.appendChild(row)
         
        }
        document.body.appendChild(table)
       
    }
    createTables(10,10);
})();

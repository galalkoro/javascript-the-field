/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var div = document.getElementById("target");
    var row = document.createElement("row");
    document.getElementById('target').style.backgroundColor='green';
    document.getElementById('target').style.fontSize='2.5em';
    document.getElementById('target').style.padding = "2em";
   

    for (var i = 1; i < 11; i++) {
        var cell = document.createElement("td");        
        var cellText = document.createTextNode(" The row No"+ "-"+ i);
        cell.appendChild(cellText);                             
        row.appendChild(cell);                                 
        tbody.appendChild(row);
        table.appendChild(tbody);                                
        div.appendChild(table);                                 
        table.setAttribute("border",   "8");   
        table.setAttribute("fontsize", "4em");
      
    }

})();

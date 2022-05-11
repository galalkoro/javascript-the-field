/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var elementSource = document.getElementById("source"); // where source id link image 
    var img = elementSource.attributes.getNamedItem("data-image").value; // is attribute name image 
    var elementTarget = document.getElementById("target");
    var image = document.createElement("img") // new id
    image.src = img;
    elementTarget.appendChild(image);
    console.log(elementSource);
    elementSource.remove();


})();

/** usage of constant and temolate literal. 
*Template literal helps in web portal main title in multiple lines
The value is also constant, to ensure its immutable.
*/ 
const portalTitle= `Stephanie Music 
                     gallery`;

// selecting an element
const homeLabelElement=document.getElementById('home-label');

// modifying an element data
homeLabelElement.textContent=portalTitle;
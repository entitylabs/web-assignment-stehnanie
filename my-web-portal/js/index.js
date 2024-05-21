/** usage of constant and temolate literal. 
*Template literal helps in web portal main title in multiple lines
The value is also constant, to ensure its immutable.
*/ 
const portal_title= `Stephanie Music 
                     gallery`;

// selecting an element
const home_label=document.getElementById('home-label');

// modifying an element data
home_label.textContent=portal_title;
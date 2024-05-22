const header= document.getElementById('header');

const menuUrl = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/menu.json"

fetchMenu();

/* 
*This method fetches the menu items as a json and resolve them from promise
* The mentod utilises arrow notation
*/
function fetchMenu(){

    fetch(menuUrl).then( response=> response.json())
                .then(menuItems=> {

                    appendMenuItem(menuItems);
                    
                });
}


/* 
*This method uses a forEach loop to create each menu item 
*/
function appendMenuItem(menuItems){

    menuItems.forEach(element => {

        const menuItem = document.createElement("a");
        menuItem.setAttribute('href',element.url)
        menuItem.textContent=element.name;
        header.appendChild(menuItem);
        menuItem.setAttribute('class', 'menu-item');
                       
    });
   
}
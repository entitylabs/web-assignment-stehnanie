const header= document.getElementById('header');

const menu_url = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/menu.json"

fetch_menu();

/* 
*This method fetches the menu items as a json and resolve them from promise
* The mentod utilises arrow notation on the else block
*/
function fetch_menu(){

    fetch(menu_url).then( response=> response.json())
                .then(menuItems=> {

                    append_menu_item(menuItems);
                    
                });
}


/* 
*This method uses a forEach loop to create each menu item 
*/
function append_menu_item(menuItems){

    menuItems.forEach(element => {

        const menuItem = document.createElement("a");
        menuItem.setAttribute('href',element.url)
        menuItem.textContent=element.name;
        header.appendChild(menuItem);
        menuItem.setAttribute('class', 'menu-item');
                       
    });

   
}
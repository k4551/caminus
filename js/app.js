/******************************************************************************
*   # Dynamic navigation 
*
******************************************************************************/

const navigationMenu = document.querySelector('#navigation-menu');

// function to add new item dynamicaly
function addToMenu(item){
    // create new menu item 
    const newMenuItem = document.createElement('li');
    newMenuItem.classList.add('menu-item');

    // create new menu link
    const newMenuLink = document.createElement('a');
    newMenuLink.classList.add('menu-link');
    newMenuLink.textContent = item.name;
    newMenuLink.setAttribute('href', item.link);
    if(item.isActive)
        newMenuLink.classList.add('menu-link-active');


    // append link to item then item to menu 
    newMenuItem.appendChild(newMenuLink);
    navigationMenu.appendChild(newMenuItem);
}


// implementation for navigation menu 
addToMenu({name:'section 1', link:"#section1", isActive: true});
addToMenu({name:'section 2', link:"#section2", isActive: false});
addToMenu({name:'section 3', link:"#section3", isActive: false});
addToMenu({name:'section 4', link:"#section4", isActive: false});
addToMenu({name:'section 5', link:"#section5", isActive: false});
addToMenu({name:'section 6', link:"#section6", isActive: false});
addToMenu({name:'section 7', link:"#section7", isActive: false});
addToMenu({name:'section 8', link:"#section8", isActive: false});
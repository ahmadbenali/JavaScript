let menuContainer = document.getElementById('menu-list');


fetch('menu.json')
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.menu.length; i++) {
            let menuItem = document.createElement('li');
            menuItem.textContent = data.menu[i].name+ ' - $' + data.menu[i].Price+' - ' + data.menu[i].Available;
            menuContainer.appendChild(menuItem);
        }

        localStorage.setItem('menuData', JSON.stringify(data.menu));
    });


const header = function () {

    /* function to create the header with the restaurant's title and 
    3 links to change website's content 
    */
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    header.appendChild(h1);

    h1.textContent = 'Restaurant Tastes Delicious';

    const divChanges = document.createElement('div');

    header.appendChild(divChanges);

    divChanges.classList.add('divChanges');

    const divHome = document.createElement('div');
    const h3Home = document.createElement('h3');
    h3Home.id = "h3Home";

    divHome.appendChild(h3Home);
    h3Home.textContent = 'Home';

    const divMenu = document.createElement('div');
    const h3Menu = document.createElement('h3');
    h3Menu.id = "h3Menu";
    divMenu.appendChild(h3Menu);
    h3Menu.textContent = 'Menu'

    const divContact = document.createElement('div');
    const h3Contact = document.createElement('h3');
    h3Contact.id = "h3Contact";
    divContact.appendChild(h3Contact);
    h3Contact.textContent = 'Contact'

    divChanges.appendChild(divHome);
    divChanges.appendChild(divMenu);
    divChanges.appendChild(divContact);

    return header;
}

export default header;
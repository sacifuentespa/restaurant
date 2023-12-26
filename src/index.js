import './styles/normalize.css';
import './styles/style.css';
import header from './functions/header.js';
import home from './functions/home.js';
import footer from './functions/footer.js';
import contact from './functions/contact.js';
import menu from './functions/menu.js';

// executes functions for the different parts of the website
const body = document.querySelector('body');
const contentHeader = header();
const contentDiv = document.querySelector('#content');
const contentFooter = footer();
const contentHome = home();
const contentContact = contact();
const contentMenu = menu();

//insert header, footer and begins to show the home inside div with id content
body.insertBefore(contentHeader, contentDiv );
const toHome = document.querySelector('#h3Home')
const toMenu = document.querySelector('#h3Menu')
const toContact = document.querySelector('#h3Contact')

body.appendChild(contentFooter)

contentDiv.appendChild(contentHome);

//add eventListeners to change between home, Menu and contact

const eraseContent = function(){
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
      }
}

toContact.addEventListener('click', (event)=>{
    eraseContent()
    contentDiv.appendChild(contentContact);
})

toHome.addEventListener('click', (event)=>{
    eraseContent()
    contentDiv.appendChild(contentHome);
})


toMenu.addEventListener('click', (event)=>{
    eraseContent()
    contentDiv.appendChild(contentMenu);
})







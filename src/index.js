import './styles/normalize.css';
import './styles/style.css';
import header from './functions/header.js';
import home from './functions/home.js'
import footer from './functions/footer.js'


const body = document.querySelector('body');
const contentHeader = header();
const contentDiv = document.querySelector('#content');
const contentHome = home();
const contentFooter = footer();

body.insertBefore(contentHeader, contentDiv );
body.appendChild(contentFooter)

contentDiv.appendChild(contentHome);

console.log(content);


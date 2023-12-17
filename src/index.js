import './styles/normalize.css';
import './styles/style.css';
import home from './functions/home.js'

const content = document.querySelector('#content')
const newChildElement = home();

content.appendChild(newChildElement);

console.log(content)

import './styles/normalize.css';
import './styles/style.css';
import home from './functions/home.js'

const content = document.getElementById('content')

let element = home();

content.appendChild(element)

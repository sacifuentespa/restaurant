import './styles/normalize.css';
import './styles/style.css';
import header from './functions/header.js'

const body = document.querySelector('body')
const contentHeader = header();
const contentDiv = document.querySelector('#content')

body.insertBefore(contentHeader, contentDiv );

console.log(content)

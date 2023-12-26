import BeerPic from './../images/beer.jpeg';
import WinePic from './../images/wine.webp';
import gatoradePic from './../images/gatorade.webp'
import pizzaPic from './../images/pizza.jpeg';
import burgerPic from './../images/burger.jpeg';
import hotDogPic from './../images/hotDog.jpeg';

const menu = function(){


    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const h2 = document.createElement('h1');
    menu.appendChild(h2);
    h2.textContent = "Menu"

    const gridMenu = document.createElement('div');
    gridMenu.classList.add('gridMenu');
    menu.appendChild(gridMenu);

    const beer = document.createElement('div');
    beer.classList.add('beer');
    gridMenu.appendChild(beer);

    const beerImage = new Image();
    beerImage.src = BeerPic;
    beer.appendChild(beerImage);
    
    const beerh4 = document.createElement('h4');
    beerh4.textContent = "Beer $6000"
    beer.appendChild(beerh4)


    const wine = document.createElement('div');
    wine.classList.add('wine');
    gridMenu.appendChild(wine);

    const wineImage = new Image();
    wineImage.src = WinePic;
    wine.appendChild(wineImage);

    const wineh4 = document.createElement('h4');
    wineh4.textContent = "Wine (glass) $10000"
    wine.appendChild(wineh4)

    const gatorade = document.createElement('div');
    gatorade.classList.add('gatorade');
    gridMenu.appendChild(gatorade);

    const gatoradeImage = new Image();
    gatoradeImage.src = gatoradePic;
    gatorade.appendChild(gatoradeImage)

    const gatoradeh4 = document.createElement('h4');
    gatoradeh4.textContent = "Gatorade $7000"
    gatorade.appendChild(gatoradeh4)

    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
    gridMenu.appendChild(pizza);

    const pizzaImage = new Image();
    pizzaImage.src = pizzaPic;
    pizza.appendChild(pizzaImage)

    const pizzah4 = document.createElement('h4');
    pizzah4.textContent = "Pizza $12000"
    pizza.appendChild(pizzah4)


    const burger = document.createElement('div');
    burger.classList.add('burger');
    gridMenu.appendChild(burger);

    const burgerImage = new Image();
    burgerImage.src = burgerPic;
    burger.appendChild(burgerImage)

    const burgerh4 = document.createElement('h4');
    burgerh4.textContent = "Burger $16000"
    burger.appendChild(burgerh4)

    const hotDog = document.createElement('div');
    hotDog.classList.add('hotDog');
    gridMenu.appendChild(hotDog);

    const hotDogImage = new Image();
    hotDogImage.src = hotDogPic;
    hotDog.appendChild(hotDogImage)

    const hotDogh4 = document.createElement('h4');
    hotDogh4.textContent = "Hot Dog $8000"
    hotDog.appendChild(hotDogh4)

    return menu;
}

 export default menu;
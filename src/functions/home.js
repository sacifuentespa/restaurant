const home = function(){
    
    const home = document.createElement('div');
    home.classList.add('home')

    const h2 = document.createElement('h2');
    home.appendChild(h2);
    h2.textContent = 'Join us in this experience!'

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    home.appendChild(paragraph1);
    home.appendChild(paragraph2);
    home.appendChild(paragraph3);

    paragraph1.textContent = "Welcome to a world of sensory wonder, where the culinary excellence merges with a vibrant explosion of art and live music."
    
    paragraph2.textContent = "Prepare to embark on an extraordinary journey of flavors, colors, and sounds that awaken the senses. Immerse yourself in an atmosphere pulsating with mesmerizing visuals, eclectic melodies, and dishes that defy convention."
    
    paragraph3.textContent = "Embark on a psychedelic adventure with us, where every moment unfolds as a surreal celebration, inviting you to immerse yourself in an unforgettable feast for the senses."


    return home
}

export default home;
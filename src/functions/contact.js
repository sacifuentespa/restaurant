const contact = function(){

    /* function to create the header with the restaurant's title and 
    3 links to change website's content 
    */
    const contact = document.createElement('div');
    const h2 = document.createElement('h1');

    contact.appendChild(h2);

    h2.textContent = "Contact us to our channels or leave us your comment below"

    const linkWA = document.createElement('a');
    contact.appendChild(linkWA);
    linkWA.textContent = "Whatsapp 12345678910";
    linkWA.href = "https://wa.me/12345678910"


    return contact;
}

export default contact;
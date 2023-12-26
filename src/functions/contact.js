import Whatsapp from './../images/whatsapp.svg';

const contact = function(){

    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    const h2 = document.createElement('h1');

    contact.appendChild(h2);

    h2.textContent = "Contact us to our channels or leave us your comment below"

    const linkWA = document.createElement('a');   
    contact.appendChild(linkWA);

    const WhatsappIcon = new Image();
    WhatsappIcon.src = Whatsapp;
    
    linkWA.href = "https://wa.me/12345678910"
    linkWA.appendChild(WhatsappIcon);
    linkWA.insertAdjacentText('beforeend', '  Whatsapp 12345678910');

    const formContact = document.createElement('form');
    contact.appendChild(formContact);

    const divEmail = document.createElement('div');
    divEmail.classList.add('divEmail');

    const emailInput = document.createElement('input');
    const labelEmail = document.createElement('label');
    formContact.appendChild(divEmail);

    labelEmail.setAttribute('for', 'email');
    labelEmail.textContent = "Email: "

    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";

    divEmail.appendChild(labelEmail);
    divEmail.appendChild(emailInput);

    const divComment = document.createElement('div');
    divComment.classList.add('divComment');

    const commentInput = document.createElement('textArea');
    const labelComment = document.createElement('label');

    labelComment.setAttribute('for', 'comment');
    labelComment.textContent = "Leave your comment: ";

    commentInput.name = "comment";
    commentInput.id = "comment";

    formContact.appendChild(divComment);
    divComment.appendChild(labelComment);
    divComment.appendChild(commentInput);

    const submitButton = document.createElement('button');
    formContact.appendChild(submitButton);
    submitButton.textContent = "Submit";

    submitButton.addEventListener('click', (event)=>
    event.preventDefault())

    return contact;
}

export default contact;
const footer = function(){

    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');

    footer.appendChild(paragraph);

    paragraph.textContent = "Powered by: "

    const githubLink = document.createElement('a');
    githubLink.textContent = "Santiago Cifuentes"
    githubLink.href = "https://github.com/sacifuentespa"
    
    paragraph.appendChild(githubLink);

    return footer;
}

export default footer;
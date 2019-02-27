import images from '../data/images.js';

const imageDisplay = document.getElementById('image-display');

//create template

function makeImageTemplate(image) {

    const html = 
        `<li class="${image.keyword}">
            <h2>${image.title}</h2>
            <img src="${image.url}" alt="${image.description}">
            <p>Horns: ${image.horns}</p>
        </li>`;


    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
    
}

//make dom

images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageDisplay.appendChild(dom);
});
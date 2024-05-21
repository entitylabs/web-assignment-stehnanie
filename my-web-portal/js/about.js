
const aboutUrl = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/about.json";

const additionalTagsUrl = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/tags.json";

const aboutPromise = fetchAbout();

function fetchAbout() {

    return fetch(aboutUrl).then(response => response.json());
}

const additionaltags = fetchAdditionalTags();

function fetchAdditionalTags() {

    return fetch(additionalTagsUrl).then(response => response.json());
}

renderAbout();

async function renderAbout() {

    let results = await Promise.all([aboutPromise, additionaltags]);

    addAboutDetails(results[0]);

    addAboutParagraphs(results[0]);

    addStyleToFirstParagraph()

    const allTags = [...results[0].tags, ...results[1].additionaltags];

    addAboutTags(allTags);

}


function addAboutDetails(about) {

    addAboutImage(about);

}



function addAboutImage(about) {

    const aboutImage = document.getElementById('about-image');

    aboutImage.setAttribute('src', about.image);

}


function addAboutParagraphs(about) {


    const aboutBody = document.getElementById('about-me');

    about.paragraphs.forEach(element => {

        paragraph = document.createElement("p");

        paragraph.innerText = element.text;

        aboutBody.appendChild(paragraph)

    });

}

function addStyleToFirstParagraph() {

    const aboutBody = document.getElementById('about-me');

    const children = aboutBody.childNodes;

    let count = 0;

    children.forEach(child => {

        if (child.tagName == 'P' && count == 0) {

            child.setAttribute("class", "first");
            count++;
        }
    })


}


function addAboutTags(tags){

    const aboutBody = document.getElementById('about-me');

    const hashTagBody = document.createElement('div');

    hashTagBody.setAttribute('class','hashtag-container')

    tags.forEach(tag => {

        const label= document.createElement('label');
        
        label.innerText='#'+tag;
        
        label.setAttribute('class', 'hashtag');
        
        hashTagBody.appendChild(label);

    });

    aboutBody.appendChild(hashTagBody);


}
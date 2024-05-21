
const aboutUrl = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/about.json"

fetchAbout();

function fetchAbout() {

    fetch(aboutUrl).then(response => response.json())
        .then(about => {

            addAboutDetails(about);

            addAboutParagraphs(about);

            addStyleToFirstParagraph()

        });
}


/* 
*This method uses a forEach loop to create each menu item 
*/
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
const gallery = document.getElementById('gallery-container');

const gallery_url = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/records.json"

fetchGalleryData();

/* 
*This method fetches the gallery data as a json and resolve them from promise
* The mentod utilises arrow notation on the else block
*/
function fetchGalleryData() {

    fetch(gallery_url).then(response => response.json())
        .then(gallery_Items => {

            appendGalleryItems(gallery_Items);

        });
}


/* 
*This method uses a forEach loop to create each menu item 
*/
function appendGalleryItems(gallery_Items) {

    gallery_Items.forEach(element => {

        const card = createCard();

        const cardImage = createCardImage(element);

        card.appendChild(cardImage);

        const cardheader = createCardHeader(element);

        card.appendChild(cardheader);

        const cardBody = createcardBody(element);

        card.appendChild(cardBody);

        gallery.appendChild(card);

    });


}

function createCard() {

    const card = document.createElement("div");

    card.setAttribute("class", "card");

    return card;
}


function createcardBody(element) {

    const cardBody = document.createElement("p");

    cardBody.setAttribute("class", "card-text");

    cardBody.innerText = element.text;

    return cardBody;
}

function createCardHeader(element) {

    const cardheader = document.createElement("h1");

    cardheader.setAttribute("class", "title");

    cardheader.innerText = element.title;

    return cardheader;
}

function createCardImage(element) {

    const cardImage = document.createElement("img");

    cardImage.setAttribute("class", "card-image");

    cardImage.setAttribute("src", element.image);

    return cardImage;
}



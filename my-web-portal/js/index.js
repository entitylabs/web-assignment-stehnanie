/** usage of constant and temolate literal. 
*Template literal helps in web portal main title in multiple lines
The value is also constant, to ensure its immutable.
*/

const portalTitle = `Stephanie Music 
                     gallery`;

// selecting an element
const homeLabelElement = document.getElementById('home-label');


// modifying an element data
homeLabelElement.textContent = portalTitle;



const quotesURL = "http://127.0.0.1:5500/web-assignment-stehnanie/my-web-portal/resources/data/quotes.json"


setInterval(function () {

    renderRandomQuote();

}, 2 * 1000);

fetchQuotes();

/* 
*This method fetches the quotes as a json and resolve them from promise
* The mentod utilises arrow notation
*/
function fetchQuotes() {

    if (localStorage.getItem('quotes') == null) {
        fetch(quotesURL).then(response => response.json())
            .then(quotes => {

                storeQuotesInStorage(quotes);

            }).then(quote=> renderRandomQuote());
    }else {

    }
}

function storeQuotesInStorage(quotes) {

    localStorage.setItem('quotes', JSON.stringify(quotes));

}


function renderRandomQuote() {

    if (localStorage.getItem('quotes') != null) {

        const quotes = JSON.parse(localStorage.getItem('quotes'));
        const selectedRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const quote = document.getElementById('quote');
        quote.textContent = selectedRandomQuote.title;


        const quoteAuthor = document.getElementById('author');
        quoteAuthor.textContent = selectedRandomQuote.author;
    }

}



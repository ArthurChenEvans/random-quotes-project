"use strict";

let quoteMessage = document.getElementById("message");
let author = document.getElementById("author");
let button = document.getElementById("generate-button");


let apiQuotes = [];

function getSingleQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    return quote;
}

async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

function setQuoteAndAuthor(quote, authorFromQuote) {
    quoteMessage.textContent = quote;
    author.textContent = authorFromQuote;
}


getQuotes().then(quotes => {
    apiQuotes = quotes;
    const quote = getSingleQuote();
    setQuoteAndAuthor(quote.text, quote.author);
});

button.addEventListener('click', () => {
    const quote = getSingleQuote();
    setQuoteAndAuthor(quote.text, quote.author);
})
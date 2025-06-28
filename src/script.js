// script.js

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const likeBtn = document.getElementById("like-btn");
const copyBtn = document.getElementById("copy-btn");

let quotesData = []; // store all quotes

function fetchQuotes() {
  console.log("Fetching quotes...");

  fetch("http://localhost:3000/quotes")
    .then(response => response.json())
    .then(data => {
      console.log("Quotes received:", data.length);
      quotesData = data;
      displayRandomQuote();
    })
    .catch(error => {
      console.error("Error fetching quotes:", error);
      quoteEl.textContent = "Failed to load quotes. Please try again.";
      authorEl.textContent = "";
    });
}

function displayRandomQuote() {
  if (quotesData.length === 0) {
    quoteEl.textContent = "No quotes available.";
    authorEl.textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const quoteData = quotesData[randomIndex];
  quoteEl.textContent = `"${quoteData.text}"`;
  authorEl.textContent = `- ${quoteData.author || "Unknown"}`;
}

// Event listeners

document.addEventListener("DOMContentLoaded", fetchQuotes);
newQuoteBtn.addEventListener("click", displayRandomQuote);
likeBtn.addEventListener("click", () => alert("You liked this quote ❤️"));
copyBtn.addEventListener("click", () => {
  const quoteText = `${quoteEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(quoteText)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(err => console.error("Failed to copy: ", err));
});

// Keydown event: Press 'n' to get a new quote
document.addEventListener("keydown", (e) => {
  if (e.key === "n" || e.key === "N") {
    displayRandomQuote();
  }
});

console.log("Script loaded!");

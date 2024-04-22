const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex]);

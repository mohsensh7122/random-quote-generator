/*** 
 * `quotes` array 
 ***/

let quotes = [{
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "Not in doing what you like, but in liking what you do is the secret of happiness.",
    source: "J.M. Barrie"
  },
  {
    quote: "It always seems impossible until it is done.",
    source: "Nelson Mandala"
  },
  {
    quote: "I think everyone has a little black swan in them, it's just a matter of when you let it out.",
    source: "Mila Kunis",
    year: 2010,
    occupation: "Actor"
  },
  {
    quote: "Perfection is not just about control. It's also about letting go.",
    source: "Thomas Leroy",
    citation: "The Black Swan"
  }
]

/*** 
 * `background colors` array 
 ***/

const colors = ["#313e50","#3a435e","#455561","#5c6672","#6c6f7f"];


/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(){

  // Generates a random number
  let randomNumber = Math.floor(Math.random() * quotes.length);

  // Uses the random number to return a random quote from the quotes array
  return quotes[randomNumber];
}


/***
 * `getRandomColor` function
 ***/

function getRandomColor(){

  let randomNumber = Math.floor(Math.random() * colors.length);

  return colors[randomNumber];
}


console.log(getRandomColor());

/***
 * `printQuote` function
 ***/

function printQuote(){

  // returns a random quote and stores in the variable below
  let randomQuote = getRandomQuote();

  // returns a random background color and stores in the variable below

  let randomColor = getRandomColor();

  // The quote that will be display by clicking the button is stored in the quoteHtml variable
  let quoteHtml = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
  `

  if(randomQuote.citation){
    quoteHtml += `<span class="citation"> ${randomQuote.citation} </span>`
  }

  if(randomQuote.year){
    quoteHtml += `<span class="year"> ${randomQuote.year} </span>`
  }

  if(randomQuote.occupation){
    quoteHtml += `<span class="year"> ${randomQuote.occupation} </span>`
  }

  quoteHtml += "</p>";

  document.querySelector('body').style.backgroundColor = randomColor;
  document.getElementById('quote-box').innerHTML = quoteHtml;

}


setInterval(printQuote, 6000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
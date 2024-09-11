function changeTheme() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

const quotesCategory = {
   "general": [
      {
         "quote": "Spread love 💖 everywhere you go. Let no one ever come to you without leaving happier.",
         "author": "Mother Teresa"
      },
      {
         "quote": "When you reach the end of your rope 🪢 , tie a knot in it and hang on.",
         "author": "Franklin D. Roosevelt"
      },
      {
         "quote": "Always remember that you are absolutely unique 😇. Just like everyone else.",
         "author": "Margaret Mead"
      },
      {
         "quote": "The future belongs to those who believe in the beauty of their dreams. 😊",
         "author": "Eleanor Roosevelt"
      },

      {
         "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart 💓.",
         "author": "Helen Keller"
      }
   ],
   "success": [
      {
         "quote": "Success is not final; failure is not fatal: It is the courage to continue that counts.🌟",
         "author": "Winston S. Churchill"
      },
      {
         "quote": "Success usually comes to those who are too busy to be looking for it.🌼",
         "author": "Henry David Thoreau"
      },
      {
         "quote": "If you really look closely, most overnight successes took a long time.❤️",
         "author": "Steve Jobs"
      },

      {
         "quote": "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.🦚",
         "author": "Conrad Hilton"
      },
   ],
   "fun": [
      {
         "quote": "Forgive your enemies, but never forget their names.✌️",
         "author": "John F. Kennedy"
      },
      {
         "quote": "The road to success is always under construction.",
         "author": "Lily Tomlin"
      },
      {
         "quote": "I’m in shape. Round is a shape. 😌💕",
         "author": "George Carlin"
      },
      {
         "quote": "Never have more children than you have car windows.🤣",
         "author": "Erma Bombeck"
      },
      {
         "quote": "If you can’t live without me, why aren’t you dead already? Hmm?😂😏",
         "author": "Cynthia Heimel"
      },
      {
         "quote": "He who laughs last didn’t get the joke.",
         "author": "Charles de Gaulle"
      },
      {
         "quote": "My favourite machine at the gym is the vending machine.",
         "author": "Caroline Rhea"
      }

   ],
   "dream": [
      {
         "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.🌼",
         "author": "Harriet Tubman"
      },
      {
         "quote": "All our dreams can come true, if we have the courage to pursue them.💕",
         "author": "Walt Disney"
      },
      {
         "quote": "Follow your dreams, believe in yourself and don’t give up.✨",
         "author": "Rachel Corrie"
      },

      {
         "quote": "You have to dream before your dreams can come true.🌼",
         "author": "A. P. J. Abdul Kalam"
      }

   ]
};
let index = 0;
let selectedCategory = 'general';

function showQuote() {
   const quotes = quotesCategory[selectedCategory];
   var q = document.getElementById("quote");
   var a = document.getElementById("author");
   q.textContent = quotes[index].quote;
   a.textContent = quotes[index].author;
}
function Change() {
   const category = document.getElementById("category");
   selectedCategory = category.value;
   index = 0;
   showQuote();

}
function nextQuote() {
   const quotes = quotesCategory[selectedCategory];
   index = (index + 1) % quotes.length;
   showQuote();
}

function prevQuote() {
   const quotes = quotesCategory[selectedCategory];
   index = (index - 1 + quotes.length) % quotes.length;
   showQuote();
}

function ranQuote() {
   const quotes = quotesCategory[selectedCategory];
   index = Math.floor(Math.random() * quotes.length);
   showQuote();
}
function changeSizeBySlider() {
   let slider = document.getElementById("slider");
   quote.style.fontSize = slider.value + "px";
   author.style.fontSize = slider.value + "px";
}

showQuote();
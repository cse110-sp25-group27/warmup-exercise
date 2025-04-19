/**
     * Set up offsets for card images so they appear like a deck
     */
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        const id = parseInt(card.id);
        card.style.left = ((id) * 10) + 'px';
        card.style.top = ((id) * 2) + 'px';
        card.style.zIndex = 15 - id;
    });
});

/**
 * Global array holding the shuffled deck of cards
 */
let cards = [];

/**
 * Loads the deck with all 52 cards in order.
 */
function loadOrderedDeck() {
    cards = [];
    for (let i = 1; i <= 52; i++) {
        cards.push("frontend/assets/cards/card" + i + ".png");
    }
}


window.onload = () => {
    loadOrderedDeck();  //load cards in order
    shuffleDeck();       //shuffle them
};

document.getElementById('flip-button').addEventListener('click', () =>{
    const topCard = document.querySelector('.top-card'); 
    let isCurrentlyBack = topCard.src.includes("cardBack.png");
    if(isCurrentlyBack){
        topCard.src = cards[0]; 
    } else{
        topCard.src = "frontend/assets/cards/cardBack.png"; 
    }
})

function flipCard() {
    let i = Math.floor(Math.random() * 53) + 1;
    let image = "./frontend/assets/cards/" + i + ".png";
    document.getElementById('cardss').src = image;
    document.getElementById('flipCard').classList.toggle('flip');
}


// function resetCards() {
//     document.querySelectorAll('.card').forEach(c => {
//       c.classList.remove('open', 'opened');
//     });
//     stackCards(0.2);
//     closeAllCards();
//     animateCards(0);
// }

  function shuffleCards() {
    // reorder the DOM
    const tablecards = Array.from(document.querySelectorAll('.card'));
  
    let delay = 0;
    const shufflePasses = 5;
    let pass = 0;
    let zIndexCounter = 1;
  
    // reverse order so top‑stacked cards animate first
    tablecards.slice().reverse().forEach(card => {
      if (pass++ > shufflePasses) return;
  
      setTimeout(() => {
        // push it out…
        card.style.marginRight = '145px';
  
        setTimeout(() => {
          // bump its z‑index and pull it back
          card.style.zIndex = zIndexCounter++;
          card.style.marginLeft = '0px';
        }, 100);
  
      }, delay);
  
      delay += 600;
    });
  
  }

  function stackCards() {
    document.querySelectorAll('.card').forEach((card, i) => {
      setTimeout(() => {
        // reset to “stack” (no ani‑class)
        card.className = 'card';
      }, i * 150);
    });
  }
  
  function spreadCards() {
    document.querySelectorAll('.card').forEach((card, i) => {
      setTimeout(() => {
        // give it the ani<i> position class
        card.className = 'card ani' + i;
      }, i * 150);
    });
  }
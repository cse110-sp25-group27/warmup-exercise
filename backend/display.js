document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('grid-list');
  
    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
  
    // Create [1, 2, ..., 53] and shuffle it, then add 53 again to get 54 images (joker)
    const imageIndices = shuffleArray([...Array(53).keys()].map(i => i + 1));
    imageIndices.push(53); 
  
    for (let i = 0; i < 54; i++) {
      const card = document.createElement('li');
      card.className = 'flip-card';
  
      const cardInner = document.createElement('div');
      cardInner.className = 'flip-card-inner';
  
      const cardFront = document.createElement('div');
      cardFront.className = 'flip-card-front';
  
      const cardBack = document.createElement('div');
      cardBack.className = 'flip-card-back';
  
      const imageIndex = imageIndices[i];
      cardBack.style.backgroundImage = `url('../frontend/assets/cards/${imageIndex}.png')`;
  
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);
      list.appendChild(card);
    }
  });
  
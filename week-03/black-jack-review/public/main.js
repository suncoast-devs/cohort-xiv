const suits = ['Hearts', 'Clubs', 'Spade', 'Diamonds']

const faces = [
  { rank: 'Ace', value: 11 },
  { rank: '2', value: 2 },
  { rank: '3', value: 3 },
  { rank: '4', value: 4 },
  { rank: '5', value: 5 },
  { rank: '6', value: 6 },
  { rank: '7', value: 7 },
  { rank: '8', value: 8 },
  { rank: '9', value: 9 },
  { rank: '10', value: 10 },
  { rank: 'Jack', value: 10 },
  { rank: 'Queen', value: 10 },
  { rank: 'King', value: 10 }
]

let deck = []
let playerHand = []

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < faces.length; j++) {
      const card = {
        rank: faces[j].rank,
        value: faces[j].value,
        suits: suit,
        imageUrl:
          './stills/' + faces[j].rank.slice(0, 1) + suit.slice(0, 1) + '.jpg'
      }

      if (card.rank === '10') {
        // Set the imageUrl of the card to the correct value
        card.imageUrl = './still/' + '10' + suit.slice(0, 1) + '.jpg'
      }
      // Push creation to deck//
      deck.push(card)
      console.log('card pushed to deck')
    }
  }
}

const shuffleDeck = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let randomCard = Math.floor(Math.random() * 52)

    let tempCard = deck[i]
    deck[i] = deck[randomCard]
    deck[randomCard] = tempCard
  }
}

const dealCardToPlayer = () => {
  // remove one card from the deck (pop)
  const dealtCard = deck.pop()
  // add to player hand (push)
  playerHand.push(dealtCard)
  // add the new card to the HTML
  // create the new element
  const img = document.createElement('img')
  // set the content
  img.src = dealtCard.imageUrl
  // add new element to the HTML
  // const li = document.createElement('li')
  // li.appendChild(img)
  document.querySelector('.player-hand').appendChild(img)
  // update the player score
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealCardToPlayer()
  dealCardToPlayer()
  // dealCardToDealer()
  // dealCardToDealer()
}

document.addEventListener('DOMContentLoaded', main)

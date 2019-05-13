const suits = ['hearts', 'clubs', 'spades', 'diamonds']

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
let playerScore = 0

let dealerHand = []
let dealerScore = 0

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < faces.length; j++) {
      const card = {
        rank: faces[j].rank,
        value: faces[j].value,
        suits: suit,
        imageUrl: '/images/cards/' + faces[j].rank + '_of_' + suit + '.svg'
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
  // add the value of the card to the player
  playerScore += dealtCard.value
  // update the html
  document.querySelector('.player-score').textContent = playerScore
}

const dealCardToDealer = () => {
  // remove one card from the deck (pop)
  const dealtCard = deck.pop()
  // add to dealer hand (push)
  dealerHand.push(dealtCard)
  // add the new card to the HTML
  // create the new element
  const img = document.createElement('img')
  // set the content
  img.src = '/images/cards/card-back.png'
  // add new element to the HTML
  // const li = document.createElement('li')
  // li.appendChild(img)
  document.querySelector('.dealer-hand').appendChild(img)
  // update the dealer score
  // add the value of the card to the dealer
  dealerScore += dealtCard.value
  // update the html
  document.querySelector('.dealer-score').textContent = dealerScore
}

const playerHit = () => {
  console.log('hitting and stuff')
  // pop/push to player hand
  // display the card
  // update the total
  dealCardToPlayer()
  // some logic if  total > 21, display bust message
  if (playerScore > 21) {
    // busted
    document.querySelector('.message').textContent = 'Busted!'
    // and disable the hit button
    document.querySelector('.hit-button').disabled = true
    document.querySelector('.stay-button').disabled = true
  }
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.hit-button').addEventListener('click', playerHit)

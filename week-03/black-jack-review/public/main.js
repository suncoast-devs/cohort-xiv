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

// basic logic
const createDeck = () => {
  deck = []
  for (let _ = 0; _ < 3; _++) {
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

// HTML helpers

const setPlayerButtonsEnablablity = status => {
  document.querySelector('.hit-button').disabled = status
  document.querySelector('.stay-button').disabled = status
}

const showDealerHand = () => {
  // remove the card backs
  document.querySelector('.dealer-hand').textContent = ''
  // foreach card in dealer hand
  for (let i = 0; i < dealerHand.length; i++) {
    const card = dealerHand[i]
    const img = document.createElement('img')
    img.src = card.imageUrl
    // add that card to the html
    document.querySelector('.dealer-hand').appendChild(img)
  }
}

const displayMessage = message => {
  document.querySelector('.message').textContent = message
}

// events
const playerHit = () => {
  console.log('hitting and stuff')
  // pop/push to player hand
  // display the card
  // update the total
  dealCardToPlayer()
  // some logic if  total > 21, display bust message
  if (playerScore > 21) {
    // busted
    displayMessage('Busted!')
    // and disable the hit button
    setPlayerButtonsEnablablity(true)
    showDealerHand()
    // show the reset button
    // document.querySelector('.reset-button').classList.remove('hide')
    // create the button
    const btn = document.createElement('button')
    // set the text context
    btn.textContent = 'reset game'
    // add the styling (if any)
    btn.classList.add('reset-button')
    // add the event
    btn.onclick = resetGame
    // add the button to the HTML(DOM)
    document.querySelector('.reset-button-container').appendChild(btn)
  }
}

const playerStay = () => {
  // disable the hit button & stay button
  setPlayerButtonsEnablablity(true)
  document.querySelector('.reset-button').classList.remove('hide')

  // reveal dealer hand
  showDealerHand()

  // dealer logic
  // while dealer < 17 give the dealer cards
  while (dealerScore < 17) {
    dealCardToDealer()
    showDealerHand()
  }
  // declare winner (comparing dealer score and player score)

  if (dealerScore > 21) {
    // if dealer > 21
    // player wins
    displayMessage('player wins, dealer busts')
  } else if (playerScore > 21) {
    // if player > 21
    // dealer wins
    displayMessage('dealer wins, player bust')
  } else if (playerScore === dealerScore) {
    // if player == dealer
    // draw (push)
    displayMessage('tie')
  } else {
    // else  the player with the highest total wins
    if (playerScore > dealerScore) {
      displayMessage('player wins, both under 21')
    } else if (playerScore < dealerScore) {
      displayMessage('dealer wins, both under 21')
    } else {
      displayMessage('Not sure how, but i got here???')
    }
  }
}

const resetGame = () => {
  if (deck.length < 10) {
    createDeck()
  }
  // scores needs reset
  playerHand = []
  playerScore = 0
  document.querySelector('.player-hand').textContent = ''
  dealerHand = []
  dealerScore = 0
  document.querySelector('.dealer-hand').textContent = ''
  displayMessage('')
  // renable buttons
  setPlayerButtonsEnablablity(false)
  // hands need to reset
  shuffleDeck()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
  // document.querySelector('.reset-button').classList.add('hide')
  document.querySelector('.reset-button-container').textContent = ''
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
document.querySelector('.stay-button').addEventListener('click', playerStay)
// document.querySelector('.reset-button').addEventListener('click', resetGame)

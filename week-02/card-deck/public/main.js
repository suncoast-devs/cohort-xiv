const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const face = [
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
// const cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let cardDeck = []
let shownDeck = []

// push card to html

// .slice shuffled card
// .push shuffled card into new array  ----> shownDeck.push()
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'Pick a card, any card!'
  }
}
const createDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    const s = suit[i]
    console.log({ s }) // get suit
    for (let j = 0; j < face.length; j++) {
      // get face
      // push card to array
      const card = {
        rank: face[j].rank,
        value: face[j].value,
        suit: suit[i],
        imageUrl: face[j].rank + '_of_' + suit[i] + '.png'
      }
      cardDeck.push(card)
      console.log('card pushed to deck')
    }
  }
  console.log(cardDeck)
  document.querySelector('.output').textContent = '' // clear out old card
}
const shuffle = () => {
  shownDeck = []
  for (let i = 52; i > 1; i--) {
    // select a random card we have not hit yet
    const randomLocation = Math.floor(Math.random() * i)
    // swap the current card with the random card
    const lastCard = cardDeck[i] // define variables for shuffle
    cardDeck[i] = cardDeck[randomLocation]
    cardDeck[randomLocation] = lastCard
    console.log(lastCard)
    shownDeck.push(lastCard)
  }
}
const dealCard = () => {
  const firstCard = cardDeck[0]
  console.log(firstCard)
  document.querySelector('.output').textContent =
    firstCard.rank +
    ' of ' +
    firstCard.suit +
    ' has a value of ' +
    firstCard.value
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', createDeck)
// document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.deal').addEventListener('click', dealCard)

import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Character from './components/Character'

const characters = [
  {
    name: 'Evil Sith Lord',
    description: 'This bumbling idiot....',
    imageUrl: 'https://placekitten.com/200/200'
  },
  {
    name: 'Tobias Beckett',
    description: 'This smuggler and idiot....',
    imageUrl: 'https://placekitten.com/200/200'
  },
  {
    name: 'Obi wan',
    description: 'This cool guy',
    imageUrl: 'https://placekitten.com/200/200'
  },
  {
    name: 'Poe, Ace Pilot',
    description: 'This guy flies well',
    imageUrl: 'https://placekitten.com/200/200'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main>
          <ul class="character-list">
            <Character
              name="Yoda"
              description="The tiny green master..."
              pictureUrl="https://placekitten.com/200/400"
            />

            {characters.map(character => {
              return (
                <Character
                  name={character.name}
                  description={character.description}
                  pictureUrl={character.imageUrl}
                />
              )
            })}
          </ul>
        </main>
      </>
    )
  }
}

export default App

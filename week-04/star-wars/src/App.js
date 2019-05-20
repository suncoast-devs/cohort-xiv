import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Character from './components/Character'

const characters = [
  { name: 'Evil Sith Lord' },
  { name: 'Tobias Beckett' },
  { name: 'Obi wan' },
  { name: 'Poe, Ace Pilot' }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main>
          <ul class="character-list">
            {characters.map(character => {
              return <Character name={character.name} />
            })}
            {/* <li>
              <article class="character">
                 <img src="/images/jar-jar.jpg" alt="Jar Jar Binks" />
                <p></p>
                <p></p>
              </article>
            </li>
            <li>
              <article class="character">
                <img src="/images/tobias.jpg" alt="Jar Jar Binks" />
                <header></header>
                <p>Smuggler</p>
                <p>This smuggler and idiot....</p>
              </article>
            </li>
            <li>
              <article class="character">
                {/* <img src="/images/obi-wan.jpg" alt="Jar Jar Binks" />
                <header>Obi wan</header>
                <p>Jedi</p>
                <p>This awesome guy...</p>
              </article>
            </li>
            <li>
              <article class="character">
                {/* <img src="/images/poe.png" alt="Jar Jar Binks" />
                <p>Ace Pilot</p>
                <p>This guy makes bad choices....</p>
              </article>
            </li> */}
          </ul>
        </main>
      </>
    )
  }
}

export default App

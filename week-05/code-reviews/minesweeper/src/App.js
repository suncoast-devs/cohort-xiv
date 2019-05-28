import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    game: {
      board: []
    }
  }

  componentDidMount() {
    fetch('https://minesweeper-api.herokuapp.com/games', {
      method: 'POST',
      body: JSON.stringify({ difficulty: 0 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(newGame => {
        console.log(newGame)
        this.setState({
          game: newGame
        })
      })
  }

  cellClick = (row, column) => {
    console.log('clicked', { row, column })
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/check`,
      {
        method: 'POST',
        body: JSON.stringify({
          row: row,
          col: column
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(resp => resp.json())
      .then(newState => {
        console.log(newState)
        this.setState({
          game: newState
        })
      })
  }

  flagClick = (event, row, column) => {
    event.preventDefault()
    console.log('flag', { row, column })
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/flag`,
      {
        method: 'POST',
        body: JSON.stringify({
          row: row,
          col: column
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(resp => resp.json())
      .then(newState => {
        console.log(newState)
        this.setState({
          game: newState
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <table className="main-board">
          <tbody>
            {this.state.game.board.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((column, j) => {
                    return (
                      <td
                        key={j}
                        className="cell"
                        onClick={() => this.cellClick(i, j)}
                        onContextMenu={event => this.flagClick(event, i, j)}
                      >
                        {this.state.game.board[i][j]}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default App

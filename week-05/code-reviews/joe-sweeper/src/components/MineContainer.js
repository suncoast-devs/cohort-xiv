import React, { Component } from 'react'

const apiUrl = 'https://minesweeper-api.herokuapp.com/'
class MineContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: {
        board: []
      },
      message: ''
    }
  }

  displayGameResult() {
    // ternary that doesn't WORK MARK
    //   return this.state.game.state === 'new' || 'playing'
    //     ? this.setState({
    //         message: 'sweeping mines...'
    //       })
    //     : this.state.game.state === 'lost'
    //     ? this.setState({
    //         message: 'You lose.'
    //       })
    //     : this.setState({
    //         message: 'You won!'
    //       })
    // }
    if (this.state.game.state === 'win') {
      this.setState({
        message: 'You won!'
      })
    } else if (this.state.game.state === 'lost') {
      this.setState({
        message: 'You lose.'
      })
    } else if (this.state.game.state === 'new') {
      this.setState({
        message: ''
      })
    } else {
      this.setState({
        message: 'Sweeping mines'
      })
    }
  }

  componentDidMount() {
    this.start()
  }

  start = () => {
    fetch(`${apiUrl}games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 0 })
    })
      .then(resp => {
        return resp.json()
      })
      .then(newGame => {
        console.log({ newGame })
        this.setState({
          game: newGame,
          message: ''
        })
      })
  }

  doCellClick = (row, col) => {
    console.log('i clicked', row, col)
    fetch(`${apiUrl}games/${this.state.game.id}/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ row: row, col: col })
    })
      .then(resp => {
        return resp.json()
      })
      .then(newGameState => {
        console.log({ newGameState })

        this.setState({
          game: newGameState,
          message: newGameState.state
        })
        this.displayGameResult()
      })
  }

  doFlaggedCell = (event, row, col) => {
    console.log(event)
    event.preventDefault()
    console.log('flagged', row, col)
    fetch(`${apiUrl}games/${this.state.game.id}/flag`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ row: row, col: col })
    })
      .then(resp => {
        return resp.json()
      })
      .then(newGameState => {
        console.log({ newGameState })
        this.setState({
          game: newGameState
        })
      })
  }

  render() {
    return (
      <>
        <button className="reset-button" onClick={() => this.start()}>
          Reset
        </button>
        <div className="center-mines">
          <table>
            <tbody>
              {this.state.game.board.map((row, i) => {
                return (
                  <tr key={i}>
                    {row.map((col, j) => {
                      return (
                        <td
                          key={j}
                          className="cells"
                          onClick={() => this.doCellClick(i, j)}
                          onContextMenu={event =>
                            this.doFlaggedCell(event, i, j)
                          }
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
        </div>
        <h2 className="display-message">{this.state.message}</h2>
      </>
    )
  }
}

export default MineContainer

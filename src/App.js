import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null), //Builds a 9 element null array
      winner: null, // Sets the default winner status to null
      currentPlayer: "❌" // Sets the default/first player
    }
  }

  thePlayerSelection = (currentClick) => {
    const { squares, currentPlayer, winner } = this.state
    if (squares[currentClick] === null && !winner) {
      squares[currentClick] = currentPlayer
      this.setState({
        squares: squares,
        currentPlayer: currentPlayer === "❌" ? "⭕️" : "❌"
      })
    }
    this.winning()
  }

  winning = () => {
    // Establishes the winning index positions
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningConditions.forEach(value => {
      const [one, two, three] = value
      const { squares } = this.state
      if (
        squares[one] === "❌" && squares[two] === "❌" && squares[three] === "❌"
      ) {
        this.setState({ winner: "❌" })
      } else if (
        squares[one] === "⭕️" && squares[two] === "⭕️" && squares[three] === "⭕️"
      ) {
        this.setState({ winner: "⭕️" })
      }
    })
  }

  restartTheGame = () => {
    // Resets the board back to its initial state
    this.setState({
      squares: Array(9).fill(null),
      winner: null,
      currentPlayer: "❌",
    })
  }

  render() {
    const tieGame = this.state.squares.every(value => value !== null)
    return (
      <>
        <h1>Tic Tac Toe</h1>
        {this.state.winner && <h3>Player {this.state.winner} WINS the game!!</h3>}
        {(tieGame && !this.state.winner) && <h3>TIE game!</h3>}
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square
                value={value}
                index={index}
                key={index}
                thePlayerSelection={this.thePlayerSelection}
              />
            )
          })}
        </div>
        {(this.state.winner || tieGame) &&
          <div className="button">
            <button onClick={this.restartTheGame}>
              Play Again
            </button>
          </div>
        }
      </>
    )
  }
}

export default App

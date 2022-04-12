import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: null,
      player: "❌",
      // player2: "⭕️"
    }
  }

  // gamePlay = (index) => {
  //   const { squares, winner, player } = this.state.
  //   if(index === player) {
  //     squares[index] = player
  //     this.setState({squares: squares})
  //   } else {
  //     squares[index] = player2
  //     this.setState({squares: squares})
  //   }
  // }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
            {this.state.squares.map((value, index) => {
              return(
                <Square
                value={this.state.squares}
                index={index}
                key={index}
                />
              )
            })}
          </div>
      </>
    )
  }
}
export default App

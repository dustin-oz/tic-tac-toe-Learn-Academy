import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      winner: null,
      player: "❌"
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
            {this.state.squares.map((value, index) => {
              return(
                <Square
                />
              )
            })}
          </div>
      </>
    )
  }
}
export default App

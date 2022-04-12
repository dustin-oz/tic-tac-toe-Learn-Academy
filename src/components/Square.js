import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.gamePlay(this.props.index)
  }
  
  render(){
    return(
      <>
        <div className="square">
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square

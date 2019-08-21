import React from 'react'
import Cell from './Cell'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeX: 10,
      sizeY: 10
    }
  }

  createBoard = () => {
    let cells = []

    // Outer loop to create row (y position)
    for (let i = 0; i < this.state.sizeY; i++) {
      let children = []
      //Inner loop to create cell in row (x position)
      for (let j = 0; j < this.state.sizeX; j++) {
        children.push(<Cell />)
      }
      //Create the parent and add the children
      cells.push(<div>{children}</div>)
    }
    return cells
  }

  render() {
    return <div className="game-board">{this.createBoard()}</div>
  }
}

export default GameBoard

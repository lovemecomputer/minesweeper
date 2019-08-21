import React from 'react'
import Cell from './Cell'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeX: 10,
      sizeY: 10,
      cells: []
    }
  }

  initializeGame = () => {
    this.setState({ cells: this.createCells() })
  }

  createCells = () => {
    let cells = []

    // Outer loop to create row (y position)
    for (let i = 0; i < this.state.sizeY; i++) {
      let row = []
      //Inner loop to create cell in row (x position)
      for (let j = 0; j < this.state.sizeX; j++) {
        row.push({ cell: { y: i, x: j, mine: false, cleared: false } })
      }
      cells.push(row)
    }
    return cells
  }

  generateMines = () => {
    // NOTE: separate logic for mines here!
    // 2D vector of randomInt coords to place mine,
    // re-do mine placement if one is already assigned
  }

  componentDidMount() {
    this.initializeGame()
  }

  handleCellClick(e, { x, y }) {
    // NOTE: idea is to receive coordinates for cell,
    // then look those coordinates up in this.state.cells for safety
  }

  render() {
    console.log(this.state)
    const renderedCells = this.state.cells.map((item, indexY) => {
      return (
        <div key={indexY}>
          {this.state.cells[indexY].map((item, indexX) => {
            return <Cell key={indexX} />
          })}
        </div>
      )
    })
    // NOTE: to respond to Kat's question, this is where i'd rather be rendering the board!
    return <div className="game-board">{renderedCells}</div>
  }
}

export default GameBoard

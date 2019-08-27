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
    this.handleCellClick = this.handleCellClick.bind(this)
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
        row.push({ cell: { y: i, x: j, hasMine: false, isCleared: false } })
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

  checkCell(cells, y, x) {}

  clearCell(cells, y, x) {}

  // NOTE: idea is to receive coordinates for cell,
  // then look those coordinates up in this.state.cells for adjustment
  handleCellClick(event, coordinates) {
    let currentCells = this.state.cells
    if (currentCells[coordinates.y][coordinates.x].isCleared === true) {
      //preview any neighbors
      return
    }
    currentCells[coordinates.y][coordinates.x].isCleared = true
    this.setState({ cells: currentCells })
  }

  render() {
    const renderedCells = this.state.cells.map((item, indexY) => {
      return (
        <div className="cell-row" key={indexY}>
          {this.state.cells[indexY].map((item, indexX) => {
            const currentCell = this.state.cells[indexY][indexX]
            return (
              <Cell
                key={indexY.toString() + ',' + indexX.toString()}
                hasMine={currentCell.hasMine}
                isCleared={currentCell.isCleared}
                y={indexY}
                x={indexX}
                onClick={this.handleCellClick}
              />
            )
          })}
        </div>
      )
    })

    return <div className="game-board">{renderedCells}</div>
  }
}

export default GameBoard

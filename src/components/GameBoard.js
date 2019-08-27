import React from 'react'
import Cell from './Cell'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeX: 10,
      sizeY: 10,
      numberOfMines: 35,
      cells: []
    }
    this.handleCellClick = this.handleCellClick.bind(this)
    this.generateMines = this.generateMines.bind(this)
  }

  initializeGame = () => {
    let initialCells = this.createCells()
    initialCells = this.generateMines(initialCells)
    this.setState({ cells: initialCells })
  }

  createCells = () => {
    let cells = []

    // Outer loop to create row (y position)
    for (let i = 0; i < this.state.sizeY; i++) {
      let row = []
      //Inner loop to create cell in row (x position)
      for (let j = 0; j < this.state.sizeX; j++) {
        row.push({
          cell: { y: i, x: j, hasMine: false, isCleared: false, neighbors: 0 }
        })
      }
      cells.push(row)
    }
    return cells
  }

  // NOTE: mutative statement
  generateMines = cells => {
    // NOTE: separate logic for mines here!
    // 2D vector of randomInt coords to place mine,
    // re-do mine placement if one is already assigned

    for (let i = 0; i < this.state.numberOfMines; i++) {
      let currentCell =
        cells[Math.floor(Math.random() * this.state.sizeY)][
          Math.floor(Math.random() * this.state.sizeX)
        ]
      currentCell.hasMine = true
      currentCell.neighbors = 2
    }

    return cells
  }

  getSiblings = (board, thisY, thisX) => {
    const surrounding = [
      { y: -1, x: -1 },
      { y: -1, x: 0 },
      { y: -1, x: 1 },
      { y: 0, x: -1 },
      { y: 0, x: 1 },
      { y: 1, x: -1 },
      { y: 1, x: 0 },
      { y: 1, x: 1 }
    ]

    const siblings = []

    for (let sibling of surrounding) {
      const diff = {
        y: thisY + sibling.y,
        x: thisX + sibling.x
      }
      if (board[diff.y] && board[diff.y][diff.x]) {
        siblings.push(board[diff.y][diff.x])
      }
    }

    return siblings
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
    console.log('siblings')
    console.log(this.getSiblings(currentCells, coordinates.y, coordinates.x))
    this.setState({ cells: currentCells })
  }

  render() {
    const renderedCells = this.state.cells.map((item, indexY) => {
      return (
        <div className="cell-row" key={indexY}>
          {this.state.cells[indexY].map((item, indexX) => {
            const currentCell = this.state.cells[indexY][indexX]
            console.log(currentCell)
            return (
              <Cell
                key={indexY.toString() + ',' + indexX.toString()}
                hasMine={currentCell.hasMine}
                isCleared={currentCell.isCleared}
                neighbors={5}
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

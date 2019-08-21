import React from 'react'
import Cell from './Cell'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeX: 10,
      sizeY: 10,
      cells: [[]],
      renderedBoard: [[]]
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

  renderBoard = () => {
    console.log('renderBoard()')
    console.log(this.state.cells)

    let renderedCells = []

    // row (y position)
    for (let i = 0; i < this.state.cells.length; i++) {
      console.log(i)
      let children = []
      // cell (x position)
      for (let j = 0; j < this.state.cells[j].length; j++) {
        console.log(i)
        children.push(<Cell y={i} x={j} key={`${i},${j}`} />)
      }
      //Create the row wrapper and add the children to it
      renderedCells.push(<div key={`row-${i}`}>{children}</div>)
    }

    console.log(renderedCells)
    this.setState({ renderedBoard: renderedCells })
  }

  componentDidMount() {
    this.initializeGame()
  }

  render() {
    console.log(this.state)
    return <div className="game-board">{}</div>
  }
}

export default GameBoard

import React from 'react'

class Cell extends React.Component {
  render() {
    return (
      <div className="cell" onClick={this.handleClickCell}>
        &nbsp; (y:{this.props.y}, x:{this.props.x}
      </div>
    )
  }
}

export default Cell

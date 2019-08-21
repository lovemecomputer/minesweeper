import React from 'react'

class Cell extends React.Component {
  render() {
    return (
      <div className="cell" onClick={this.handleClickCell}>
        &nbsp; (y:{this.props.y}, x:{this.props.x}
        {/* NOTE: rendering mine glyph based on this.props.mine (boolean) */}
      </div>
    )
  }
}

export default Cell

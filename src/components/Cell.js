import React from 'react'

function Cell() {
  return (
    <div className="cell">
      &nbsp;
      {/* NOTE: rendering mine glyph based on this.props.mine (boolean) */}
    </div>
  )
}

export default Cell

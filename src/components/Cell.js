import React from 'react'
import classNames from 'classnames'

export default function Cell(props) {
  const appliedClassNames = classNames('cell', props.className, {
    isCleared: props.isCleared,
    hasMine: props.hasMine
  })

  return (
    <div
      className={appliedClassNames}
      onClick={event => {
        props.onClick(event, { y: props.y, x: props.x })
      }}
    >
      {/* {`${props.y},${props.x}`} */}
      {/* NOTE: rendering mine glyph based on this.props.mine (boolean) */}
    </div>
  )
}

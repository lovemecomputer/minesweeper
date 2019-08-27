import React from 'react'
import classNames from 'classnames'

export default function Cell({
  onClick,
  className,
  y,
  x,
  hasMine,
  isCleared,
  neighbors
}) {
  const appliedClassNames = classNames('cell', className, {
    isCleared: isCleared,
    hasMine: hasMine
  })
  // console.log(props)

  return (
    <div
      className={appliedClassNames}
      onClick={event => {
        onClick(event, { y: y, x: x })
      }}
    >
      <div className="neighborCount">
        {isCleared ? (hasMine ? `💣` : neighbors ? `${neighbors}` : '') : ''}
      </div>
      {/* {`${y},${x}`} */}
      {/* NOTE: rendering mine glyph based on this.mine (boolean) */}
    </div>
  )
}

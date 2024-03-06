import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = ({ style }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
        ...style,
      }}
    >
      <div
        style={{
          height: 115,
          position: 'absolute',
          left: 130,
          top: 49,
          display: 'flex',
          flexDirection: 'row',
          width: 440,
          gap: 10,
          paddingBottom: '31px',
        }}
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
        />
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ width: 118, height: 150 }}
        />
      </div>
    </div>
  )
}

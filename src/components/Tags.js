import React from 'react'

import { Tag } from 'rbx'

const chooseColor = color => {
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)
  var c = (r * 299 + g * 587 + b * 114) / 1000
  return c >= 128 ? 'black' : 'white'
}

const Tags = ({ labels, setFilter }) => {
  return (
    <React.Fragment>
      {labels.map(label => (
        <Tag
          key={label.node_id}
          onClick={setFilter ? () => setFilter(label) : null}
          style={{
            backgroundColor: `#${label.color}`,
            color: `${chooseColor(label.color)}`,
            cursor: `${setFilter ? 'pointer' : null}`
          }}
        >
          {label.name}
        </Tag>
      ))}
    </React.Fragment>
  )
}

export default Tags

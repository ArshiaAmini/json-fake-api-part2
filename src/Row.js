import React from 'react'
import Cell from './Cell'

const Row = ({contents}) => {
  return (
    <tr>
      {Object.entries(contents).map(([key,value]) => {
        return (
          <Cell key={ key} cellData={JSON.stringify(value)} />
        )
      })}
    </tr>
  )
}

export default Row
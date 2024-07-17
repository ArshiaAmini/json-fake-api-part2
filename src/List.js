import React from 'react'

function List({ contents }) {
  
  return (
    <li>

      {JSON.stringify(contents)}

    </li>
  
  )
}

export default List
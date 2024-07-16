import React from 'react'

const ListItem = ({ contents, setContents }) => {
  
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.id}>
          {JSON.stringify(content)}
        </li>
        
      ))}
      

    </ul>
  )
}

export default ListItem
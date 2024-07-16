import React from 'react'

const ListItem = ({ contents, errMsg }) => {
  
  return (
    <ul >
      <p>{errMsg}</p>
      {contents.map((content) => (
        
        <li key={content.id} >
          {JSON.stringify(content)}
        </li>
      ))}
      

    </ul>
  )
}

export default ListItem
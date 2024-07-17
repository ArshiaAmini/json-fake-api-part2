import React from 'react'
import List from './List'

const ListItem = ({ contents, errMsg }) => {
  
  return (
    <ul >
      <p>{errMsg}</p>
      {contents.map((content) => (
        <List
          key={content.id}
          contents={contents}
        />
        
       
      ))}
      

    </ul>
  )
}

export default ListItem
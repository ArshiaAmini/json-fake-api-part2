import React from 'react'
import Row from './Row'


const Table = ({ contents }) => {
  

  return (

    <div className='table-contents'>
      <table>
        <tbody>
        {contents.map(contents=>(
          <Row key={contents.id} contents={contents} />
        ))}
          </tbody>
        </table> 
   </div>

  )
}

export default Table
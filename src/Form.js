import React from 'react'
import Button from './Button'

const Form = ({ typeRequest, setTypeRequest }) => {
  
  return (
    <form
      onSubmit={(e) => e.preventDefault()}   
    >
      <Button
        buttonName ="users"
        typeRequest={typeRequest}
        setTypeRequest={setTypeRequest}
        
     >
     </Button>
      <Button
        buttonName ="posts"
        typeRequest={typeRequest}
        setTypeRequest={setTypeRequest}
        
     >
     </Button>
      <Button
        buttonName ="comments"
        typeRequest={typeRequest}
        setTypeRequest={setTypeRequest}
        
     >
     </Button>
     
    </form>
  )
}

export default Form
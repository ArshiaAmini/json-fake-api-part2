import React from 'react'
import Button from './Button'

const Form = ({ typeRequest, setTypeRequest }) => {
  
  return (
    <form
      onSubmit={(e) => e.preventDefault()}   //this method is used to prevent the default behavior of a specified event from occuring. like refreshing
    >
      {/* 
      the Button components receives props of typeRequest, setTypeRequest and buttonName 
      
      */}
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
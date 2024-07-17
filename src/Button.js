import React from 'react'

function Button({ buttonName, typeRequest, setTypeRequest }) {
  
  return (
    <button
      type='button'
      className={buttonName ===typeRequest ? 'selected' : null } // this class name perfrom the conditional operation by ternary operator
      onClick={() => {
        setTypeRequest(buttonName) // this is also called prop drilling this sets the value of  useState typeRequest in the app components to the name of buttons

      }}
    
    >
      {buttonName}
    </button>
  )
}

export default Button
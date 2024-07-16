import React from 'react'

function Button({ buttonName, typeRequest, setTypeRequest }) {
  
  return (
    <button
      type='button'
      className={buttonName===buttonName ? 'selected' : null }
      onClick={() => {
        setTypeRequest(buttonName)

      }}
    
    >
      {buttonName}
    </button>
  )
}

export default Button
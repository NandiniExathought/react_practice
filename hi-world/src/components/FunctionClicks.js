import React from 'react'

function FunctionClicks() {

    function clickHandler() {
        console.log('Button clicked');
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button> 
      {/* donot add () , clickHandler(). */}
    </div>
  )
}

export default FunctionClicks

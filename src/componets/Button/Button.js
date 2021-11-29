import React from 'react'
import './Button.css'
const Button = ({isActive, clicked}) => {
   return (
       <div>
           <button onClick={clicked}> {isActive ? "Who's next?": "Introduce me"} </button>
       </div>
   )
}
export default Button;
import React from 'react'


const Button = ({children, hanldeClick}) => (
    <button onClick={hanldeClick} > 
        {`${children}`} 
    </button> 
)


export default Button
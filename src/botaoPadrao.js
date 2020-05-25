import React from 'react'

const BotaoPadrao = ({children, handleClick}) => (
    <button onClick={handleClick}>
        {children}
    </button>

)

export default BotaoPadrao
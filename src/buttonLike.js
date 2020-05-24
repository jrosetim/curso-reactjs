import React from 'react'
import Button from './button'

const ButtonLike = () => (
    <Button handleClick = {() => alert('Like Button')}> 
        Like 
    </Button>
)

export default ButtonLike
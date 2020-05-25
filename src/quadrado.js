import React from 'react'

const Quadrado = ({color}) => (
    <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
    }} />
)

Quadrado.defaultProps = {
    color: 'gray'
}

export default Quadrado
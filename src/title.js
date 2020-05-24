import React from 'react'


const Title = (props) => {
    return <h1> Olá {`${props.name} ${props.lastName}`} </h1>
}

Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem Sobrenome'
}

// const Title = React.createClass({
//     getDefaultProps: () =>{
//         return {
//             name: 'Desconhecido',
//             lastName: 'Sem Sobrenome'
//         }
//     },

//     render: function () {
//         return (
//             <h1> Ola {this.props.name + ' ' + this.props.lastName } </h1>
//         )
//     }
// })

export default Title
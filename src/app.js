import React, {Component} from 'react'
import Quadrado from './quadrado'
import BotaoPadrao from './botaoPadrao'
import Button from './button';

class App extends Component {
  constructor (){
    super();

    this.state ={
      color: 'gray'
    }
  }

  render() {
    return (
      <div className='container' >
        <Quadrado  color={ this.state.color }/>

        { ['red', 'blue', 'black', 'green'].map( (color, index) => (
          <Button key={index} hanldeClick= { () => this.setState({color} )}  >
            {color}
          </Button>
        )) }
      </div>
    )
  }

}

export default App
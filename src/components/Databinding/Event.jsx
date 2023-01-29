import React, { Component } from 'react'

export default class Event extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleClick = (abc) => { 
        alert(abc)
    };



  render() {
    let message = 'dao vcl'
    return (
      <div className='container'>
        <button onClick={() => this.handleClick(message)}>Show Message</button>
      </div>
    )
  }
}

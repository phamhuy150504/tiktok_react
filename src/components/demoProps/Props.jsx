import React, { Component } from 'react'

export default class Props extends Component {
    constructor(props) {
        super(props);
        
    }

  render() {
    return (
      <div>
        Hello {this.props.abc}
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class SinhVien extends Component {

    hoTen = 'Pham Gia huy';
    class = 'Front-end';
  render() {
    return (
      <div>
        <ul>
            <li>
               {this.hoTen} - {this.class} 
            </li>
        </ul>
      </div>
    )
  }
}

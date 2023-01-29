import React, { Component } from 'react'
import data from '../../data/data.json'
export default class BaiTapVongLap extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            data,
        }
    };

    renderList() {

        return this.state.data.map((item, index) => {
            return <div key={index} className="col-4">
                <img src={item.hinhAnh} style={{width: 250, height: 400}}></img>
                <p>{item.moTa.length > 70 ? item.moTa.substr(0,100) + '..' : item.mota}</p>
            </div>
        })
    }
  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.renderList()}
        </div>
      </div>
    )
  }
}

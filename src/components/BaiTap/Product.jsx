import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let {product} = this.props;
    let {hinhAnh, manHinh, tenSP} = product;
    return (
        <div className='col-3'>
          <div className='card bg-ligh'>
            <img className='card-img-top' src={hinhAnh}></img>
            <div className='card-body text-center'>
              <h4 className="card-title text-center">
                {tenSP}
              </h4>
              <p className='card-text'>{manHinh}</p>
            </div>
          </div> 
          
        </div>
    )
  }
}

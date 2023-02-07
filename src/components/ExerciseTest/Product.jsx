import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const {phone, addToCart} = this.props;
    return (
      <div className='col-4'>
        <div className='container'>
            <div className='card text-center bg-dark text-white'>
            <h2>{phone.tenSP}</h2>
                <img className='card-img-top' style={{width: 280, height: 300}} src={phone.hinhAnh} />
                <div className='card-body'>
                    <h2>{phone.manHinh.length > 15 ? phone.manHinh.substr(0, 15) : phone.manHinh}</h2>
                    <button className='btn btn-primary'>See Detail</button>
                    <button onClick={() => addToCart(phone)} className='btn btn-danger'>ADD TO CARD </button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Product from './Product'
export default class ListProduct extends Component {
  renderListProduct() {
    const { data, addToCart } = this.props;
    return data.map((item, index) => {
      return <Product key={index} phone={item} addToCart={addToCart}/>
    })
  }
  render() {
    return (
      <div>
        <div className='row'>
          {this.renderListProduct()}
        </div>
      </div>
    )
  }
}

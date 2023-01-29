import React, { Component } from 'react'
import Product from './Product';


export default class ProductList extends Component {
  constructor(props) { 
    super(props);
    this.state = {
    };
  }

  render() {
    let { arrProduct } = this.props;
    const renderProduct = () => {
      return arrProduct.map((sp, index) => {
        return (

          <Product key={index} product={sp} />
        );
      });  
    };

    return (
      <div>
        <div className='container'>
          <h3 className='text-center'>BEST SMARTPHONE</h3>
          <div className='row'>
            {renderProduct()}
          </div>
          <div className='row'>
            <div className='col-6'>
              abcvc
            </div>   
            <div className='col-6'>
              abcvc
            </div>
          </div>
        </div>
      </div>
    )
  }
}

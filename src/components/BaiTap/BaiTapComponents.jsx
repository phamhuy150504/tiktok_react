import React, { Component } from 'react'
import Headers from './Header';
import Product from './Product';
import ProductList from './ProductList';
import Slider from './Slider';
import Footer from './Footer';
import phoneData from '../../data/phoneData.json'

export default class BaiTapComponents extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      phoneData
    }
  }
 
  render() {
    return (
        <ProductList arrProduct={this.state.phoneData}/>
    )
  }
}

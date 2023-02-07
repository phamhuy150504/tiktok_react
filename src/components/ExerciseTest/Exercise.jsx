import React, { Component } from 'react'
import ProductsList from './ProductsList'
import data from '../../data/phoneData.json'
import Modal from './Modal'
export default class Exercise extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            data: [{ "maSP": 1, "tenSP": "VinSmart Live", "amount":1, "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }],
        };
    };

    // add to Cart
    addToCart = (product) => {
        this.setState({
             cart: [...this.state.data, product],
        });
    };

    totalAmount () {
        return this.state.data.reduce((init, product) => {
            return init += product.amount;
        }, 0)   
    };
    render() {
        return (
            <div>
                <h2 className='text-center'>EXERCISE CHECK</h2>
                <div className='container'>
                <div className='text-right'>
                    <button  type="button" className="btn bg-dark text-right" data-toggle="modal" data-target="#modelId" style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }}>
                        Gio Hang ({this.totalAmount()})
                    </button>
                </div>
                    <Modal cart={this.state.data}/>
                    <ProductsList data={data} addToCart={this.addToCart}/>
                </div>
            </div>
        )
    }
}

import React, { Component } from "react";
import data from "../../data/phoneData.json";
import Modal from "./Modal";
import ListProduct from "./ListProduct";
export default class ExerciseCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  addToCart(Product) {
    let productCart = {
      maSP: Product.maSP,
      tenSP: Product.tenSP,
      giaBan: Product.giaBan,
      hinhAnh: Product.hinhAnh,
      amount: 1,
    };
    let data = [...this.state.data];
    let index = this.state.data.findIndex(
      (item) => item.maSP === productCart.maSP
    );
    if (index !== -1) {
      data[index].amount += 1;
    } else {
      data.push(productCart);
    }
    this.setState({
      data: data,
    });
  }

  removeProduct = (maSP) => {
    let data = [...this.state.data];
    if (maSP) {
      let index = data.findIndex((item) => item.maSP === maSP);
      if (index !== -1) {
        data.splice(index, 1);
      }
    }
    this.setState({
      data: data,
    });
  };

  render() {
    let sumAmount = this.state.data.reduce((init, item) => {
      return (init += item.amount);
    }, 0);

    return (
      <div className="container">
        <h2 className="text-center text-success">Exercise Cart</h2>
        <div className="container">
          <div className="text-right">
            <button
              type="button"
              className="btn bg-dark text-right"
              data-toggle="modal"
              data-target="#modelId"
              style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
            >
              Gio Hang ({sumAmount})
            </button>
          </div>
          <Modal removeProduct={this.removeProduct} state={this.state.data} />
          <ListProduct addToCart={this.addToCart.bind(this)} data={data} />
        </div>
      </div>
    );
  }
}

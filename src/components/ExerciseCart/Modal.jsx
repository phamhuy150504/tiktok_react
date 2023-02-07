import React, { Component } from "react";

export default class Modal extends Component {
  renderCart() {
    const { state, removeProduct } = this.props;
    return state.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              style={{
                width: "50px",
                height: "75px",
              }}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>{item.amount}</td>
          <td>{item.donGia}</td>
          <td>{item.amount * item.giaBan}</td>
          <td>
            <button
              onClick={() => removeProduct(item.maSP)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ width: "800px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>ID Product</td>
                      <td>Photos</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Amount</td>
                      <td>Intro Money</td>
                      <td>Remove</td>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

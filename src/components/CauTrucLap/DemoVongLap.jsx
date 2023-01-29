import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSanPham: 'IPhone X', price: 1000 },
                { maSP: 2, tenSanPham: 'Samsung galaxy', price: 1300 },
                { maSP: 1, tenSanPham: 'Oppo', price: 1200 },
            ]
        }
    };

    // Viet phuong thuc render cac san pham thanh cac tag tr
    renderProducts() {
        return this.state.mangSanPham.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td>{item.tenSanPham}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
    };


    render() {
        return (
            <div className='container'>
                <h3 className='bg-dark p-5 text-center text-white'>Demo Vong Lap React</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

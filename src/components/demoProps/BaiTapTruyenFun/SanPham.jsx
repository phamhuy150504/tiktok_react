import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let { sanPham, seeDetail } = this.props
        return (
                <div className='col-4' >
                    <div className='card'>
                        <img className='card-img-top' src={sanPham.hinhAnh} />
                        <div className='card-body'>
                            <h4 className='card-title'>{sanPham.tenSP}</h4>
                            <button className='btn btn-success' onClick={() => seeDetail(sanPham)}>Details</button>
                        </div>
                    </div>
                </div>
        );
    };
};

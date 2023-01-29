import React, { Component } from 'react'
import phoneData from '../../../data/phoneData.json'
import SanPham from './SanPham'


export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spChiTiet: phoneData[1]
        }
    }

    renderProduct = () => {
        return phoneData.map((phone, index) => {
            return (
               <SanPham sanPham={phone} key={index} seeDetail={this.xemChiTiet} />
            )
        })
    }

    // handle see details button
    xemChiTiet = (sanPham) => {
        this.setState({
            spChiTiet: sanPham
        })
    }

    // render React component
    render() {
        let { spChiTiet } = this.state;
        return (
            <div>
                <div className='row'>
                    {this.renderProduct()}
                </div>
                <hr />
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h3>{spChiTiet.tenSP}</h3>
                        <img src={spChiTiet.hinhAnh} style={{ width: 350, height: 400 }} />
                    </div>
                    <div className='col-6'>
                        <h3>Thông Tin Kỹ Thuật</h3>
                        <table className='table'>
                            <tr>
                                <th>Màn Hình</th>
                                <th>{spChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều Hành</th>
                                <th>{spChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Truoc</th>
                                <th>{spChiTiet.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{spChiTiet.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{spChiTiet.ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{spChiTiet.rom}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
